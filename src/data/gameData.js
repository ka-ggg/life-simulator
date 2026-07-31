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

export const WORK_LEVELS = [
  { level: 1, name: '新手', min: 0, max: 9 },
  { level: 2, name: '入门', min: 10, max: 19 },
  { level: 3, name: '初级', min: 20, max: 29 },
  { level: 4, name: '中级', min: 30, max: 39 },
  { level: 5, name: '熟练', min: 40, max: 49 },
  { level: 6, name: '精通', min: 50, max: 59 },
  { level: 7, name: '专家', min: 60, max: 69 },
  { level: 8, name: '大师', min: 70, max: 79 },
  { level: 9, name: '宗师', min: 80, max: 89 },
  { level: 10, name: '传说', min: 90, max: 100 },
];
export function getWorkLevel(value) { return WORK_LEVELS.find(l => value >= l.min && value <= l.max) || WORK_LEVELS[0]; }

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
  },
  // === 新增职业事件 ===
  {
    id: 'event_21', title: '职场站队风波', description: '部门两个领导明争暗斗，都想拉你入伙。站错队可能被穿小鞋...', icon: '⚔️', type: 'choice', minAge: 25,
    choices: [
      { label: '站甲领导（高风险高回报）', effects: { wealth: 8000, research: 8, mood: -5, stamina: -5 } },
      { label: '保持中立装傻', effects: { sales: 5, mood: -3 } }
    ]
  },
  {
    id: 'event_22', title: '35岁危机', description: '公司开始"优化"老员工，你的名字出现在名单上...', icon: '⚠️', type: 'choice', minAge: 33, maxAge: 45,
    choices: [
      { label: '主动离职拿补偿', effects: { wealth: 30000, mood: 5, creativity: 8 } },
      { label: '降薪留任', effects: { health: -5, research: 5, wealth: -10000 } }
    ]
  },
  {
    id: 'event_23', title: '副业风口', description: '短视频/直播带货风潮正盛，朋友劝你入局', icon: '📱', type: 'choice', minAge: 22,
    choices: [
      { label: '业余时间搞副业', effects: { wealth: 5000, creativity: 5, health: -5, stamina: -8 } },
      { label: '专注主业不跟风', effects: { research: 5, mood: 3 } }
    ]
  },
  {
    id: 'event_24', title: '996福报', description: '新老板要求全员996，加班费？不存在的...', icon: '🕐', type: 'choice', minAge: 24,
    choices: [
      { label: '硬扛，保住工作', effects: { wealth: 10000, health: -10, stamina: -15, mood: -10 } },
      { label: '据理力争', effects: { mood: 8, sales: 5, wealth: -5000 } }
    ]
  },
  {
    id: 'event_25', title: '大厂Offer', description: '你收到了某大厂的百万年薪offer，但需要996且离家远', icon: '🏢', type: 'choice', minAge: 26, minResearch: 50,
    choices: [
      { label: '接受，去大厂镀金', effects: { wealth: 50000, research: 10, health: -8, stamina: -10 } },
      { label: '婉拒，留在家乡', effects: { mood: 5, health: 5, wealth: 3000 } }
    ]
  },
  // === 新增社交事件 ===
  {
    id: 'event_26', title: '同学会修罗场', description: '十年同学会，昔日同桌开着保时捷来了，你还挤地铁...', icon: '🥂', type: 'choice', minAge: 28,
    choices: [
      { label: '大方参加，真诚叙旧', effects: { mood: 10, sales: 8 } },
      { label: '编造成功故事', effects: { mood: -5, sales: -3, wealth: -2000 } }
    ]
  },
  {
    id: 'event_27', title: '朋友圈人设崩塌', description: '你精心打造的朋友圈精英人设被老同学一条评论戳穿...', icon: '💥', type: 'choice', minAge: 20,
    choices: [
      { label: '大方承认，自嘲解围', effects: { mood: 8, sales: 5, creativity: 3 } },
      { label: '删除评论拉黑', effects: { mood: -10, sales: -3 } }
    ]
  },
  {
    id: 'event_28', title: '塑料友谊', description: '你发现最好的朋友背地里在说你坏话，还截图发群了', icon: '💔', type: 'choice', minAge: 18,
    choices: [
      { label: '当面质问', effects: { mood: -5, sales: 5 } },
      { label: '默默疏远，体面退场', effects: { mood: 3, health: 3, creativity: 5 } }
    ]
  },
  {
    id: 'event_29', title: '邻里矛盾', description: '楼上装修电钻天天响，楼下广场舞音响震天，你夹在中间', icon: '🏘️', type: 'choice', minAge: 25,
    choices: [
      { label: '找物业调解', effects: { mood: 5, stamina: -3 } },
      { label: '买降噪耳机硬扛', effects: { wealth: -2000, mood: -3, health: -2 } }
    ]
  },
  {
    id: 'event_30', title: '被自媒体造谣', description: '一个自媒体账号发了关于你的谣言，评论区骂声一片', icon: '📰', type: 'choice', minAge: 22,
    choices: [
      { label: '报警走法律途径', effects: { wealth: -3000, mood: 5, research: 3 } },
      { label: '冷处理等热度过去', effects: { mood: -8, health: -3 } }
    ]
  },
  // === 新增健康事件 ===
  {
    id: 'event_31', title: '体检报告红灯', description: '年度体检结果：脂肪肝+高血脂+颈椎病，三连警告', icon: '🩻', type: 'negative', minAge: 28, effects: { health: -15, mood: -10, stamina: -5 } },
  {
    id: 'event_32', title: '熬夜猝死警告', description: '连续熬夜加班后，你突然心悸胸闷，同事叫了120...', icon: '🚑', type: 'choice', minAge: 25,
    choices: [
      { label: '住院休养', effects: { health: 15, wealth: -5000, stamina: 10 } },
      { label: '自己买药对付', effects: { health: -10, mood: -5 } }
    ]
  },
  {
    id: 'event_33', title: '心理危机', description: '你发现自己很久没有真正开心过了，做什么都提不起劲', icon: '😔', type: 'choice', minAge: 22,
    choices: [
      { label: '寻求心理咨询', effects: { health: 10, mood: 15, wealth: -3000 } },
      { label: '硬扛到底', effects: { health: -10, mood: -10, stamina: -5 } }
    ]
  },
  {
    id: 'event_34', title: '养生焦虑', description: '朋友圈养生文章满天飞，你开始怀疑吃的每一口饭都有毒...', icon: '🧘', type: 'choice', minAge: 30,
    choices: [
      { label: '科学养生，适度运动', effects: { health: 10, stamina: 5, wealth: -2000 } },
      { label: '疯狂购买保健品', effects: { wealth: -8000, mood: -3 } }
    ]
  },
  {
    id: 'event_35', title: '疫情隔离', description: '你被通知需要居家隔离两周，家里囤货不足', icon: '🏠', type: 'negative', minAge: 18, effects: { health: -5, mood: -10, wealth: -1500, stamina: -8 } },
  // === 新增财富事件 ===
  {
    id: 'event_36', title: '突如其来的拆迁', description: '你家老房子被划入拆迁范围，补偿方案很诱人', icon: '🏗️', type: 'choice', minAge: 25,
    choices: [
      { label: '拿现金投资理财', effects: { wealth: 80000, finance: 5 } },
      { label: '要安置房长期持有', effects: { wealth: 30000, mood: 3 } }
    ]
  },
  {
    id: 'event_37', title: '股市大起大落', description: '你投了20万进股市，一个月翻了三倍，但一周又跌回原点', icon: '📉', type: 'choice', minAge: 22, minWealth: 5000,
    choices: [
      { label: '见好就收，全部清仓', effects: { wealth: 15000, mood: 5 } },
      { label: '继续持有，相信会涨回来', effects: { wealth: -5000, mood: -8, finance: -3 } }
    ]
  },
  {
    id: 'event_38', title: '朋友借钱不还', description: '最好的朋友借了你10万块，说好三个月还，现在一年了...', icon: '💸', type: 'choice', minAge: 22, minWealth: 5000,
    choices: [
      { label: '直接摊牌要求还钱', effects: { wealth: 5000, mood: -5, sales: 5 } },
      { label: '算了，就当认清一个人', effects: { wealth: -3000, mood: 5 } }
    ]
  },
  {
    id: 'event_39', title: '彩票中小奖', description: '你随手买的彩票中了5万块！意外之财', icon: '🎫', type: 'positive', minAge: 18, effects: { wealth: 50000, mood: 15 } },
  {
    id: 'event_40', title: 'P2P暴雷', description: '你父母把养老钱投进了某P2P平台，现在平台跑路了', icon: '💣', type: 'negative', minAge: 25, effects: { wealth: -10000, mood: -15, health: -5 } },
  // === 新增感情事件 ===
  {
    id: 'event_41', title: '春节催婚', description: '七大姑八大姨轮番上阵："有对象没？""工资多少？""买房了吗？"', icon: '🧧', type: 'choice', minAge: 25, maxAge: 40,
    choices: [
      { label: '微笑应对，左耳进右耳出', effects: { mood: 5, sales: 3 } },
      { label: '当场翻脸', effects: { mood: -10, sales: -5 } }
    ]
  },
  {
    id: 'event_42', title: '婆媳大战', description: '婚后和长辈同住，矛盾日益激化，今天又因为洗碗方式吵起来了', icon: '🏠', type: 'choice', minAge: 28,
    choices: [
      { label: '搬出去住', effects: { mood: 10, wealth: -5000, health: 5 } },
      { label: '让另一半去处理', effects: { mood: -3, stamina: -5 } }
    ]
  },
  {
    id: 'event_43', title: '前任的婚礼请柬', description: 'TA要结婚了，还给你发了请柬...', icon: '💌', type: 'choice', minAge: 22,
    choices: [
      { label: '大方出席，真诚祝福', effects: { mood: 10, creativity: 5 } },
      { label: '删掉请柬当没看到', effects: { mood: -5, health: 3 } }
    ]
  },
  {
    id: 'event_44', title: '育儿分歧', description: '孩子教育问题引发夫妻大战：鸡娃还是佛系？', icon: '👶', type: 'choice', minAge: 30,
    choices: [
      { label: '疯狂报班，不能输起跑线', effects: { wealth: -10000, mood: -5, research: 3 } },
      { label: '快乐教育，尊重天性', effects: { mood: 10, health: 5, creativity: 5 } }
    ]
  },
  // === 新增意外事件 ===
  {
    id: 'event_45', title: '社交媒体爆红', description: '你随手发的一条视频突然火了，一夜涨粉百万！', icon: '🌟', type: 'choice', minAge: 18,
    choices: [
      { label: '抓住流量变现', effects: { wealth: 20000, creativity: 10, mood: 10 } },
      { label: '保持低调，正常生活', effects: { mood: 5, research: 5 } }
    ]
  },
  {
    id: 'event_46', title: '路上救人', description: '路边有人晕倒，周围的人都在围观，你...', icon: '🆘', type: 'choice', minAge: 18,
    choices: [
      { label: '立刻施救', effects: { mood: 15, health: 2, sales: 5 } },
      { label: '打120等救护车', effects: { mood: 5, stamina: -2 } }
    ]
  },
  {
    id: 'event_47', title: '网暴遭遇', description: '你在一篇文章下的评论被人断章取义，开始遭受大规模网暴', icon: '🌪️', type: 'choice', minAge: 18,
    choices: [
      { label: '退网一段时间', effects: { mood: -5, health: 5, creativity: 5 } },
      { label: '硬刚到底逐条反驳', effects: { mood: -15, health: -5, stamina: -10 } }
    ]
  },
  {
    id: 'event_48', title: '神秘遗产', description: '一位从未听说的远房亲戚去世，给你留了一笔遗产...但有个条件', icon: '📜', type: 'choice', minAge: 25,
    choices: [
      { label: '接受遗产', effects: { wealth: 50000, mood: 5, research: 3 } },
      { label: '拒绝，来路不明的钱不要', effects: { mood: 3, finance: 5 } }
    ]
  },
  {
    id: 'event_49', title: 'AI抢饭碗', description: '你的工作正在被AI替代，老板暗示你可以考虑转岗...', icon: '🤖', type: 'choice', minAge: 28,
    choices: [
      { label: '学习AI技能驾驭新工具', effects: { research: 15, mood: 5, wealth: -3000 } },
      { label: '摆烂，等被裁拿赔偿', effects: { wealth: 15000, mood: -10, health: -3 } }
    ]
  },
  {
    id: 'event_50', title: '老友离世', description: '突然收到老友去世的消息，你才意识到我们都老了...', icon: '🕯️', type: 'negative', minAge: 35, effects: { health: -5, mood: -15, creativity: 5 } },
  {
    id: 'event_51', title: '考公上岸', description: '经过三年备考，你终于通过了公务员考试！但分配的地方是偏远乡镇。', icon: '📋', type: 'choice', minAge: 24,
    choices: [
      { label: '接受分配，扎根基层', effects: { wealth: 5000, mood: 8, health: 5, research: 3 } },
      { label: '放弃，等待更好的机会', effects: { mood: -5, wealth: -2000 } }
    ]
  },
  {
    id: 'event_52', title: '被裁员后的转机', description: '公司裁员你失业了，但前同事介绍你去一家新公司，薪资翻倍但需要换城市', icon: '🔄', type: 'choice', minAge: 26,
    choices: [
      { label: '接受，奔赴新城市', effects: { wealth: 15000, research: 8, mood: 5, stamina: -5 } },
      { label: '婉拒，不想离开家乡', effects: { mood: 3, health: 5, wealth: -2000 } }
    ]
  },
  {
    id: 'event_53', title: '技术突破', description: '你在工作中攻克了一个困扰团队半年的技术难题！', icon: '💡', type: 'positive', minAge: 24, minResearch: 40, effects: { research: 12, wealth: 8000, mood: 15 } },
  {
    id: 'event_54', title: '诈骗电话', description: '你接到一个自称"公检法"的电话，说你涉嫌洗钱...', icon: '📞', type: 'choice', minAge: 30,
    choices: [
      { label: '果断挂断，下载反诈APP', effects: { mood: 3, finance: 3 } },
      { label: '半信半疑继续沟通', effects: { wealth: -5000, mood: -10 } }
    ]
  },
  {
    id: 'event_55', title: '子女叛逆', description: '孩子进入青春期，开始顶嘴、逃课、沉迷游戏...', icon: '🎮', type: 'choice', minAge: 38,
    choices: [
      { label: '耐心沟通，理解陪伴', effects: { mood: 8, health: 5, creativity: 3 } },
      { label: '严厉管教，没收手机', effects: { mood: -8, health: -3, sales: 5 } }
    ]
  },
  // === 新增旅行冒险事件 ===
  {
    id: 'event_56', title: '说走就走的旅行', description: '你突然很想逃离现在的生活，要不要来一场说走就走的旅行？', icon: '✈️', type: 'choice', minAge: 22,
    choices: [
      { label: '请假出发！', effects: { mood: 20, wealth: -5000, creativity: 5, stamina: 5 } },
      { label: '理智一点，存钱要紧', effects: { mood: -3, finance: 5 } }
    ]
  },
  {
    id: 'event_57', title: '极限运动体验', description: '朋友邀请你去跳伞/蹦极，说是人生必体验一次', icon: '🪂', type: 'choice', minAge: 20, maxAge: 45,
    choices: [
      { label: '挑战自我！', effects: { mood: 15, health: 5, stamina: -10, wealth: -2000 } },
      { label: '算了，保命要紧', effects: { mood: 3, health: 3 } }
    ]
  },
  {
    id: 'event_58', title: '海外工作机会', description: '猎头联系你，新加坡一家公司开出双倍薪资，但需要举家搬迁', icon: '🌏', type: 'choice', minAge: 28, minResearch: 40,
    choices: [
      { label: '接受挑战，走向国际', effects: { wealth: 30000, research: 10, mood: 8, health: -3 } },
      { label: '国内发展也不错', effects: { mood: 5, wealth: 3000, finance: 3 } }
    ]
  },
  {
    id: 'event_59', title: '野外求生', description: '跟团徒步时迷路了，手机没信号，需要靠自己生存一晚', icon: '🏕️', type: 'choice', minAge: 22, maxAge: 50,
    choices: [
      { label: '冷静分析，寻找水源', effects: { health: 8, research: 5, stamina: -10, mood: 5 } },
      { label: '原地等待救援', effects: { mood: -8, health: -3, stamina: -5 } }
    ]
  },
  // === 新增科技事件 ===
  {
    id: 'event_60', title: 'ChatGPT热潮', description: '全民都在讨论AI，你的行业也面临转型压力', icon: '🤖', type: 'choice', minAge: 22,
    choices: [
      { label: '主动学习AI技能', effects: { research: 12, mood: 5, wealth: -2000 } },
      { label: '观望，等风头过去', effects: { mood: -3, research: -2 } }
    ]
  },
  {
    id: 'event_61', title: '元宇宙炒房', description: '朋友说元宇宙地产是下一个风口，劝你赶紧入手', icon: '🏠', type: 'choice', minAge: 22, minWealth: 3000,
    choices: [
      { label: '投资虚拟地产', effects: { wealth: -5000, finance: 3, mood: 5 } },
      { label: '虚拟的东西太虚了', effects: { wealth: 500, finance: 3 } }
    ]
  },
  {
    id: 'event_62', title: 'NFT狂热', description: '你的数字作品被NFT平台看中，要帮你发行', icon: '🖼️', type: 'choice', minAge: 20, minCreativity: 30,
    choices: [
      { label: '发行NFT赚一笔', effects: { wealth: 15000, creativity: 5, mood: 10 } },
      { label: '艺术不该被炒卖', effects: { mood: 5, creativity: 8 } }
    ]
  },
  {
    id: 'event_63', title: '黑客攻击', description: '你的所有账号被黑客入侵，社交账号、银行账户全部沦陷...', icon: '🔓', type: 'negative', minAge: 20, effects: { wealth: -3000, mood: -12, health: -3 } },
  {
    id: 'event_64', title: '电动车自燃', description: '你停在楼下的电动车突然自燃，还好人没事...', icon: '🔥', type: 'negative', minAge: 22, effects: { wealth: -5000, mood: -8, health: -2 } },
  // === 新增教育事件 ===
  {
    id: 'event_65', title: '考研还是工作', description: '大三了，周围同学都在准备考研，你开始焦虑', icon: '📖', type: 'choice', minAge: 20, maxAge: 26,
    choices: [
      { label: '全力以赴考研', effects: { research: 10, mood: -5, health: -3, wealth: -2000 } },
      { label: '直接工作积累经验', effects: { wealth: 3000, sales: 5, mood: 5 } }
    ]
  },
  {
    id: 'event_66', title: '留学机会', description: '拿到了国外名校的offer，但学费需要50万', icon: '🎓', type: 'choice', minAge: 20, maxAge: 30, minWealth: 20000,
    choices: [
      { label: '砸锅卖铁也要去', effects: { wealth: -50000, research: 15, mood: 10, health: -3 } },
      { label: '国内读书也挺好', effects: { wealth: 5000, finance: 5, mood: -5 } }
    ]
  },
  {
    id: 'event_67', title: '知识付费风口', description: '你在某个领域的专业知识被朋友劝做付费课程', icon: '🎙️', type: 'choice', minAge: 25,
    choices: [
      { label: '做课变现', effects: { wealth: 8000, sales: 8, creativity: 5, stamina: -5 } },
      { label: '知识应该免费分享', effects: { mood: 10, sales: 2 } }
    ]
  },
  // === 新增生活事件 ===
  {
    id: 'event_68', title: '领养宠物', description: '在路边捡到一只流浪猫，瘦骨嶙峋但眼神很亮', icon: '🐱', type: 'choice', minAge: 18,
    choices: [
      { label: '带回家收养', effects: { mood: 15, wealth: -3000, health: 3 } },
      { label: '送去救助站', effects: { mood: 5, wealth: -500 } }
    ]
  },
  {
    id: 'event_69', title: '菜市场砍价', description: '你发现摊贩多收了你20块，要理论吗？', icon: '🛒', type: 'choice', minAge: 18,
    choices: [
      { label: '据理力争讨回公道', effects: { mood: 5, sales: 3, wealth: 20 } },
      { label: '算了，20块而已', effects: { mood: -2, wealth: -20 } }
    ]
  },
  {
    id: 'event_70', title: '外卖迟到两小时', description: '你点的外卖迟到了两个小时，骑手说路上出了车祸...', icon: '🛵', type: 'choice', minAge: 18,
    choices: [
      { label: '理解骑手，不投诉', effects: { mood: 8, health: 2 } },
      { label: '差评+投诉', effects: { mood: -3, wealth: 30 } }
    ]
  },
  {
    id: 'event_71', title: '全家桶自由', description: '发工资了，你决定实现"全家桶自由"！', icon: '🍗', type: 'positive', minAge: 18, effects: { mood: 12, hunger: 20, wealth: -150, health: -2 } },
  {
    id: 'event_72', title: '失眠之夜', description: '凌晨三点还睡不着，脑子里全是工作的事', icon: '🌙', type: 'negative', minAge: 25, effects: { health: -8, stamina: -15, mood: -8 } },
  // === 新增社会热点事件 ===
  {
    id: 'event_73', title: '囤药抢购', description: '听说某种药要断货了，药店门口排起了长队', icon: '💊', type: 'choice', minAge: 25,
    choices: [
      { label: '也跟着排队囤一些', effects: { wealth: -2000, health: 5, mood: -3 } },
      { label: '理性看待，不跟风', effects: { mood: 3, finance: 3 } }
    ]
  },
  {
    id: 'event_74', title: '网络谣言', description: '你转发的一条信息被证实是谣言，你成了传播者之一', icon: '📢', type: 'choice', minAge: 18,
    choices: [
      { label: '公开道歉澄清', effects: { mood: 5, sales: 3, wealth: -500 } },
      { label: '默默删除当没发生', effects: { mood: -5, sales: -3 } }
    ]
  },
  {
    id: 'event_75', title: '热搜第一', description: '你随手拍的一段视频上了热搜，评论区炸了', icon: '🔥', type: 'choice', minAge: 18,
    choices: [
      { label: '开直播接住流量', effects: { wealth: 10000, sales: 10, mood: 10, stamina: -8 } },
      { label: '设置私密，保护隐私', effects: { mood: 5, health: 3 } }
    ]
  },
  // === 新增职场进阶事件 ===
  {
    id: 'event_76', title: '内推奖金', description: '你推荐的朋友成功入职，公司发了内推奖金', icon: '💵', type: 'positive', minAge: 22, effects: { wealth: 5000, mood: 10, sales: 3 } },
  {
    id: 'event_77', title: '竞业协议', description: '离职时前公司拿出竞业协议，要求你两年内不能去竞争对手那', icon: '⚖️', type: 'choice', minAge: 26,
    choices: [
      { label: '遵守协议拿补偿金', effects: { wealth: 20000, mood: -3, research: 3 } },
      { label: '打官司争取自由', effects: { wealth: -5000, mood: -8, sales: 5 } }
    ]
  },
  {
    id: 'event_78', title: '远程办公', description: '公司开始推行永久远程办公，你可以搬到任何地方生活', icon: '🏡', type: 'choice', minAge: 24,
    choices: [
      { label: '搬到海边小城', effects: { mood: 15, wealth: -3000, creativity: 5, health: 5 } },
      { label: '留在城市保持社交', effects: { mood: 5, sales: 3 } }
    ]
  },
  {
    id: 'event_79', title: '行业寒冬', description: '整个行业进入寒冬期，各大公司都在裁员降薪，人人自危', icon: '❄️', type: 'negative', minAge: 26, effects: { wealth: -8000, mood: -10, health: -3 } },
  {
    id: 'event_80', title: '年终奖翻倍', description: '今年业绩超预期，老板宣布年终奖翻倍！', icon: '🧧', type: 'positive', minAge: 24, effects: { wealth: 20000, mood: 15, research: 3 } },
  // === 新增意外奇遇事件 ===
  {
    id: 'event_81', title: '地铁让座', description: '地铁上看到一位老人站着，但你也累了一天...', icon: '🚇', type: 'choice', minAge: 18,
    choices: [
      { label: '起身让座', effects: { mood: 12, health: 2, stamina: -3 } },
      { label: '假装睡着', effects: { mood: -5, stamina: 2 } }
    ]
  },
  {
    id: 'event_82', title: '彩票中大奖', description: '你买的彩票中了500万！税后到手400万！', icon: '🎊', type: 'positive', minAge: 18, effects: { wealth: 4000000, mood: 30 } },
  {
    id: 'event_83', title: '被星探发现', description: '逛街时被自称星探的人拦住，说你很有明星相', icon: '⭐', type: 'choice', minAge: 18, maxAge: 28,
    choices: [
      { label: '签约试试看', effects: { wealth: 5000, creativity: 5, mood: 10, stamina: -5 } },
      { label: '婉拒，骗子太多了', effects: { mood: 3, finance: 3 } }
    ]
  },
  {
    id: 'event_84', title: '失而复得', description: '你以为丢了的重要物品，在搬家时意外找到了！', icon: '🎁', type: 'positive', minAge: 22, effects: { mood: 10, wealth: 2000 } },
  {
    id: 'event_85', title: '人生导师', description: '偶然遇到一位睿智的长者，一番交谈让你醍醐灌顶', icon: '🧙', type: 'positive', minAge: 25, effects: { research: 8, sales: 5, creativity: 5, mood: 8 } },
  // === 新增情感深度事件 ===
  {
    id: 'event_86', title: '青梅竹马', description: '小时候的玩伴突然联系你，说一直暗恋你...', icon: '💝', type: 'choice', minAge: 22, maxAge: 35,
    choices: [
      { label: '给彼此一个机会', effects: { mood: 20, wealth: -2000, health: 5 } },
      { label: '还是做朋友吧', effects: { mood: 3, sales: 3 } }
    ]
  },
  {
    id: 'event_87', title: '求婚大作战', description: '你精心策划了一场求婚，但被一场突如其来的大雨打乱了计划', icon: '💍', type: 'choice', minAge: 25,
    choices: [
      { label: '雨中求婚更浪漫', effects: { mood: 15, creativity: 5, health: -2 } },
      { label: '改天再求', effects: { mood: -3, sales: 3 } }
    ]
  },
  {
    id: 'event_88', title: '父母催生', description: '双方父母开始疯狂暗示："隔壁老王家又抱孙子了..."', icon: '👶', type: 'choice', minAge: 28, maxAge: 40,
    choices: [
      { label: '顺其自然，有了就要', effects: { mood: 5, health: 3 } },
      { label: '明确表态暂不考虑', effects: { mood: 3, sales: 5 } }
    ]
  },
  {
    id: 'event_89', title: '离婚风波', description: '长期积累的矛盾终于爆发，你们开始认真讨论离婚', icon: '💔', type: 'choice', minAge: 30,
    choices: [
      { label: '争取挽回，一起做婚姻咨询', effects: { mood: 5, health: 5, wealth: -5000, creativity: 5 } },
      { label: '好聚好散，各自安好', effects: { mood: -10, wealth: -20000, health: 3, creativity: 8 } }
    ]
  },
  {
    id: 'event_90', title: '空巢综合症', description: '孩子去外地上大学了，家里突然安静得可怕...', icon: '🏠', type: 'choice', minAge: 45,
    choices: [
      { label: '培养新爱好充实生活', effects: { mood: 10, creativity: 8, health: 5, wealth: -2000 } },
      { label: '天天打电话给孩子', effects: { mood: -3, stamina: -3 } }
    ]
  },
  // === 新增财富理财事件 ===
  {
    id: 'event_91', title: '比特币暴涨', description: '你几年前随手买的比特币，现在价值翻了几十倍！', icon: '₿', type: 'choice', minAge: 22,
    choices: [
      { label: '全部卖出落袋为安', effects: { wealth: 50000, mood: 15, finance: 5 } },
      { label: '继续持有，相信会到100万', effects: { wealth: 10000, finance: 3, mood: 5 } }
    ]
  },
  {
    id: 'event_92', title: '基金定投', description: '理财顾问建议你开始基金定投，长期来看收益可观', icon: '📊', type: 'choice', minAge: 22,
    choices: [
      { label: '每月定投1000', effects: { wealth: -12000, finance: 5, mood: 3 } },
      { label: '钱还是放银行安全', effects: { mood: 2, finance: 1 } }
    ]
  },
  {
    id: 'event_93', title: '买房时机', description: '房价终于跌了，但大家都在观望，不知道还会不会继续跌', icon: '🏠', type: 'choice', minAge: 25, minWealth: 50000,
    choices: [
      { label: '抄底入手', effects: { wealth: -100000, mood: 8, finance: 5, health: 3 } },
      { label: '再等等，可能还会跌', effects: { mood: -3, finance: 3 } }
    ]
  },
  {
    id: 'event_94', title: '信用卡被盗刷', description: '收到银行短信，你的信用卡在境外消费了5万块！', icon: '💳', type: 'negative', minAge: 22, effects: { wealth: -5000, mood: -12, finance: 3 } },
  {
    id: 'event_95', title: '创业成功', description: '你三年前投资的小创业公司被大厂收购，你持有的股份价值暴增', icon: '🚀', type: 'positive', minAge: 28, minWealth: 10000, effects: { wealth: 80000, mood: 20, finance: 10 } },
  // === 新增健康养生事件 ===
  {
    id: 'event_96', title: '健身房年卡', description: '新年新气象，你办了张健身年卡！但能坚持多久呢...', icon: '🏋️', type: 'choice', minAge: 20,
    choices: [
      { label: '坚持每周三次', effects: { health: 15, stamina: 10, mood: 8, wealth: -3000 } },
      { label: '办了等于练了（心理安慰）', effects: { mood: 3, wealth: -3000 } }
    ]
  },
  {
    id: 'event_97', title: '颈椎病发作', description: '长期伏案工作的后果——颈椎病犯了，转头都疼', icon: '😣', type: 'negative', minAge: 26, effects: { health: -10, stamina: -10, mood: -8 } },
  {
    id: 'event_98', title: '素食挑战', description: '看了一部关于素食的纪录片，你决定尝试素食一个月', icon: '🥗', type: 'choice', minAge: 20,
    choices: [
      { label: '坚持素食', effects: { health: 10, mood: 5, wealth: -1000, stamina: -3 } },
      { label: '算了，肉太香了', effects: { health: -2, mood: 8 } }
    ]
  },
  {
    id: 'event_99', title: '中医调理', description: '老中医给你把脉，说了一大堆问题，开了半年的中药', icon: '🌿', type: 'choice', minAge: 28,
    choices: [
      { label: '相信中医坚持调理', effects: { health: 12, mood: 5, wealth: -5000 } },
      { label: '还是去看西医吧', effects: { health: 6, wealth: -3000 } }
    ]
  },
  {
    id: 'event_100', title: '马拉松挑战', description: '你报名了城市马拉松，还有三个月备赛时间', icon: '🏃', type: 'choice', minAge: 22, maxAge: 50,
    choices: [
      { label: '科学训练，冲刺完赛', effects: { health: 12, stamina: 15, mood: 10, wealth: -2000 } },
      { label: '重在参与，跑到哪算哪', effects: { health: 5, stamina: 5, mood: 8, wealth: -1000 } }
    ]
  },
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
    if (event.minSales && (sales || 0) < event.minSales) return false;
    if (event.minCreativity && (creativity || 0) < event.minCreativity) return false;
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