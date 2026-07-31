// ===== 游戏数据定义 v3 =====
// 时间：1行动 = 1个月，12行动 = 1岁
// 参考：负产阶级 + 打工生活模拟器 机制

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
  { level: 1, name: '小白', min: 0, max: 9 },
  { level: 2, name: '入门', min: 10, max: 19 },
  { level: 3, name: '初级', min: 20, max: 29 },
  { level: 4, name: '中级', min: 30, max: 39 },
  { level: 5, name: '高级', min: 40, max: 49 },
  { level: 6, name: '资深', min: 50, max: 59 },
  { level: 7, name: '精通', min: 60, max: 69 },
  { level: 8, name: '专家', min: 70, max: 79 },
  { level: 9, name: '权威', min: 80, max: 89 },
  { level: 10, name: '顶尖', min: 90, max: 100 },
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

// 年龄格式化
export function formatAge(ageMonths) {
  const years = Math.floor(ageMonths / 12);
  const months = ageMonths % 12;
  if (months === 0) return `${years}岁`;
  return `${years}岁${months}个月`;
}

// ===== 无门槛打工（底层工作）=====
// 不需要任何能力，人人都能做，按月薪发放，无晋升
// 薪资参考2025-2026一线城市数据
export const BASIC_JOBS = [
  {
    id: 'delivery',
    name: '外卖骑手',
    icon: '🛵',
    description: '风雨无阻送外卖，多劳多得',
    salary: 8000,
    effects: { stamina: -18, hunger: -12, mood: -8, health: -3 },
    flavor: '今天送了42单，腿都软了，但看到账户余额又觉得值了…',
  },
  {
    id: 'construction',
    name: '工地搬砖',
    icon: '🧱',
    description: '建筑工地体力活，日结工资',
    salary: 9000,
    effects: { stamina: -22, hunger: -15, mood: -5, health: -5 },
    flavor: '砖头很沉，太阳很毒，但工头说这个月赶工期有奖金。',
  },
  {
    id: 'freelance_code',
    name: '外包代码',
    icon: '⌨️',
    description: '接一些小外包项目，赚点辛苦钱',
    salary: 7000,
    effects: { stamina: -12, hunger: -8, mood: -3, health: -2 },
    workStatBoost: 3, // 稍微提升研发能力
    flavor: '改BUG改到凌晨三点，客户说"还是第一版好"…',
  },
  {
    id: 'waiter',
    name: '餐厅服务员',
    icon: '🍽️',
    description: '端盘子、擦桌子、微笑服务',
    salary: 5500,
    effects: { stamina: -15, hunger: -8, mood: -6, health: -2 },
    workStatBoost: 2, // 稍微提升口才
    flavor: '"您好几位？""这边请""扫码点餐"——一天说了200遍。',
  },
  {
    id: 'courier',
    name: '快递分拣',
    icon: '📦',
    description: '物流仓库分拣包裹，夜班为主',
    salary: 6500,
    effects: { stamina: -16, hunger: -10, mood: -7, health: -4 },
    flavor: '凌晨的仓库冷得要命，但夜班补贴一小时多5块。',
  },
  {
    id: 'rideshare',
    name: '网约车司机',
    icon: '🚗',
    description: '跑滴滴，时间自由但收入不稳定',
    salary: 7500,
    effects: { stamina: -14, hunger: -8, mood: -5, health: -3 },
    workStatBoost: 2,
    flavor: '今天遇到一个喝醉的乘客吐在车里，洗车花了200…',
  },
  {
    id: 'cleaner',
    name: '保洁员',
    icon: '🧹',
    description: '写字楼保洁，早出晚归',
    salary: 5000,
    effects: { stamina: -13, hunger: -8, mood: -6, health: -2 },
    flavor: '每天凌晨五点开始打扫，看着空荡荡的办公室，偶尔会想里面的人过的是什么生活。',
  },
  {
    id: 'security',
    name: '保安',
    icon: '🛡️',
    description: '小区/商场站岗值班',
    salary: 5000,
    effects: { stamina: -8, hunger: -6, mood: -8, health: -1 },
    flavor: '站了12个小时，无聊到数了300辆车经过。队长说下周可能调岗。',
  },
  {
    id: 'factory',
    name: '工厂流水线',
    icon: '🏭',
    description: '电子厂流水线工人，两班倒',
    salary: 6000,
    effects: { stamina: -18, hunger: -10, mood: -10, health: -4 },
    flavor: '同一个动作重复了上千次，手已经麻木了。但包吃住能省不少钱。',
  },
  {
    id: 'tutor',
    name: '家教辅导',
    icon: '📝',
    description: '给中小学生补课，按小时收费',
    salary: 5000,
    effects: { stamina: -10, hunger: -6, mood: -3, health: -1 },
    workStatBoost: 3,
    flavor: '这孩子连二元一次方程都不会，他妈还指望他考985…',
  },
];

// ===== 自我提升行动 =====
export const SELF_IMPROVE_ACTIONS = [
  {
    id: 'study',
    name: '自学充电',
    icon: '📚',
    description: '看书、网课、刷题，提升研发能力',
    effects: { research: 8, stamina: -10, hunger: -6, mood: -3, wealth: -500 },
    flavor: '买了一堆网课，看完第一章就觉得自己进步了。',
  },
  {
    id: 'social',
    name: '社交人脉',
    icon: '🤝',
    description: '参加行业聚会、请客吃饭，提升口才',
    effects: { sales: 8, mood: 8, stamina: -8, hunger: -5, wealth: -800 },
    flavor: '在饭局上认识了几个大佬，虽然大部分是吹牛，但名片是真的。',
  },
  {
    id: 'create',
    name: '创作练习',
    icon: '🎨',
    description: '写文章、画图、做设计，提升创造能力',
    effects: { creativity: 8, mood: 8, stamina: -10, hunger: -5, wealth: -300 },
    flavor: '花了一整天画了幅画，发朋友圈只有三个人点赞。',
  },
  {
    id: 'invest',
    name: '理财学习',
    icon: '📈',
    description: '研究基金股票，提升财务管理能力',
    effects: { finance: 8, stamina: -5, hunger: -3, mood: -3, wealth: -200 },
    risk: true,
    flavor: '看了三本理财书，感觉自己能打败巴菲特了。',
  },
  {
    id: 'exercise',
    name: '健身锻炼',
    icon: '🏃',
    description: '跑步、撸铁、瑜伽，增强体质',
    effects: { health: 10, stamina: -18, hunger: -12, mood: 5, wealth: -300 },
    flavor: '办了张健身卡，教练说这个月已经是最努力的新人了。',
  },
  {
    id: 'network',
    name: '线上接单',
    icon: '💻',
    description: '在猪八戒/Upwork上接小单，赚点钱同时提升能力',
    effects: { wealth: 1500, research: 3, creativity: 3, stamina: -12, hunger: -6, mood: -4 },
    flavor: '接了个Logo设计的活，客户说"大气一点"，改了28版。',
  },
];

// ===== 生活维持行动 =====
export const LIFE_ACTIONS = [
  {
    id: 'rest',
    name: '好好休息',
    icon: '😴',
    description: '睡个懒觉，恢复体力',
    effects: { stamina: 35, health: 3, hunger: -6, mood: 5, wealth: -50 },
    flavor: '终于睡了个自然醒，感觉整个人都活过来了。',
  },
  {
    id: 'eat',
    name: '下馆子',
    icon: '🍖',
    description: '吃顿好的犒劳自己',
    effects: { hunger: 45, stamina: 5, mood: 12, health: 2, wealth: -200 },
    flavor: '点了一份麻辣香锅，辣得眼泪直流，但真爽！',
  },
  {
    id: 'entertain',
    name: '娱乐放松',
    icon: '🎮',
    description: '打游戏、刷剧、逛街，放松心情',
    effects: { mood: 22, stamina: -5, hunger: -6, wealth: -300 },
    flavor: '刷了一下午短视频，虽然什么都没干但感觉挺充实的。',
  },
  {
    id: 'cheap_eat',
    name: '随便吃点',
    icon: '🍜',
    description: '泡面/快餐凑合一顿',
    effects: { hunger: 25, stamina: 2, mood: -2, health: -1, wealth: -30 },
    flavor: '泡面加个蛋，今天也算改善伙食了。',
  },
  {
    id: 'hospital',
    name: '看病就医',
    icon: '🏥',
    description: '身体不舒服就去医院看看',
    effects: { health: 20, mood: -3, stamina: 5, wealth: -800 },
    flavor: '排了三个小时队，医生看了五分钟，开了三百块的药。',
  },
];

// ===== 随机事件 =====
export const RANDOM_EVENTS = [
  // 正面事件
  { id: 'event_1', title: '意外之财', description: '你买的彩票中奖了！获得了一笔意外收入。', icon: '🎰', type: 'positive', minAge: 18, effects: { wealth: 5000, mood: 10 } },
  { id: 'event_2', title: '技术突破', description: '你在工作中攻克了一个技术难题，能力大幅提升。', icon: '💡', type: 'positive', minAge: 22, effects: { research: 12, mood: 10, wealth: 3000 } },
  { id: 'event_3', title: '遇到贵人', description: '在一次社交活动中认识了一位行业大佬，他愿意指导你。', icon: '🤝', type: 'positive', minAge: 20, effects: { sales: 10, research: 6, mood: 8 } },
  { id: 'event_4', title: '灵感迸发', description: '你突然有了绝妙的创意灵感，创作能力大幅提升。', icon: '✨', type: 'positive', minAge: 20, effects: { creativity: 12, mood: 12 } },
  { id: 'event_5', title: '升职加薪', description: '你的努力得到了老板的认可，获得晋升。', icon: '🎖️', type: 'positive', minAge: 22, minResearch: 30, effects: { wealth: 5000, research: 5, mood: 15 } },
  { id: 'event_6', title: '健康秘诀', description: '你发现了一种新的健康生活方式，身体状态大幅改善。', icon: '🧘', type: 'positive', minAge: 25, effects: { health: 20, mood: 5, stamina: 15 } },
  { id: 'event_7', title: '投资获利', description: '你的一项投资获得了丰厚回报！', icon: '💰', type: 'positive', minAge: 22, minFinance: 20, effects: { wealth: 8000, finance: 5, mood: 8 } },
  { id: 'event_19', title: '继承遗产', description: '一位远房亲戚去世，留给你一笔遗产。', icon: '📜', type: 'positive', minAge: 25, effects: { wealth: 15000, mood: 3 } },
  { id: 'event_39', title: '彩票中小奖', description: '你随手买的彩票中了5万块！意外之财', icon: '🎫', type: 'positive', minAge: 18, effects: { wealth: 50000, mood: 15 } },
  { id: 'event_53', title: '技术突破', description: '你在工作中攻克了一个困扰团队半年的技术难题！', icon: '💡', type: 'positive', minAge: 24, minResearch: 40, effects: { research: 12, wealth: 8000, mood: 15 } },
  { id: 'event_71', title: '全家桶自由', description: '发工资了，你决定实现"全家桶自由"！', icon: '🍗', type: 'positive', minAge: 18, effects: { mood: 12, hunger: 20, wealth: -150, health: -2 } },
  { id: 'event_76', title: '内推奖金', description: '你推荐的朋友成功入职，公司发了内推奖金', icon: '💵', type: 'positive', minAge: 22, effects: { wealth: 5000, mood: 10, sales: 3 } },
  { id: 'event_80', title: '年终奖翻倍', description: '今年业绩超预期，老板宣布年终奖翻倍！', icon: '🧧', type: 'positive', minAge: 24, effects: { wealth: 20000, mood: 15, research: 3 } },
  { id: 'event_82', title: '彩票中大奖', description: '你买的彩票中了500万！税后到手400万！', icon: '🎊', type: 'positive', minAge: 18, effects: { wealth: 4000000, mood: 30 } },
  { id: 'event_84', title: '失而复得', description: '你以为丢了的重要物品，在搬家时意外找到了！', icon: '🎁', type: 'positive', minAge: 22, effects: { mood: 10, wealth: 2000 } },
  { id: 'event_85', title: '人生导师', description: '偶然遇到一位睿智的长者，一番交谈让你醍醐灌顶', icon: '🧙', type: 'positive', minAge: 25, effects: { research: 6, sales: 5, creativity: 5, mood: 8 } },
  { id: 'event_95', title: '创业成功', description: '你三年前投资的小创业公司被大厂收购，你持有的股份价值暴增', icon: '🚀', type: 'positive', minAge: 28, minWealth: 10000, effects: { wealth: 80000, mood: 20, finance: 8 } },

  // 选择事件
  { id: 'event_8', title: '意外工作邀请', description: '你收到了一份意外的工作邀请，薪资翻倍但需要搬到新城市。', icon: '📨', type: 'choice', minAge: 22,
    choices: [
      { label: '接受挑战', effects: { wealth: 10000, research: 8, mood: -10, stamina: -10, health: -5 } },
      { label: '安于现状', effects: { mood: 5, research: 2 } }
    ] },
  { id: 'event_9', title: '创业机会', description: '一个朋友邀请你一起创业，项目前景不错但风险不小。', icon: '🚀', type: 'choice', minAge: 25, minWealth: 5000,
    choices: [
      { label: '勇敢创业', effects: { wealth: -5000, creativity: 12, sales: 8, mood: 10, stamina: -15 } },
      { label: '谨慎观望', effects: { wealth: 500, research: 3 } }
    ] },
  { id: 'event_10', title: '朋友借钱', description: '好朋友遇到困难向你借钱，你会借吗？', icon: '💸', type: 'choice', minAge: 20, minWealth: 2000,
    choices: [
      { label: '慷慨解囊', effects: { wealth: -2000, mood: 15, sales: 3 } },
      { label: '婉言拒绝', effects: { mood: -8, wealth: 50 } }
    ] },
  { id: 'event_11', title: '人生转折', description: '你感到人生进入了瓶颈期，需要做出改变。', icon: '🔀', type: 'choice', minAge: 30,
    choices: [
      { label: '追求梦想', effects: { creativity: 10, mood: 20, wealth: -3000, health: -3 } },
      { label: '安稳度日', effects: { wealth: 2000, health: 5, research: -3 } }
    ] },
  { id: 'event_20', title: '退休规划', description: '你开始认真规划退休生活，是时候做出一些财务决策了。', icon: '🏖️', type: 'choice', minAge: 45,
    choices: [
      { label: '积极理财', effects: { wealth: 8000, finance: 6, mood: 5 } },
      { label: '享受当下', effects: { mood: 20, wealth: -5000 } }
    ] },
  { id: 'event_21', title: '职场站队风波', description: '部门两个领导明争暗斗，都想拉你入伙。站错队可能被穿小鞋...', icon: '⚔️', type: 'choice', minAge: 25,
    choices: [
      { label: '站甲领导（高风险高回报）', effects: { wealth: 8000, research: 6, mood: -5, stamina: -5 } },
      { label: '保持中立装傻', effects: { sales: 5, mood: -3 } }
    ] },
  { id: 'event_22', title: '35岁危机', description: '公司开始"优化"老员工，你的名字出现在名单上...', icon: '⚠️', type: 'choice', minAge: 33, maxAge: 45,
    choices: [
      { label: '主动离职拿补偿', effects: { wealth: 30000, mood: 5, creativity: 6 } },
      { label: '降薪留任', effects: { health: -5, research: 5, wealth: -10000 } }
    ] },
  { id: 'event_23', title: '副业风口', description: '短视频/直播带货风潮正盛，朋友劝你入局', icon: '📱', type: 'choice', minAge: 22,
    choices: [
      { label: '业余时间搞副业', effects: { wealth: 5000, creativity: 5, health: -5, stamina: -8 } },
      { label: '专注主业不跟风', effects: { research: 5, mood: 3 } }
    ] },
  { id: 'event_24', title: '996福报', description: '新老板要求全员996，加班费？不存在的...', icon: '🕐', type: 'choice', minAge: 24,
    choices: [
      { label: '硬扛，保住工作', effects: { wealth: 10000, health: -10, stamina: -15, mood: -10 } },
      { label: '据理力争', effects: { mood: 8, sales: 5, wealth: -5000 } }
    ] },
  { id: 'event_25', title: '大厂Offer', description: '你收到了某大厂的百万年薪offer，但需要996且离家远', icon: '🏢', type: 'choice', minAge: 26, minResearch: 50,
    choices: [
      { label: '接受，去大厂镀金', effects: { wealth: 50000, research: 10, health: -8, stamina: -10 } },
      { label: '婉拒，留在家乡', effects: { mood: 5, health: 5, wealth: 3000 } }
    ] },
  { id: 'event_26', title: '同学会修罗场', description: '十年同学会，昔日同桌开着保时捷来了，你还挤地铁...', icon: '🥂', type: 'choice', minAge: 28,
    choices: [
      { label: '大方参加，真诚叙旧', effects: { mood: 10, sales: 6 } },
      { label: '编造成功故事', effects: { mood: -5, sales: -3, wealth: -2000 } }
    ] },
  { id: 'event_32', title: '熬夜猝死警告', description: '连续熬夜加班后，你突然心悸胸闷，同事叫了120...', icon: '🚑', type: 'choice', minAge: 25,
    choices: [
      { label: '住院休养', effects: { health: 15, wealth: -5000, stamina: 10 } },
      { label: '自己买药对付', effects: { health: -10, mood: -5 } }
    ] },
  { id: 'event_33', title: '心理危机', description: '你发现自己很久没有真正开心过了，做什么都提不起劲', icon: '😔', type: 'choice', minAge: 22,
    choices: [
      { label: '寻求心理咨询', effects: { health: 10, mood: 15, wealth: -3000 } },
      { label: '硬扛到底', effects: { health: -10, mood: -10, stamina: -5 } }
    ] },
  { id: 'event_36', title: '突如其来的拆迁', description: '你家老房子被划入拆迁范围，补偿方案很诱人', icon: '🏗️', type: 'choice', minAge: 25,
    choices: [
      { label: '拿现金投资理财', effects: { wealth: 80000, finance: 5 } },
      { label: '要安置房长期持有', effects: { wealth: 30000, mood: 3 } }
    ] },
  { id: 'event_45', title: '社交媒体爆红', description: '你随手发的一条视频突然火了，一夜涨粉百万！', icon: '🌟', type: 'choice', minAge: 18,
    choices: [
      { label: '抓住流量变现', effects: { wealth: 20000, creativity: 8, mood: 10 } },
      { label: '保持低调，正常生活', effects: { mood: 5, research: 5 } }
    ] },
  { id: 'event_49', title: 'AI抢饭碗', description: '你的工作正在被AI替代，老板暗示你可以考虑转岗...', icon: '🤖', type: 'choice', minAge: 28,
    choices: [
      { label: '学习AI技能驾驭新工具', effects: { research: 12, mood: 5, wealth: -3000 } },
      { label: '摆烂，等被裁拿赔偿', effects: { wealth: 15000, mood: -10, health: -3 } }
    ] },
  { id: 'event_51', title: '考公上岸', description: '经过三年备考，你终于通过了公务员考试！但分配的地方是偏远乡镇。', icon: '📋', type: 'choice', minAge: 24,
    choices: [
      { label: '接受分配，扎根基层', effects: { wealth: 5000, mood: 8, health: 5, research: 3 } },
      { label: '放弃，等待更好的机会', effects: { mood: -5, wealth: -2000 } }
    ] },
  { id: 'event_56', title: '说走就走的旅行', description: '你突然很想逃离现在的生活，要不要来一场说走就走的旅行？', icon: '✈️', type: 'choice', minAge: 22,
    choices: [
      { label: '请假出发！', effects: { mood: 20, wealth: -5000, creativity: 5, stamina: 5 } },
      { label: '理智一点，存钱要紧', effects: { mood: -3, finance: 5 } }
    ] },
  { id: 'event_60', title: 'ChatGPT热潮', description: '全民都在讨论AI，你的行业也面临转型压力', icon: '🤖', type: 'choice', minAge: 22,
    choices: [
      { label: '主动学习AI技能', effects: { research: 10, mood: 5, wealth: -2000 } },
      { label: '观望，等风头过去', effects: { mood: -3, research: -2 } }
    ] },
  { id: 'event_65', title: '考研还是工作', description: '大三了，周围同学都在准备考研，你开始焦虑', icon: '📖', type: 'choice', minAge: 20, maxAge: 26,
    choices: [
      { label: '全力以赴考研', effects: { research: 10, mood: -5, health: -3, wealth: -2000 } },
      { label: '直接工作积累经验', effects: { wealth: 3000, sales: 5, mood: 5 } }
    ] },
  { id: 'event_68', title: '领养宠物', description: '在路边捡到一只流浪猫，瘦骨嶙峋但眼神很亮', icon: '🐱', type: 'choice', minAge: 18,
    choices: [
      { label: '带回家收养', effects: { mood: 15, wealth: -3000, health: 3 } },
      { label: '送去救助站', effects: { mood: 5, wealth: -500 } }
    ] },
  { id: 'event_70', title: '外卖迟到两小时', description: '你点的外卖迟到了两个小时，骑手说路上出了车祸...', icon: '🛵', type: 'choice', minAge: 18,
    choices: [
      { label: '理解骑手，不投诉', effects: { mood: 8, health: 2 } },
      { label: '差评+投诉', effects: { mood: -3, wealth: 30 } }
    ] },
  { id: 'event_81', title: '地铁让座', description: '地铁上看到一位老人站着，但你也累了一天...', icon: '🚇', type: 'choice', minAge: 18,
    choices: [
      { label: '起身让座', effects: { mood: 12, health: 2, stamina: -3 } },
      { label: '假装睡着', effects: { mood: -5, stamina: 2 } }
    ] },
  { id: 'event_91', title: '比特币暴涨', description: '你几年前随手买的比特币，现在价值翻了几十倍！', icon: '₿', type: 'choice', minAge: 22,
    choices: [
      { label: '全部卖出落袋为安', effects: { wealth: 50000, mood: 15, finance: 5 } },
      { label: '继续持有，相信会到100万', effects: { wealth: 10000, finance: 3, mood: 5 } }
    ] },
  { id: 'event_93', title: '买房时机', description: '房价终于跌了，但大家都在观望，不知道还会不会继续跌', icon: '🏠', type: 'choice', minAge: 25, minWealth: 50000,
    choices: [
      { label: '抄底入手', effects: { wealth: -100000, mood: 8, finance: 5, health: 3 } },
      { label: '再等等，可能还会跌', effects: { mood: -3, finance: 3 } }
    ] },
  { id: 'event_96', title: '健身房年卡', description: '新年新气象，你办了张健身年卡！但能坚持多久呢...', icon: '🏋️', type: 'choice', minAge: 20,
    choices: [
      { label: '坚持每周三次', effects: { health: 12, stamina: 10, mood: 8, wealth: -3000 } },
      { label: '办了等于练了（心理安慰）', effects: { mood: 3, wealth: -3000 } }
    ] },

  // 负面事件
  { id: 'event_12', title: '意外生病', description: '你突然生病了，需要休养一段时间。', icon: '🤒', type: 'negative', minAge: 20, effects: { health: -20, stamina: -15, mood: -10, wealth: -800 } },
  { id: 'event_13', title: '投资失败', description: '你的投资遭遇了市场波动，损失了一部分资金。', icon: '📉', type: 'negative', minAge: 22, minWealth: 1000, effects: { wealth: -3000, mood: -10 } },
  { id: 'event_14', title: '工作压力', description: '最近工作压力巨大，身心俱疲。', icon: '😰', type: 'negative', minAge: 25, effects: { health: -10, mood: -15, stamina: -10 } },
  { id: 'event_15', title: '天气灾害', description: '一场突如其来的暴风雨造成了财产损失。', icon: '🌪️', type: 'negative', minAge: 18, effects: { wealth: -2000, health: -5, mood: -8 } },
  { id: 'event_16', title: '中年危机', description: '你开始质疑自己的人生选择，感到迷茫和焦虑。', icon: '😔', type: 'negative', minAge: 35, maxAge: 50, effects: { mood: -20, health: -8, stamina: -10 } },
  { id: 'event_31', title: '体检报告红灯', description: '年度体检结果：脂肪肝+高血脂+颈椎病，三连警告', icon: '🩻', type: 'negative', minAge: 28, effects: { health: -15, mood: -10, stamina: -5 } },
  { id: 'event_35', title: '疫情隔离', description: '你被通知需要居家隔离两周，家里囤货不足', icon: '🏠', type: 'negative', minAge: 18, effects: { health: -5, mood: -10, wealth: -1500, stamina: -8 } },
  { id: 'event_40', title: 'P2P暴雷', description: '你父母把养老钱投进了某P2P平台，现在平台跑路了', icon: '💣', type: 'negative', minAge: 25, effects: { wealth: -10000, mood: -15, health: -5 } },
  { id: 'event_50', title: '老友离世', description: '突然收到老友去世的消息，你才意识到我们都老了...', icon: '🕯️', type: 'negative', minAge: 35, effects: { health: -5, mood: -15, creativity: 5 } },
  { id: 'event_63', title: '黑客攻击', description: '你的所有账号被黑客入侵，社交账号、银行账户全部沦陷...', icon: '🔓', type: 'negative', minAge: 20, effects: { wealth: -3000, mood: -12, health: -3 } },
  { id: 'event_64', title: '电动车自燃', description: '你停在楼下的电动车突然自燃，还好人没事...', icon: '🔥', type: 'negative', minAge: 22, effects: { wealth: -5000, mood: -8, health: -2 } },
  { id: 'event_72', title: '失眠之夜', description: '凌晨三点还睡不着，脑子里全是工作的事', icon: '🌙', type: 'negative', minAge: 25, effects: { health: -8, stamina: -15, mood: -8 } },
  { id: 'event_79', title: '行业寒冬', description: '整个行业进入寒冬期，各大公司都在裁员降薪，人人自危', icon: '❄️', type: 'negative', minAge: 26, effects: { wealth: -8000, mood: -10, health: -3 } },
  { id: 'event_94', title: '信用卡被盗刷', description: '收到银行短信，你的信用卡在境外消费了5万块！', icon: '💳', type: 'negative', minAge: 22, effects: { wealth: -5000, mood: -12, finance: 3 } },
  { id: 'event_97', title: '颈椎病发作', description: '长期伏案工作的后果——颈椎病犯了，转头都疼', icon: '😣', type: 'negative', minAge: 26, effects: { health: -10, stamina: -10, mood: -8 } },

  // 中性事件
  { id: 'event_17', title: '老友重逢', description: '偶遇多年未见的老朋友，一起回忆往事。', icon: '👋', type: 'neutral', minAge: 25, effects: { mood: 10, wealth: -100 } },
  { id: 'event_18', title: '社区活动', description: '社区组织了一场公益活动，邀请你参加。', icon: '🏘️', type: 'neutral', minAge: 20, effects: { mood: 5, sales: 3 } },
  { id: 'event_27', title: '朋友圈人设崩塌', description: '你精心打造的朋友圈精英人设被老同学一条评论戳穿...', icon: '💥', type: 'choice', minAge: 20,
    choices: [
      { label: '大方承认，自嘲解围', effects: { mood: 8, sales: 5, creativity: 3 } },
      { label: '删除评论拉黑', effects: { mood: -10, sales: -3 } }
    ] },
  { id: 'event_28', title: '塑料友谊', description: '你发现最好的朋友背地里在说你坏话，还截图发群了', icon: '💔', type: 'choice', minAge: 18,
    choices: [
      { label: '当面质问', effects: { mood: -5, sales: 5 } },
      { label: '默默疏远，体面退场', effects: { mood: 3, health: 3, creativity: 5 } }
    ] },
  { id: 'event_29', title: '邻里矛盾', description: '楼上装修电钻天天响，楼下广场舞音响震天，你夹在中间', icon: '🏘️', type: 'choice', minAge: 25,
    choices: [
      { label: '找物业调解', effects: { mood: 5, stamina: -3 } },
      { label: '买降噪耳机硬扛', effects: { wealth: -2000, mood: -3, health: -2 } }
    ] },
  { id: 'event_41', title: '春节催婚', description: '七大姑八大姨轮番上阵："有对象没？""工资多少？""买房了吗？"', icon: '🧧', type: 'choice', minAge: 25, maxAge: 40,
    choices: [
      { label: '微笑应对，左耳进右耳出', effects: { mood: 5, sales: 3 } },
      { label: '当场翻脸', effects: { mood: -10, sales: -5 } }
    ] },
  { id: 'event_46', title: '路上救人', description: '路边有人晕倒，周围的人都在围观，你...', icon: '🆘', type: 'choice', minAge: 18,
    choices: [
      { label: '立刻施救', effects: { mood: 15, health: 2, sales: 5 } },
      { label: '打120等救护车', effects: { mood: 5, stamina: -2 } }
    ] },
  { id: 'event_47', title: '网暴遭遇', description: '你在一篇文章下的评论被人断章取义，开始遭受大规模网暴', icon: '🌪️', type: 'choice', minAge: 18,
    choices: [
      { label: '退网一段时间', effects: { mood: -5, health: 5, creativity: 5 } },
      { label: '硬刚到底逐条反驳', effects: { mood: -15, health: -5, stamina: -10 } }
    ] },
  { id: 'event_54', title: '诈骗电话', description: '你接到一个自称"公检法"的电话，说你涉嫌洗钱...', icon: '📞', type: 'choice', minAge: 30,
    choices: [
      { label: '果断挂断，下载反诈APP', effects: { mood: 3, finance: 3 } },
      { label: '半信半疑继续沟通', effects: { wealth: -5000, mood: -10 } }
    ] },
  { id: 'event_69', title: '菜市场砍价', description: '你发现摊贩多收了你20块，要理论吗？', icon: '🛒', type: 'choice', minAge: 18,
    choices: [
      { label: '据理力争讨回公道', effects: { mood: 5, sales: 3, wealth: 20 } },
      { label: '算了，20块而已', effects: { mood: -2, wealth: -20 } }
    ] },
  { id: 'event_74', title: '网络谣言', description: '你转发的一条信息被证实是谣言，你成了传播者之一', icon: '📢', type: 'choice', minAge: 18,
    choices: [
      { label: '公开道歉澄清', effects: { mood: 5, sales: 3, wealth: -500 } },
      { label: '默默删除当没发生', effects: { mood: -5, sales: -3 } }
    ] },
  { id: 'event_83', title: '被星探发现', description: '逛街时被自称星探的人拦住，说你很有明星相', icon: '⭐', type: 'choice', minAge: 18, maxAge: 28,
    choices: [
      { label: '签约试试看', effects: { wealth: 5000, creativity: 5, mood: 10, stamina: -5 } },
      { label: '婉拒，骗子太多了', effects: { mood: 3, finance: 3 } }
    ] },
  { id: 'event_98', title: '素食挑战', description: '看了一部关于素食的纪录片，你决定尝试素食一个月', icon: '🥗', type: 'choice', minAge: 20,
    choices: [
      { label: '坚持素食', effects: { health: 10, mood: 5, wealth: -1000, stamina: -3 } },
      { label: '算了，肉太香了', effects: { health: -2, mood: 8 } }
    ] },
  { id: 'event_100', title: '马拉松挑战', description: '你报名了城市马拉松，还有三个月备赛时间', icon: '🏃', type: 'choice', minAge: 22, maxAge: 50,
    choices: [
      { label: '科学训练，冲刺完赛', effects: { health: 12, stamina: 15, mood: 10, wealth: -2000 } },
      { label: '重在参与，跑到哪算哪', effects: { health: 5, stamina: 5, mood: 8, wealth: -1000 } }
    ] },
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
  const { health, mood, wealth, research, sales, creativity, finance, ageMonths } = character;
  const age = ageMonths / 12;
  const workTotal = (research || 0) + (sales || 0) + (creativity || 0) + (finance || 0);
  const lifeTotal = (mood || 50) + (health || 50) + Math.min((wealth || 0) / 500, 100);

  if (health <= 0) {
    return { title: '英年早逝', description: '健康是人生最重要的财富，遗憾的是你没有珍惜它。', grade: 'F', color: '#ef4444' };
  }
  if (age >= 80) {
    return { title: '寿终正寝', description: '你度过了漫长而充实的一生，在亲人的陪伴中安详离世。', grade: 'A', color: '#00d4aa' };
  }
  const total = lifeTotal + workTotal;
  if (total >= 400) return { title: '传奇人生', description: '你的人生堪称传奇！事业有成、家庭美满、身心健康。', grade: 'S', color: '#f59e0b' };
  if (total >= 300) return { title: '成功人士', description: '你的人生相当成功，在多个领域都取得了不错的成就。', grade: 'A', color: '#00d4aa' };
  if (total >= 200) return { title: '平凡幸福', description: '你的人生平凡但不平庸，每一天都过得充实而快乐。', grade: 'B', color: '#8b5cf6' };
  if (total >= 120) return { title: '略有遗憾', description: '人生总有起起落落，你经历了许多困难，但依然坚持走到了最后。', grade: 'C', color: '#f59e0b' };
  return { title: '坎坷一生', description: '你的人生充满了挑战和挫折，希望下一次能更加精彩。', grade: 'D', color: '#ef4444' };
}

// 初始角色状态（无天赋）
export function createInitialCharacter(name, gender) {
  return {
    name,
    gender,
    ageMonths: 18 * 12, // 18岁 = 216个月
    // 普通数值
    mood: 60,
    health: 80,
    stamina: 80,
    hunger: 70,
    // 工作数值（全部从0开始）
    research: 0,
    sales: 0,
    creativity: 0,
    finance: 0,
    // 其他
    wealth: 3000,
    isAlive: true,
    events: [],
    actionsTaken: [],
    currentBasicJob: null, // 当前正在做的底层工作
  };
}

// 获取当前人生阶段
export function getLifeStage(ageMonths) {
  const age = Math.floor(ageMonths / 12);
  return LIFE_STAGES.find(stage => age >= stage.minAge && age <= stage.maxAge) || LIFE_STAGES[3];
}

// 获取可用事件
export function getAvailableEvents(character, recentEventIds = []) {
  const age = Math.floor(character.ageMonths / 12);
  const { health, wealth, research, sales, creativity, finance } = character;

  return RANDOM_EVENTS.filter(event => {
    if (recentEventIds.includes(event.id)) return false;
    if (event.minAge && age < event.minAge) return false;
    if (event.maxAge && age > event.maxAge) return false;
    if (event.minResearch && (research || 0) < event.minResearch) return false;
    if (event.minSales && (sales || 0) < event.minSales) return false;
    if (event.minCreativity && (creativity || 0) < event.minCreativity) return false;
    if (event.minFinance && (finance || 0) < event.minFinance) return false;
    if (event.minWealth && wealth < event.minWealth) return false;
    return true;
  });
}

// 应用行动效果
export function applyAction(character, action) {
  const newChar = { ...character };
  const effects = { ...action.effects };

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

  // 时间推进：1个月
  newChar.ageMonths += 1;

  // 饥饿惩罚
  if (newChar.hunger <= 0) {
    newChar.health = Math.max(0, newChar.health - 5);
    newChar.mood = Math.max(0, newChar.mood - 5);
  }
  // 体力耗尽惩罚
  if (newChar.stamina <= 0 && action.id !== 'rest') {
    newChar.health = Math.max(0, newChar.health - 3);
  }

  newChar.actionsTaken = [...(newChar.actionsTaken || []), { action: action.id, ageMonths: newChar.ageMonths }];

  const eventLog = {
    type: 'action',
    action: action.name,
    icon: action.icon,
    effects,
    ageMonths: newChar.ageMonths,
  };
  newChar.events = [eventLog, ...(newChar.events || [])].slice(0, 20);

  const age = newChar.ageMonths / 12;
  if (newChar.health <= 0 || age >= 80) {
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
    ageMonths: newChar.ageMonths,
    choice: choiceIndex !== null ? event.choices[choiceIndex].label : null,
  };
  newChar.events = [eventLog, ...(newChar.events || [])].slice(0, 20);

  const age = newChar.ageMonths / 12;
  if (newChar.health <= 0 || age >= 80) {
    newChar.isAlive = false;
  }
  return newChar;
}