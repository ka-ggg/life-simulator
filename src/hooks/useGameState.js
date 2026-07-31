import { useState, useCallback } from 'react';
import {
  createInitialCharacter,
  applyAction,
  applyEvent,
  getAvailableEvents,
  getEnding,
  getLifeStage,
  formatAge,
  CAREER_WORK_STAT_MAP,
} from '../data/gameData';
import {
  createJobState,
  getCareerInfo,
  checkRequirements,
  getMissingRequirements,
  workDayTick,
  startResignation,
  tickResignation,
  promoteJob,
} from '../data/careerData';

export function useGameState() {
  const [character, setCharacter] = useState(null);
  const [gamePhase, setGamePhase] = useState('creation');
  const [currentEvent, setCurrentEvent] = useState(null);
  const [recentEventIds, setRecentEventIds] = useState([]);
  const [eventTriggered, setEventTriggered] = useState(false);
  const [jobMessages, setJobMessages] = useState([]);
  const [lastFlavor, setLastFlavor] = useState(null);

  const addJobMessage = useCallback((msg) => {
    setJobMessages(prev => [{ id: Date.now(), ...msg }, ...prev].slice(0, 10));
  }, []);

  // 创建角色（无天赋）
  const createCharacter = useCallback((name, gender) => {
    const char = createInitialCharacter(name, gender);
    setCharacter(char);
    setGamePhase('playing');
    setRecentEventIds([]);
    setEventTriggered(false);
    setJobMessages([]);
    setLastFlavor(null);
  }, []);

  // 入职职业
  const applyForJob = useCallback((careerId) => {
    if (!character || character.job) return;
    const info = getCareerInfo(careerId);
    if (!info) return;
    const level1 = info.career.levels[0];
    if (!checkRequirements(character, level1.requirements)) {
      const missing = getMissingRequirements(character, level1.requirements);
      const labels = missing.map(m => `${m.label} Lv.${m.current}/Lv.${m.required}`).join('、');
      addJobMessage({ type: 'error', text: `不满足入职条件！缺少：${labels}` });
      return;
    }
    const jobState = createJobState(careerId);
    setCharacter(prev => ({ ...prev, job: jobState, currentBasicJob: null }));
    setGamePhase('playing');
    addJobMessage({ type: 'success', text: `入职成功：${info.career.icon} ${level1.title}！月薪 ¥${level1.salary.toLocaleString()}` });
  }, [character, addJobMessage]);

  // 晋升
  const handlePromote = useCallback(() => {
    if (!character?.job) return;
    const info = getCareerInfo(character.job.careerId);
    if (!info) return;
    const nextLevel = info.career.levels.find(l => l.level === character.job.level + 1);
    if (!nextLevel) {
      addJobMessage({ type: 'info', text: '已达到最高级别！' });
      return;
    }
    if (!checkRequirements(character, nextLevel.requirements)) {
      const missing = getMissingRequirements(character, nextLevel.requirements);
      const labels = missing.map(m => `${m.label} Lv.${m.current}/Lv.${m.required}`).join('、');
      addJobMessage({ type: 'error', text: `晋升条件不足！缺少：${labels}` });
      return;
    }
    const newJob = promoteJob(character.job);
    setCharacter(prev => ({ ...prev, job: newJob }));
    addJobMessage({ type: 'success', text: `晋升成功：${nextLevel.title}！月薪 ¥${nextLevel.salary.toLocaleString()}` });
  }, [character, addJobMessage]);

  // 发起辞职
  const handleStartResignation = useCallback(() => {
    if (!character?.job || character.job.isResigning) return;
    const newJob = startResignation(character.job);
    setCharacter(prev => ({ ...prev, job: newJob }));
    addJobMessage({ type: 'warning', text: '已提交辞职申请，还需工作 2 天完成离职手续' });
  }, [character, addJobMessage]);

  // 做底层打工
  const doBasicJob = useCallback((basicJob) => {
    if (!character || !character.isAlive) return;
    let newChar = { ...character };

    // 如果有职业工作，不允许做底层打工
    if (newChar.job) {
      addJobMessage({ type: 'error', text: '你已经有正式工作了，不能同时做兼职！' });
      return;
    }

    // 应用底层工作的效果
    const effects = { ...basicJob.effects };

    newChar.mood = Math.max(0, Math.min(100, (newChar.mood || 50) + (effects.mood || 0)));
    newChar.health = Math.max(0, Math.min(100, (newChar.health || 50) + (effects.health || 0)));
    newChar.stamina = Math.max(0, Math.min(100, (newChar.stamina || 50) + (effects.stamina || 0)));
    newChar.hunger = Math.max(0, Math.min(100, (newChar.hunger || 50) + (effects.hunger || 0)));

    // 工作数值微升
    if (basicJob.workStatBoost) {
      newChar.research = Math.min(100, (newChar.research || 0) + Math.floor(basicJob.workStatBoost * 0.5));
      newChar.sales = Math.min(100, (newChar.sales || 0) + Math.floor(basicJob.workStatBoost * 0.3));
    }

    // 发月薪
    newChar.wealth = (newChar.wealth || 0) + basicJob.salary;

    // 时间推进
    newChar.ageMonths += 1;

    // 饥饿惩罚
    if (newChar.hunger <= 0) {
      newChar.health = Math.max(0, newChar.health - 5);
      newChar.mood = Math.max(0, newChar.mood - 5);
    }
    if (newChar.stamina <= 0) {
      newChar.health = Math.max(0, newChar.health - 3);
    }

    newChar.actionsTaken = [...(newChar.actionsTaken || []), { action: basicJob.id, ageMonths: newChar.ageMonths }];

    const eventLog = {
      type: 'action',
      action: basicJob.name,
      icon: basicJob.icon,
      effects: { ...effects, wealth: basicJob.salary },
      ageMonths: newChar.ageMonths,
    };
    newChar.events = [eventLog, ...(newChar.events || [])].slice(0, 20);

    setLastFlavor(basicJob.flavor);

    const age = newChar.ageMonths / 12;
    if (newChar.health <= 0 || age >= 80) {
      newChar.isAlive = false;
    }

    setCharacter(newChar);

    // 随机事件
    if (newChar.isAlive && !eventTriggered) {
      const roll = Math.random();
      if (roll < 0.3) {
        const available = getAvailableEvents(newChar, recentEventIds);
        if (available.length > 0) {
          const event = available[Math.floor(Math.random() * available.length)];
          setCurrentEvent(event);
          setGamePhase('event');
          setEventTriggered(true);
          return;
        }
      }
    }
    setEventTriggered(false);
    if (!newChar.isAlive) setGamePhase('ended');
  }, [character, eventTriggered, recentEventIds, addJobMessage]);

  // 执行通用行动（自我提升/生活维持）
  const performAction = useCallback((action) => {
    if (!character || !character.isAlive) return;

    let newChar = { ...character };

    // 职业系统：推进工作天数
    if (newChar.job) {
      let job = workDayTick(newChar.job);
      const wasPayday = newChar.job.workDay >= 29;

      // 发薪日
      if (wasPayday && job.workDay === 0) {
        newChar.wealth = (newChar.wealth || 0) + job.salary;
        addJobMessage({ type: 'income', text: `发薪日！${job.title} 月薪 +¥${job.salary.toLocaleString()}` });
      }

      // 辞职流程推进
      if (job.isResigning) {
        const result = tickResignation(job);
        job = result.job;
        if (result.completed) {
          if (result.shouldPay) {
            newChar.wealth = (newChar.wealth || 0) + job.salary;
            addJobMessage({ type: 'income', text: `离职结算：当月工资照发 +¥${job.salary.toLocaleString()}` });
          } else {
            addJobMessage({ type: 'info', text: '离职完成：当月工作不足15天，不发放工资' });
          }
          newChar.job = null;
          addJobMessage({ type: 'info', text: '已正式离职，可以寻找新的工作机会' });
        } else {
          newChar.job = job;
        }
      } else {
        newChar.job = job;
      }
    }

    // 应用行动效果
    newChar = applyAction(newChar, action);

    // 如果行动是自我提升类且有flavor
    if (action.flavor) {
      setLastFlavor(action.flavor);
    }

    // 有职业时，自我提升类行动也会推进工作
    if (newChar.job && ['study', 'social', 'create', 'invest', 'network'].includes(action.id)) {
      const info = getCareerInfo(newChar.job.careerId);
      const workStat = info ? CAREER_WORK_STAT_MAP[info.category.id] : null;
      if (workStat) {
        newChar[workStat] = Math.min(100, (newChar[workStat] || 0) + 2);
      }
    }

    setCharacter(newChar);

    // 随机事件检查
    if (newChar.isAlive && !eventTriggered && !newChar.job?.isResigning) {
      const roll = Math.random();
      if (roll < 0.3) {
        const available = getAvailableEvents(newChar, recentEventIds);
        if (available.length > 0) {
          const event = available[Math.floor(Math.random() * available.length)];
          setCurrentEvent(event);
          setGamePhase('event');
          setEventTriggered(true);
          return;
        }
      }
    }

    setEventTriggered(false);

    if (!newChar.isAlive) {
      setGamePhase('ended');
    }
  }, [character, eventTriggered, recentEventIds, addJobMessage]);

  const handleEventChoice = useCallback((choiceIndex) => {
    if (!currentEvent || !character) return;
    const newChar = applyEvent(character, currentEvent, choiceIndex);
    setCharacter(newChar);
    setRecentEventIds(prev => [...prev, currentEvent.id].slice(-10));
    setCurrentEvent(null);
    setGamePhase('playing');
    if (!newChar.isAlive) setGamePhase('ended');
  }, [currentEvent, character]);

  const handleEventContinue = useCallback(() => {
    if (!currentEvent || !character) return;
    const newChar = applyEvent(character, currentEvent, null);
    setCharacter(newChar);
    setRecentEventIds(prev => [...prev, currentEvent.id].slice(-10));
    setCurrentEvent(null);
    setGamePhase('playing');
    if (!newChar.isAlive) setGamePhase('ended');
  }, [currentEvent, character]);

  const resetGame = useCallback(() => {
    setCharacter(null);
    setGamePhase('creation');
    setCurrentEvent(null);
    setRecentEventIds([]);
    setEventTriggered(false);
    setJobMessages([]);
    setLastFlavor(null);
  }, []);

  const ending = character && !character.isAlive ? getEnding(character) : null;
  const lifeStage = character ? getLifeStage(character.ageMonths) : null;

  return {
    character,
    gamePhase,
    setGamePhase,
    currentEvent,
    ending,
    lifeStage,
    jobMessages,
    lastFlavor,
    createCharacter,
    performAction,
    doBasicJob,
    handleEventChoice,
    handleEventContinue,
    resetGame,
    applyForJob,
    handlePromote,
    handleStartResignation,
    formatAge,
  };
}