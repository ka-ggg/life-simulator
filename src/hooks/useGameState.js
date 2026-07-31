import { useState, useCallback } from 'react';
import {
  createInitialCharacter,
  applyAction,
  applyEvent,
  getAvailableEvents,
  getEnding,
  getLifeStage
} from '../data/gameData';
import {
  createJobState,
  getCareerInfo,
  canPromote,
  checkRequirements,
  getMissingRequirements,
  workDayTick,
  startResignation,
  tickResignation,
  promoteJob,
} from '../data/careerData';

export function useGameState() {
  const [character, setCharacter] = useState(null);
  const [gamePhase, setGamePhase] = useState('creation'); // creation | playing | event | ended | jobMarket
  const [currentEvent, setCurrentEvent] = useState(null);
  const [recentEventIds, setRecentEventIds] = useState([]);
  const [eventTriggered, setEventTriggered] = useState(false);
  const [jobMessages, setJobMessages] = useState([]); // 职业相关消息

  const addJobMessage = useCallback((msg) => {
    setJobMessages(prev => [{ id: Date.now(), ...msg }, ...prev].slice(0, 10));
  }, []);

  const createCharacter = useCallback((name, gender, trait) => {
    const char = createInitialCharacter(name, gender, trait);
    setCharacter(char);
    setGamePhase('playing');
    setRecentEventIds([]);
    setEventTriggered(false);
    setJobMessages([]);
  }, []);

  // 入职
  const applyForJob = useCallback((careerId) => {
    if (!character || character.job) return;
    const info = getCareerInfo(careerId);
    if (!info) return;
    const level1 = info.career.levels[0];
    if (!checkRequirements(character, level1.requirements)) {
      addJobMessage({ type: 'error', text: `不满足入职条件！` });
      return;
    }
    const jobState = createJobState(careerId);
    setCharacter(prev => ({ ...prev, job: jobState }));
    setGamePhase('playing');
    addJobMessage({ type: 'success', text: `成功入职：${info.career.icon} ${level1.title}！月薪 ¥${level1.salary}` });
  }, [character, addJobMessage]);

  // 晋升
  const handlePromote = useCallback(() => {
    if (!character?.job) return;
    const info = getCareerInfo(character.job.careerId);
    if (!info) return;
    const nextLevel = info.career.levels.find(l => l.level === character.job.level + 1);
    if (!nextLevel) {
      addJobMessage({ type: 'info', text: `已达到最高级别！` });
      return;
    }
    if (!checkRequirements(character, nextLevel.requirements)) {
      const missing = getMissingRequirements(character, nextLevel.requirements);
      const labels = missing.map(m => `${m.label} ${m.current}/${m.required}`).join('、');
      addJobMessage({ type: 'error', text: `晋升条件不足！缺少：${labels}` });
      return;
    }
    const newJob = promoteJob(character.job);
    setCharacter(prev => ({ ...prev, job: newJob }));
    addJobMessage({ type: 'success', text: `晋升成功：${nextLevel.title}！月薪 ¥${nextLevel.salary}` });
  }, [character, addJobMessage]);

  // 发起辞职
  const handleStartResignation = useCallback(() => {
    if (!character?.job || character.job.isResigning) return;
    const newJob = startResignation(character.job);
    setCharacter(prev => ({ ...prev, job: newJob }));
    addJobMessage({ type: 'warning', text: `已提交辞职申请，还需工作 2 天完成离职手续` });
  }, [character, addJobMessage]);

  const performAction = useCallback((action) => {
    if (!character || !character.isAlive) return;

    let newChar = { ...character };

    // 职业系统：推进工作天数
    if (newChar.job) {
      let job = workDayTick(newChar.job);
      const wasPayday = newChar.job.workDay >= 29; // 即将满30天发薪

      // 发薪日
      if (wasPayday && job.workDay === 0) {
        newChar.wealth += job.salary;
        addJobMessage({ type: 'income', text: `发薪日！${job.title} 月薪 +¥${job.salary}` });
      }

      // 辞职流程推进
      if (job.isResigning) {
        const result = tickResignation(job);
        job = result.job;
        if (result.completed) {
          if (result.shouldPay) {
            newChar.wealth += job.salary;
            addJobMessage({ type: 'income', text: `离职结算：当月工资照发 +¥${job.salary}` });
          } else {
            addJobMessage({ type: 'info', text: `离职完成：当月工作不足15天，不发放工资` });
          }
          newChar.job = null;
          addJobMessage({ type: 'info', text: `已正式离职，可以寻找新的工作机会` });
        } else {
          newChar.job = job;
        }
      } else {
        newChar.job = job;
      }
    }

    // 应用行动效果
    newChar = applyAction(newChar, action);

    // 职业行动加成
    if (newChar.job && action.id === 'work') {
      newChar.wealth += Math.floor(newChar.job.salary * 0.3);
      newChar.career = Math.min(100, newChar.career + 3);
    }

    setCharacter(newChar);

    // 随机事件检查
    if (newChar.isAlive && !eventTriggered && !newChar.job?.isResigning) {
      const roll = Math.random();
      if (roll < 0.35) {
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

    if (!newChar.isAlive) {
      setGamePhase('ended');
    }
  }, [currentEvent, character]);

  const handleEventContinue = useCallback(() => {
    if (!currentEvent || !character) return;

    const newChar = applyEvent(character, currentEvent, null);
    setCharacter(newChar);
    setRecentEventIds(prev => [...prev, currentEvent.id].slice(-10));
    setCurrentEvent(null);
    setGamePhase('playing');

    if (!newChar.isAlive) {
      setGamePhase('ended');
    }
  }, [currentEvent, character]);

  const resetGame = useCallback(() => {
    setCharacter(null);
    setGamePhase('creation');
    setCurrentEvent(null);
    setRecentEventIds([]);
    setEventTriggered(false);
    setJobMessages([]);
  }, []);

  const ending = character && !character.isAlive ? getEnding(character) : null;
  const lifeStage = character ? getLifeStage(character.age) : null;

  return {
    character,
    gamePhase,
    setGamePhase,
    currentEvent,
    ending,
    lifeStage,
    jobMessages,
    createCharacter,
    performAction,
    handleEventChoice,
    handleEventContinue,
    resetGame,
    applyForJob,
    handlePromote,
    handleStartResignation,
    canPromote: character ? canPromote(character) : false,
  };
}