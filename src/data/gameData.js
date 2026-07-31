// ===== 游戏数据定义 =====

// 初始特质
export const TRAITS = [
  {
    id: 'smart',
    name: '聪明',
    icon: '🧠',
    description: '初始事业+10，学习效果+20%',
    effects: { career: 10 },
    multipliers: { study: 1.2 }
  },
  {
    id: 'strong',
    name: '强壮',
    icon: '💪',
    description: '初始健康+10，运动效果+20%',
    effects: { health: 10 },
    multipliers: { exercise: 1.2 }
  },
  {
    id: 'charming',
    name: '魅力',
    icon: '✨',
    description: '初始快乐+10，社交效果+20%',
    effects: { happiness: 10 },
    multipliers: { social: 1.2 }
  },
  {
    id: 'lucky',
    name: '幸运',
    icon: '🍀',
    description: '随机事件更倾向于正面结果',
    effects: {},
    luckyBonus: true
  }
];

// 基础行动
export const ACTIONS = [
  {
    id: 'work',
    name: '工作',
    icon: '💼',
    description: '努力工作赚取收入',
    effects: { wealth: 300, career: 5, happiness: -8, health: -3 },
    ageCost: 1
  },
  {
    id: 'study',
    name: '学习',
    icon: '📚',
    description: '提升技能与事业前景',
    effects: { career: 12, happiness: -3, wealth: -50 },
    ageCost: 1
  },
  {
    id: 'rest',
    name: '休息',
    icon: '😴',
    description: '放松身心恢复健康',
    effects: { health: 12, happiness: 5, wealth: -20 },
    ageCost: 1
  },
  {
    id: 'social',
    name: '社交',
    icon: '🎉',
    description: '与朋友聚会增进感情',
    effects: { happiness: 15, wealth: -80, health: 2 },
    ageCost: 1
  },
  {
    id: 'exercise',
    name: '运动',
    icon: '🏃',
    description: '锻炼身体增强体质',
    effects: { health: 15, happiness: 3, wealth: -30 },
    ageCost: 1
  },
  {
    id: 'entertain',
    name: '娱乐',
    icon: '🎮',
    description: '享受生活寻找乐趣',
    effects: { happiness: 18, wealth: -100, health: -2 },
    ageCost: 1
  },
  {
    id: 'invest',
    name: '投资',
    icon: '📈',
    description: '用财富创造更多财富（有风险）',
    effects: { wealth: 150, career: 3, happiness: -5 },
    risk: true,
    ageCost: 1
  },
  {
    id: 'travel',
    name: '旅行',
    icon: '✈️',
    description: '环游世界开阔眼界',
    effects: { happiness: 25, wealth: -500, health: 5, career: 2 },
    ageCost: 1
  }
];

// 随机事件
export const RANDOM_EVENTS = [
  // 正面事件
  {
    id: 'event_1',
    title: '意外之财',
    description: '你买的彩票中奖了！获得了一笔意外收入。',
    icon: '🎰',
    type: 'positive',
    minAge: 18,
    effects: { wealth: 2000, happiness: 10 }
  },
  {
    id: 'event_2',
    title: '升职加薪',
    description: '你的努力得到了老板的认可，获得晋升！',
    icon: '🎖️',
    type: 'positive',
    minAge: 22,
    minCareer: 40,
    effects: { wealth: 1000, career: 15, happiness: 12 }
  },
  {
    id: 'event_3',
    title: '遇到贵人',
    description: '在一次社交活动中认识了一位行业大佬，他愿意指导你。',
    icon: '🤝',
    type: 'positive',
    minAge: 20,
    effects: { career: 20, happiness: 8 }
  },
  {
    id: 'event_4',
    title: '健康秘诀',
    description: '你发现了一种新的健康生活方式，身体状态大幅改善。',
    icon: '🧘',
    type: 'positive',
    minAge: 25,
    effects: { health: 20, happiness: 5 }
  },
  {
    id: 'event_5',
    title: '意外工作邀请',
    description: '你收到了一份意外的工作邀请，薪资翻倍但需要搬到新城市。',
    icon: '📨',
    type: 'choice',
    minAge: 22,
    choices: [
      { label: '接受挑战', effects: { wealth: 3000, career: 25, happiness: -15, health: -5 } },
      { label: '安于现状', effects: { happiness: 5, career: 2 } }
    ]
  },
  {
    id: 'event_6',
    title: '创业机会',
    description: '一个朋友邀请你一起创业，项目前景不错但风险不小。',
    icon: '🚀',
    type: 'choice',
    minAge: 25,
    minWealth: 2000,
    choices: [
      { label: '勇敢创业', effects: { wealth: -2000, career: 30, happiness: 10, health: -10 } },
      { label: '谨慎观望', effects: { wealth: 200, career: 3 } }
    ]
  },
  // 负面事件
  {
    id: 'event_7',
    title: '意外生病',
    description: '你突然生病了，需要休养一段时间。',
    icon: '🤒',
    type: 'negative',
    minAge: 20,
    effects: { health: -25, happiness: -10, wealth: -300 }
  },
  {
    id: 'event_8',
    title: '投资失败',
    description: '你的投资遭遇了市场波动，损失了一部分资金。',
    icon: '📉',
    type: 'negative',
    minAge: 22,
    minWealth: 500,
    effects: { wealth: -800, happiness: -8 }
  },
  {
    id: 'event_9',
    title: '工作压力',
    description: '最近工作压力巨大，身心俱疲。',
    icon: '😰',
    type: 'negative',
    minAge: 25,
    minCareer: 30,
    effects: { health: -15, happiness: -20 }
  },
  {
    id: 'event_10',
    title: '朋友借钱',
    description: '好朋友遇到困难向你借钱，你会借吗？',
    icon: '💸',
    type: 'choice',
    minAge: 20,
    minWealth: 500,
    choices: [
      { label: '慷慨解囊', effects: { wealth: -500, happiness: 15, career: 2 } },
      { label: '婉言拒绝', effects: { happiness: -10, wealth: 50 } }
    ]
  },
  {
    id: 'event_11',
    title: '人生转折',
    description: '你感到人生进入了瓶颈期，需要做出改变。是继续安稳还是冒险一搏？',
    icon: '🔀',
    type: 'choice',
    minAge: 30,
    choices: [
      { label: '追求梦想', effects: { career: 15, happiness: 20, wealth: -1000, health: -5 } },
      { label: '安稳度日', effects: { wealth: 500, health: 5, career: -5 } }
    ]
  },
  // 中性事件
  {
    id: 'event_12',
    title: '老友重逢',
    description: '偶遇多年未见的老朋友，一起回忆往事。',
    icon: '👋',
    type: 'neutral',
    minAge: 25,
    effects: { happiness: 8, wealth: -50 }
  },
  {
    id: 'event_13',
    title: '社区活动',
    description: '社区组织了一场公益活动，邀请你参加。',
    icon: '🏘️',
    type: 'neutral',
    minAge: 20,
    effects: { happiness: 5, career: 3 }
  },
  {
    id: 'event_14',
    title: '天气灾害',
    description: '一场突如其来的暴风雨造成了财产损失。',
    icon: '🌪️',
    type: 'negative',
    minAge: 18,
    effects: { wealth: -400, health: -5, happiness: -5 }
  },
  {
    id: 'event_15',
    title: '继承遗产',
    description: '一位远房亲戚去世，留给你一笔遗产。',
    icon: '📜',
    type: 'positive',
    minAge: 25,
    effects: { wealth: 5000, happiness: 5 }
  },
  {
    id: 'event_16',
    title: '技能爆发',
    description: '你在某个领域突然开窍，技能大幅提升。',
    icon: '💡',
    type: 'positive',
    minAge: 20,
    effects: { career: 25, happiness: 10 }
  },
  {
    id: 'event_17',
    title: '中年危机',
    description: '你开始质疑自己的人生选择，感到迷茫和焦虑。',
    icon: '😔',
    type: 'negative',
    minAge: 35,
    maxAge: 50,
    effects: { happiness: -25, health: -10 }
  },
  {
    id: 'event_18',
    title: '退休规划',
    description: '你开始认真规划退休生活，是时候做出一些财务决策了。',
    icon: '🏖️',
    type: 'choice',
    minAge: 45,
    choices: [
      { label: '积极理财', effects: { wealth: 3000, career: 5, happiness: 5 } },
      { label: '享受当下', effects: { happiness: 15, wealth: -2000 } }
    ]
  }
];

// 人生阶段
export const LIFE_STAGES = [
  { name: '青年时期', minAge: 18, maxAge: 29, color: '#00d4aa' },
  { name: '壮年时期', minAge: 30, maxAge: 44, color: '#8b5cf6' },
  { name: '中年时期', minAge: 45, maxAge: 59, color: '#f59e0b' },
  { name: '老年时期', minAge: 60, maxAge: 80, color: '#ef4444' }
];

// 结局判定
export function getEnding(character) {
  const { health, happiness, wealth, career, age } = character;
  const total = health + happiness + career + Math.min(wealth / 100, 100);

  if (health <= 0) {
    return {
      title: '英年早逝',
      description: '健康是人生最重要的财富，遗憾的是你没有珍惜它。如果有来生，记得多关注自己的身体。',
      grade: 'F',
      color: '#ef4444'
    };
  }

  if (age >= 80) {
    return {
      title: '寿终正寝',
      description: '你度过了漫长而充实的一生，在亲人的陪伴中安详离世。',
      grade: 'A',
      color: '#00d4aa'
    };
  }

  if (total >= 350) {
    return {
      title: '传奇人生',
      description: '你的人生堪称传奇！事业有成、家庭美满、身心健康，你是所有人羡慕的对象。',
      grade: 'S',
      color: '#f59e0b'
    };
  } else if (total >= 280) {
    return {
      title: '成功人士',
      description: '你的人生相当成功，在多个领域都取得了不错的成就。回望一生，虽有遗憾但更多的是满足。',
      grade: 'A',
      color: '#00d4aa'
    };
  } else if (total >= 200) {
    return {
      title: '平凡幸福',
      description: '你的人生平凡但不平庸，虽然没有惊天动地的成就，但每一天都过得充实而快乐。',
      grade: 'B',
      color: '#8b5cf6'
    };
  } else if (total >= 120) {
    return {
      title: '略有遗憾',
      description: '人生总有起起落落，你经历了许多困难，但依然坚持走到了最后。下一次，或许可以做出不同的选择。',
      grade: 'C',
      color: '#f59e0b'
    };
  } else {
    return {
      title: '坎坷一生',
      description: '你的人生充满了挑战和挫折，但每一次跌倒都是成长的养分。希望下一次人生能更加精彩。',
      grade: 'D',
      color: '#ef4444'
    };
  }
}

// 初始角色状态
export function createInitialCharacter(name, gender, trait) {
  const traitData = TRAITS.find(t => t.id === trait);
  const base = {
    name,
    gender,
    trait,
    age: 18,
    health: 70,
    happiness: 70,
    wealth: 500,
    career: 10,
    isAlive: true,
    events: [],
    actionsTaken: []
  };

  if (traitData) {
    return {
      ...base,
      health: base.health + (traitData.effects.health || 0),
      happiness: base.happiness + (traitData.effects.happiness || 0),
      career: base.career + (traitData.effects.career || 0),
      wealth: base.wealth + (traitData.effects.wealth || 0)
    };
  }

  return base;
}

// 获取当前人生阶段
export function getLifeStage(age) {
  return LIFE_STAGES.find(stage => age >= stage.minAge && age <= stage.maxAge) || LIFE_STAGES[3];
}

// 获取可用事件（根据年龄和属性过滤）
export function getAvailableEvents(character, recentEventIds = []) {
  const { age, health, wealth, career, trait } = character;
  const traitData = TRAITS.find(t => t.id === trait);

  return RANDOM_EVENTS.filter(event => {
    if (recentEventIds.includes(event.id)) return false;
    if (event.minAge && age < event.minAge) return false;
    if (event.maxAge && age > event.maxAge) return false;
    if (event.minCareer && career < event.minCareer) return false;
    if (event.minWealth && wealth < event.minWealth) return false;
    if (event.minHealth && health < event.minHealth) return false;
    return true;
  });
}

// 应用行动效果
export function applyAction(character, action) {
  const traitData = TRAITS.find(t => t.id === character.trait);
  const multipliers = traitData?.multipliers || {};
  const actionMultiplier = multipliers[action.id] || 1;

  const newChar = { ...character };
  const effects = { ...action.effects };

  // 应用特质倍率
  if (actionMultiplier !== 1) {
    for (const key of Object.keys(effects)) {
      if (key === 'health' || key === 'happiness' || key === 'career') {
        effects[key] = Math.round(effects[key] * actionMultiplier);
      }
    }
  }

  // 投资风险
  if (action.risk) {
    const roll = Math.random();
    if (roll < 0.3) {
      effects.wealth = -Math.abs(effects.wealth) * 2;
      effects.happiness = (effects.happiness || 0) - 10;
    } else if (roll < 0.6) {
      effects.wealth = Math.round(effects.wealth * 1.5);
      effects.happiness = (effects.happiness || 0) + 5;
    }
  }

  // 应用效果
  newChar.health = Math.max(0, Math.min(100, newChar.health + (effects.health || 0)));
  newChar.happiness = Math.max(0, Math.min(100, newChar.happiness + (effects.happiness || 0)));
  newChar.wealth = Math.max(0, newChar.wealth + (effects.wealth || 0));
  newChar.career = Math.max(0, Math.min(100, newChar.career + (effects.career || 0)));
  newChar.age += action.ageCost || 1;
  newChar.actionsTaken = [...(newChar.actionsTaken || []), { action: action.id, age: newChar.age }];

  // 添加事件日志
  const eventLog = {
    type: 'action',
    action: action.name,
    icon: action.icon,
    effects,
    age: newChar.age
  };
  newChar.events = [eventLog, ...(newChar.events || [])].slice(0, 20);

  // 检查死亡
  if (newChar.health <= 0 || newChar.age >= 80) {
    newChar.isAlive = false;
  }

  return newChar;
}

// 应用事件效果
export function applyEvent(character, event, choiceIndex = null) {
  const newChar = { ...character };
  let effects;

  if (event.type === 'choice' && choiceIndex !== null) {
    effects = event.choices[choiceIndex].effects;
  } else {
    effects = event.effects;
  }

  // 幸运特质影响
  const traitData = TRAITS.find(t => t.id === character.trait);
  if (traitData?.luckyBonus) {
    if (event.type === 'negative') {
      effects = { ...effects };
      for (const key of Object.keys(effects)) {
        if (effects[key] < 0) effects[key] = Math.round(effects[key] * 0.5);
      }
    } else if (event.type === 'positive') {
      effects = { ...effects };
      for (const key of Object.keys(effects)) {
        if (effects[key] > 0) effects[key] = Math.round(effects[key] * 1.3);
      }
    }
  }

  newChar.health = Math.max(0, Math.min(100, newChar.health + (effects.health || 0)));
  newChar.happiness = Math.max(0, Math.min(100, newChar.happiness + (effects.happiness || 0)));
  newChar.wealth = Math.max(0, newChar.wealth + (effects.wealth || 0));
  newChar.career = Math.max(0, Math.min(100, newChar.career + (effects.career || 0)));

  const eventLog = {
    type: 'event',
    title: event.title,
    icon: event.icon,
    effects,
    age: newChar.age,
    choice: choiceIndex !== null ? event.choices[choiceIndex].label : null
  };
  newChar.events = [eventLog, ...(newChar.events || [])].slice(0, 20);

  if (newChar.health <= 0 || newChar.age >= 80) {
    newChar.isAlive = false;
  }

  return newChar;
}