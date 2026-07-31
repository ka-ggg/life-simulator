// ===== 游戏数据定义 v2 =====
// 数值分为普通数值和工作数值

// 普通数值
export const NORMAL_STATS = {
  mood:      { name: '心情', icon: '😊', color: '#f59e0b', desc: '影响生活质量和社交效果' },
  health:    { name: '健康', icon: '❤️', color: '#ef4444', desc: '生命之本，归零即死亡' },
  stamina:   { name: '体力', icon: '⚡', color: '#3b82f6', desc: '行动消耗，归零无法工作' },
  hunger:    { name: '饱腹', icon: '🍖', color: '#f97316', desc: '饱食度，归零会扣健康' },
};

// 工作数值
export const WORK_STATS = {
  research:   { name: '研发能力', icon: '🔬', color: '#8b5cf6', desc: '计算机/教育/医疗类职业核心能力' },
  sales:      { name: '口才推销', icon: '💬', color: '#ec4899', desc: '销售/商务类职业核心能力' },
  creativity: { name: '创造能力', icon: '🎨', color: '#14b8a6', desc: '艺术/设计类职业核心能力' },
  finance:    { name: '财务管理', icon: '📊', color: '#06b6d4', desc: '金融/会计类职业核心能力' },
};

// 职业类别 → 核心工作数值映射
export const CAREER_WORK_STAT_MAP = {
  computer: 'research',
  education: 'research',
  medical: 'research',
  sales: 'sales',
  finance: 'finance',
  arts: 'creativity',
};

// 初始特质
export const TRAITS = [
  {
    id: 'smart',
    name: '聪明好学',
    icon: '🧠',
    description: '初始研发能力+15，学习效果+30%',
    effects: { research: 15 },
    multipliers: { study: 1.3 }
  },
  {
    id: 'strong',
    name: '身强体壮',
    icon: '💪',
    description: '初始健康+15，体力+15，运动效果+30%',
    effects: { health: 15, stamina: 15 },
    multipliers: { exercise: 1.3 }
  },
  {
    id: 'charming',
    name: '能说会道',
    icon: '✨',
    description: '初始口才+15，心情+10，社交效果+30%',
    effects: { sales: 15, mood: 10 },
    multipliers: { social: 1.3 }
  },
  {
    id: 'creative',
    name: '创意天才',
    icon: '🎭',
    description: '初始创造能力+15，创作效果+30%',
    effects: { creativity: 15 },
    multipliers: { create: 1.3 }
  },
  {
    id: 'lucky',
    name: '天选之人',
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
    description: '认真工作赚钱，提升对应职业技能',
    effects: { wealth: 200, stamina: -15, hunger: -10, mood: -5 },
    workStatBoost: 4, // 提升对应工作数值
    ageCost: 1
  },
  {
    id: 'study',
    name: '学习',
    icon: '📚',
    description: '学习提升研发能力',
    effects: { research: 10, stamina: -10, hunger: -8, mood: -3, wealth: -100 },
    ageCost: 1
  },
  {
    id: 'social',
    name: '社交',
    icon: '🎉',
    description: '与人交流提升口才推销能力',
    effects: { sales: 10, mood: 12, stamina: -8, hunger: -5, wealth: -150 },
    ageCost: 1
  },
  {
    id: 'create',
    name: '创作',
    icon: '🎨',
    description: '发挥创意，提升创造能力',
    effects: { creativity: 10, mood: 10, stamina: -12, hunger: -6, wealth: -80 },
    ageCost: 1
  },
  {
    id: 'invest',
    name: '理财',
    icon: '📈',
    description: '研究投资理财，提升财务管理能力',
    effects: { finance: 10, stamina: -5, hunger: -3, mood: -5 },
    risk: true,
    ageCost: 1
  },
  {
    id: 'rest',
    name: '休息',
    icon: '😴',
    description: '好好睡一觉恢复体力',
    effects: { stamina: 30, health: 3, hunger: -8, mood: 5, wealth: -30 },
    ageCost: 1
  },
  {
    id: 'eat',
    name: '吃饭',
    icon: '🍽️',
    description: '饱餐一顿恢复饱腹度',
    effects: { hunger: 40, stamina: 5, mood: 8, health: 2, wealth: -80 },
    ageCost: 1
  },
  {
    id: 'exercise',
    name: '运动',
    icon: '🏃',
    description: '锻炼身体增强体质',
    effects: { health: 12, stamina: -20, hunger: -15, mood: 5, wealth: -50 },
    ageCost: 1
  },
  {
    id: 'entertain',
    name: '娱乐',
    icon: '🎮',
    description: '放松心情享受生活',
    effects: { mood: 20, stamina: -5, hunger: -8, wealth: -120 },
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
    effects: { wealth: 5000, mood: 10 }
  },
  {
    id: 'event_2',
    title: '技术突破',
    description: '你在工作中攻克了一个技术难题，能力大幅提升。',
    icon: '💡',
    type: 'positive',
    minAge: 22,
    effects: { research: 15, mood: 10, wealth: 3000 }
  },
  {
    id: 'event_3',
    title: '遇到贵人',
    description: '在一次社交活动中认识了一位行业大佬，他愿意指导你。',
    icon: '🤝',
    type: 'positive',
    minAge: 20,
    effects: { sales: 10, research: 8, mood: 8 }
  },
  {
    id: 'event_4',
    title: '灵感迸发',
    description: '你突然有了绝妙的创意灵感，创作能力大幅提升。',
    icon: '✨',
    type: 'positive',
    minAge: 20,
    effects: { creativity: 15, mood: 12 }
  },
  {
    id: 'event_5',
    title: '升职加薪',
    description: '你的努力得到了老板的认可，获得晋升。',
    icon: '🎖️',
    type: 'positive',
    minAge: 22,
    minResearch: 30,
    effects: { wealth: 5000, research: 5, mood: 15 }
  },
  {
    id: 'event_6',
    title: '健康秘诀',
    description: '你发现了一种新的健康生活方式，身体状态大幅改善。',
    icon: '🧘',
    type: 'positive',
    minAge: 25,
    effects: { health: 20, mood: 5, stamina: 15 }
  },
  {
    id: 'event_7',
    title: '投资获利',
    description: '你的一项投资获得了丰厚回报！',
    icon: '💰',
    type: 'positive',
    minAge: 22,
    minFinance: 20,
    effects: { wealth: 8000, finance: 5, mood: 8 }
  },
  // 选择事件
  {
    id: 'event_8',
    title: '意外工作邀请',
    description: '你收到了一份意外的工作邀请，薪资翻倍但需要搬到新城市。',
    icon: '📨',
    type: 'choice',
    minAge: 22,
    choices: [
      { label: '接受挑战', effects: { wealth: 10000, research: 10, mood: -10, stamina: -10, health: -5 } },
      { label: '安于现状', effects: { mood: 5, research: 2 } }
    ]
  },
  {
    id: 'event_9',
    title: '创业机会',
    description: '一个朋友邀请你一起创业，项目前景不错但风险不小。',
    icon: '🚀',
    type: 'choice',
    minAge: 25,
    minWealth: 5000,
    choices: [
      { label: '勇敢创业', effects: { wealth: -5000, creativity: 15, sales: 10, mood: 10, stamina: -15 } },
      { label: '谨慎观望', effects: { wealth: 500, research: 3 } }
    ]
  },
  {
    id: 'event_10',
    title: '朋友借钱',
    description: '好朋友遇到困难向你借钱，你会借吗？',
    icon: '💸',
    type: 'choice',
    minAge: 20,
    minWealth: 2000,
    choices: [
      { label: '慷慨解囊', effects: { wealth: -2000, mood: 15, sales: 3 } },
      { label: '婉言拒绝', effects: { mood: -8, wealth: 50 } }
    ]
  },
  {
    id: 'event_11',
    title: '人生转折',
    description: '你感到人生进入了瓶颈期，需要做出改变。',
    icon: '🔀',
    type: 'choice',
    minAge: 30,
    choices: [
      { label: '追求梦想', effects: { creativity: 10, mood: 20, wealth: -3000, health: -3 } },
      { label: '安稳度日', effects: { wealth: 2000, health: 5, research: -3 } }
    ]
  },
  // 负面事件
  {
    id: 'event_12',
    title: '意外生病',
    description: '你突然生病了，需要休养一段时间。',
    icon: '🤒',
    type: 'negative',
    minAge: 20,
    effects: { health: -20, stamina: -15, mood: -10, wealth: -800 }
  },
  {
    id: 'event_13',
    title: '投资失败',
    description: '你的投资遭遇了市场波动，损失了一部分资金。',
    icon: '📉',
    type: 'negative',
    minAge: 22,
    minWealth: 1000,
    effects: { wealth: -3000, mood: -10 }
  },
  {
    id: 'event_14',
    title: '工作压力',
    description: '最近工作压力巨大，身心俱疲。',
    icon: '😰',
    type: 'negative',
    minAge: 25,
    effects: { health: -10, mood: -15, stamina: -10 }
  },
  {
    id: 'event_15',
    title: '天气灾害',
    description: '一场突如其来的暴风雨造成了财产损失。',
    icon: '🌪️',
    type: 'negative',
    minAge: 18,
    effects: { wealth: -2000, health: -5, mood: -8 }
  },
  {
    id: 'event_16',
    title: '中年危机',
    description: '你开始质疑自己的人生选择，感到迷茫和焦虑。',
    icon: '😔',
    type: 'negative',
    minAge: 35,
    maxAge: 50,
    effects: { mood: -20, health: -8, stamina: -10 }
  },
  // 中性事件
  {
    id: 'event_17',
    title: '老友重逢',
    description: '偶遇多年未见的老朋友，一起回忆往事。',
    icon: '👋',
    type: 'neutral',
    minAge: 25,
    effects: { mood: 10, wealth: -100 }
  },
  {
    id: 'event_18',
    title: '社区活动',
    description: '社区组织了一场公益活动，邀请你参加。',
    icon: '🏘️',
    type: 'neutral',
    minAge: 20,
    effects: { mood: 5, sales: 3 }
  },
  {
    id: 'event_19',
    title: '继承遗产',
    description: '一位远房亲戚去世，留给你一笔遗产。',
    icon: '📜',
    type: 'positive',
    minAge: 25,
    effects: { wealth: 15000, mood: 3 }
  },
  {
    id: 'event_20',
    title: '退休规划',
    description: '你开始认真规划退休生活，是时候做出一些财务决策了。',
    icon: '🏖️',
    type: 'choice',
    minAge: 45,
    choices: [
      { label: '积极理财', effects: { wealth: 8000, finance: 8, mood: 5 } },
      { label: '享受当下', effects: { mood: 20, wealth: -5000 } }
    ]
  }
];

// 人生阶段
export const LIFE_STAGES = [
  { name: '青年时期', minAge: 18, maxAge: 29, color: '#00d4aa', icon: '🌱' },
  { name: '壮年时期', minAge: 30, maxAge: 44, color: '#8b5cf6', icon: '🔥' },
  { name: '中年时期', minAge: 45, maxAge: 59, color: '#f59e0b', icon: '🏔️' },
  { name: '老年时期', minAge: 60, maxAge: 80, color: '#ef4444', icon: '🍂' }
];

// 结局判定
export function getEnding(character) {
  const { health, mood, wealth, research, sales, creativity, finance, age } = character;
  const workTotal = (research || 0) + (sales || 0) + (creativity || 0) + (finance || 0);
  const lifeTotal = (mood || 50) + (health || 50) + Math.min((wealth || 0) / 500, 100);

  if (health <= 0) {
    return {
      title: '英年早逝',
      description: '健康是人生最重要的财富，遗憾的是你没有珍惜它。',
      grade: 'F', color: '#ef4444'
    };
  }

  if (age >= 80) {
    return {
      title: '寿终正寝',
      description: '你度过了漫长而充实的一生，在亲人的陪伴中安详离世。',
      grade: 'A', color: '#00d4aa'
    };
  }

  const total = lifeTotal + workTotal;

  if (total >= 400) {
    return {
      title: '传奇人生',
      description: '你的人生堪称传奇！事业有成、家庭美满、身心健康。',
      grade: 'S', color: '#f59e0b'
    };
  } else if (total >= 300) {
    return {
      title: '成功人士',
      description: '你的人生相当成功，在多个领域都取得了不错的成就。',
      grade: 'A', color: '#00d4aa'
    };
  } else if (total >= 200) {
    return {
      title: '平凡幸福',
      description: '你的人生平凡但不平庸，每一天都过得充实而快乐。',
      grade: 'B', color: '#8b5cf6'
    };
  } else if (total >= 120) {
    return {
      title: '略有遗憾',
      description: '人生总有起起落落，你经历了许多困难，但依然坚持走到了最后。',
      grade: 'C', color: '#f59e0b'
    };
  } else {
    return {
      title: '坎坷一生',
      description: '你的人生充满了挑战和挫折，希望下一次能更加精彩。',
      grade: 'D', color: '#ef4444'
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
    // 普通数值
    mood: 60,
    health: 80,
    stamina: 80,
    hunger: 70,
    // 工作数值
    research: 5,
    sales: 5,
    creativity: 5,
    finance: 5,
    // 其他
    wealth: 2000,
    isAlive: true,
    events: [],
    actionsTaken: []
  };

  if (traitData) {
    return {
      ...base,
      mood: base.mood + (traitData.effects.mood || 0),
      health: base.health + (traitData.effects.health || 0),
      stamina: base.stamina + (traitData.effects.stamina || 0),
      research: base.research + (traitData.effects.research || 0),
      sales: base.sales + (traitData.effects.sales || 0),
      creativity: base.creativity + (traitData.effects.creativity || 0),
      finance: base.finance + (traitData.effects.finance || 0),
    };
  }

  return base;
}

// 获取当前人生阶段
export function getLifeStage(age) {
  return LIFE_STAGES.find(stage => age >= stage.minAge && age <= stage.maxAge) || LIFE_STAGES[3];
}

// 获取可用事件
export function getAvailableEvents(character, recentEventIds = []) {
  const { age, health, wealth, research, sales, creativity, finance, mood, trait } = character;

  return RANDOM_EVENTS.filter(event => {
    if (recentEventIds.includes(event.id)) return false;
    if (event.minAge && age < event.minAge) return false;
    if (event.maxAge && age > event.maxAge) return false;
    if (event.minResearch && (research || 0) < event.minResearch) return false;
    if (event.minFinance && (finance || 0) < event.minFinance) return false;
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
      if (['health', 'mood', 'stamina', 'hunger', 'research', 'sales', 'creativity', 'finance'].includes(key)) {
        effects[key] = Math.round(effects[key] * actionMultiplier);
      }
    }
  }

  // 投资风险
  if (action.risk) {
    const roll = Math.random();
    if (roll < 0.3) {
      effects.wealth = -2000;
      effects.mood = (effects.mood || 0) - 10;
    } else if (roll < 0.6) {
      effects.wealth = Math.round(2000);
      effects.mood = (effects.mood || 0) + 5;
    }
  }

  // 应用效果
  newChar.mood = Math.max(0, Math.min(100, (newChar.mood || 50) + (effects.mood || 0)));
  newChar.health = Math.max(0, Math.min(100, (newChar.health || 50) + (effects.health || 0)));
  newChar.stamina = Math.max(0, Math.min(100, (newChar.stamina || 50) + (effects.stamina || 0)));
  newChar.hunger = Math.max(0, Math.min(100, (newChar.hunger || 50) + (effects.hunger || 0)));
  newChar.research = Math.max(0, Math.min(100, (newChar.research || 0) + (effects.research || 0)));
  newChar.sales = Math.max(0, Math.min(100, (newChar.sales || 0) + (effects.sales || 0)));
  newChar.creativity = Math.max(0, Math.min(100, (newChar.creativity || 0) + (effects.creativity || 0)));
  newChar.finance = Math.max(0, Math.min(100, (newChar.finance || 0) + (effects.finance || 0)));
  newChar.wealth = Math.max(0, (newChar.wealth || 0) + (effects.wealth || 0));
  newChar.age += action.ageCost || 1;

  // 饥饿惩罚
  if (newChar.hunger <= 0) {
    newChar.health = Math.max(0, newChar.health - 5);
    newChar.mood = Math.max(0, newChar.mood - 5);
  }

  // 体力耗尽惩罚
  if (newChar.stamina <= 0 && action.id !== 'rest') {
    newChar.health = Math.max(0, newChar.health - 3);
  }

  newChar.actionsTaken = [...(newChar.actionsTaken || []), { action: action.id, age: newChar.age }];

  const eventLog = {
    type: 'action',
    action: action.name,
    icon: action.icon,
    effects,
    age: newChar.age
  };
  newChar.events = [eventLog, ...(newChar.events || [])].slice(0, 20);

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

  newChar.mood = Math.max(0, Math.min(100, (newChar.mood || 50) + (effects.mood || 0)));
  newChar.health = Math.max(0, Math.min(100, (newChar.health || 50) + (effects.health || 0)));
  newChar.stamina = Math.max(0, Math.min(100, (newChar.stamina || 50) + (effects.stamina || 0)));
  newChar.hunger = Math.max(0, Math.min(100, (newChar.hunger || 50) + (effects.hunger || 0)));
  newChar.research = Math.max(0, Math.min(100, (newChar.research || 0) + (effects.research || 0)));
  newChar.sales = Math.max(0, Math.min(100, (newChar.sales || 0) + (effects.sales || 0)));
  newChar.creativity = Math.max(0, Math.min(100, (newChar.creativity || 0) + (effects.creativity || 0)));
  newChar.finance = Math.max(0, Math.min(100, (newChar.finance || 0) + (effects.finance || 0)));
  newChar.wealth = Math.max(0, (newChar.wealth || 0) + (effects.wealth || 0));

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