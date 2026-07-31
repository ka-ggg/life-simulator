// ===== 职业系统数据 =====

export const CAREER_CATEGORIES = [
  {
    id: 'computer',
    name: '计算机/IT',
    icon: '💻',
    description: '互联网与信息技术行业',
    careers: [
      {
        id: 'frontend_dev',
        name: '前端开发工程师',
        icon: '🎨',
        description: '负责网页和移动端用户界面的设计与开发',
        levels: [
          { level: 1, title: '初级前端开发', salary: 300, requirements: { career: 10 } },
          { level: 2, title: '中级前端开发', salary: 600, requirements: { career: 25 } },
          { level: 3, title: '高级前端开发', salary: 1000, requirements: { career: 45 } },
          { level: 4, title: '前端架构师', salary: 1600, requirements: { career: 65 } },
          { level: 5, title: '前端技术专家', salary: 2500, requirements: { career: 80, health: 40 } },
          { level: 6, title: '前端技术总监', salary: 4000, requirements: { career: 95, happiness: 30 } },
        ]
      },
      {
        id: 'backend_dev',
        name: '后端开发工程师',
        icon: '⚙️',
        description: '负责服务器端逻辑、数据库与API开发',
        levels: [
          { level: 1, title: '初级后端开发', salary: 350, requirements: { career: 12 } },
          { level: 2, title: '中级后端开发', salary: 700, requirements: { career: 30 } },
          { level: 3, title: '高级后端开发', salary: 1200, requirements: { career: 50 } },
          { level: 4, title: '后端架构师', salary: 1800, requirements: { career: 70 } },
          { level: 5, title: '后端技术专家', salary: 2800, requirements: { career: 85, health: 35 } },
          { level: 6, title: '后端技术总监', salary: 4500, requirements: { career: 95, happiness: 35 } },
        ]
      },
      {
        id: 'fullstack_dev',
        name: '全栈工程师',
        icon: '🔧',
        description: '同时掌握前端与后端技术的全能型开发者',
        levels: [
          { level: 1, title: '初级全栈开发', salary: 400, requirements: { career: 18 } },
          { level: 2, title: '中级全栈开发', salary: 800, requirements: { career: 35 } },
          { level: 3, title: '高级全栈开发', salary: 1400, requirements: { career: 55 } },
          { level: 4, title: '全栈架构师', salary: 2200, requirements: { career: 75 } },
          { level: 5, title: '全栈技术专家', salary: 3200, requirements: { career: 88, health: 40 } },
          { level: 6, title: '全栈技术总监', salary: 5000, requirements: { career: 98, happiness: 40 } },
        ]
      },
      {
        id: 'ai_engineer',
        name: 'AI大模型工程师',
        icon: '🤖',
        description: '从事大语言模型训练、微调与AI应用开发',
        levels: [
          { level: 1, title: 'AI助理工程师', salary: 500, requirements: { career: 22 } },
          { level: 2, title: 'AI开发工程师', salary: 1000, requirements: { career: 40 } },
          { level: 3, title: '高级AI工程师', salary: 1800, requirements: { career: 60 } },
          { level: 4, title: 'AI研究科学家', salary: 3000, requirements: { career: 80 } },
          { level: 5, title: 'AI技术专家', salary: 4500, requirements: { career: 90, health: 45 } },
          { level: 6, title: 'AI首席科学家', salary: 7000, requirements: { career: 98, happiness: 45 } },
        ]
      },
      {
        id: 'algorithm_eng',
        name: '算法工程师',
        icon: '📊',
        description: '设计优化算法，解决复杂计算问题',
        levels: [
          { level: 1, title: '初级算法工程师', salary: 450, requirements: { career: 20 } },
          { level: 2, title: '中级算法工程师', salary: 900, requirements: { career: 38 } },
          { level: 3, title: '高级算法工程师', salary: 1600, requirements: { career: 58 } },
          { level: 4, title: '算法专家', salary: 2600, requirements: { career: 78 } },
          { level: 5, title: '高级算法专家', salary: 3800, requirements: { career: 90, health: 40 } },
          { level: 6, title: '首席算法科学家', salary: 6000, requirements: { career: 98, happiness: 40 } },
        ]
      },
      {
        id: 'security_eng',
        name: '网络安全工程师',
        icon: '🛡️',
        description: '保障系统安全，防御网络攻击与数据泄露',
        levels: [
          { level: 1, title: '初级安全工程师', salary: 350, requirements: { career: 15 } },
          { level: 2, title: '中级安全工程师', salary: 750, requirements: { career: 32 } },
          { level: 3, title: '高级安全工程师', salary: 1300, requirements: { career: 52 } },
          { level: 4, title: '安全架构师', salary: 2000, requirements: { career: 72 } },
          { level: 5, title: '安全技术专家', salary: 3000, requirements: { career: 87, health: 35 } },
          { level: 6, title: '首席安全官', salary: 5000, requirements: { career: 95, happiness: 35 } },
        ]
      },
    ]
  },
  {
    id: 'education',
    name: '教育',
    icon: '📚',
    description: '传道授业解惑，培育下一代人才',
    careers: [
      {
        id: 'primary_teacher',
        name: '小学教师',
        icon: '🍎',
        description: '在小学任教，帮助孩子们打好基础',
        levels: [
          { level: 1, title: '实习教师', salary: 180, requirements: { career: 8 } },
          { level: 2, title: '正式教师', salary: 350, requirements: { career: 22 } },
          { level: 3, title: '骨干教师', salary: 550, requirements: { career: 38 } },
          { level: 4, title: '学科带头人', salary: 800, requirements: { career: 55, happiness: 30 } },
          { level: 5, title: '教研组长', salary: 1200, requirements: { career: 70, happiness: 40 } },
          { level: 6, title: '副校长', salary: 1800, requirements: { career: 85, happiness: 50 } },
        ]
      },
      {
        id: 'middle_teacher',
        name: '中学教师',
        icon: '🏫',
        description: '在中学任教，辅导学生冲刺升学',
        levels: [
          { level: 1, title: '实习教师', salary: 220, requirements: { career: 12 } },
          { level: 2, title: '正式教师', salary: 400, requirements: { career: 28 } },
          { level: 3, title: '骨干教师', salary: 650, requirements: { career: 45 } },
          { level: 4, title: '年级主任', salary: 950, requirements: { career: 60, happiness: 35 } },
          { level: 5, title: '教务主任', salary: 1400, requirements: { career: 75, happiness: 45 } },
          { level: 6, title: '校长', salary: 2200, requirements: { career: 88, happiness: 55 } },
        ]
      },
      {
        id: 'professor',
        name: '大学教授',
        icon: '🎓',
        description: '在高校从事教学与科研工作',
        levels: [
          { level: 1, title: '助教', salary: 350, requirements: { career: 20 } },
          { level: 2, title: '讲师', salary: 600, requirements: { career: 38 } },
          { level: 3, title: '副教授', salary: 1000, requirements: { career: 55 } },
          { level: 4, title: '教授', salary: 1600, requirements: { career: 72, happiness: 30 } },
          { level: 5, title: '学科带头人', salary: 2400, requirements: { career: 85, happiness: 40 } },
          { level: 6, title: '院士', salary: 4000, requirements: { career: 95, happiness: 50 } },
        ]
      },
      {
        id: 'trainer',
        name: '培训讲师',
        icon: '🎤',
        description: '在培训机构或企业进行专业技能培训',
        levels: [
          { level: 1, title: '助理讲师', salary: 250, requirements: { career: 10 } },
          { level: 2, title: '初级讲师', salary: 500, requirements: { career: 28 } },
          { level: 3, title: '高级讲师', salary: 850, requirements: { career: 48 } },
          { level: 4, title: '金牌讲师', salary: 1300, requirements: { career: 65, happiness: 30 } },
          { level: 5, title: '培训总监', salary: 2000, requirements: { career: 80, happiness: 40 } },
          { level: 6, title: '首席培训官', salary: 3000, requirements: { career: 90, happiness: 50 } },
        ]
      },
    ]
  },
  {
    id: 'sales',
    name: '销售/商务',
    icon: '💼',
    description: '以业绩为导向，创造商业价值',
    careers: [
      {
        id: 'realestate_sales',
        name: '房产销售',
        icon: '🏠',
        description: '为客户匹配理想居所，促成房产交易',
        levels: [
          { level: 1, title: '房产经纪人', salary: 200, requirements: { career: 5 } },
          { level: 2, title: '高级经纪人', salary: 500, requirements: { career: 22 } },
          { level: 3, title: '销售主管', salary: 900, requirements: { career: 42 } },
          { level: 4, title: '区域经理', salary: 1500, requirements: { career: 62, happiness: 25 } },
          { level: 5, title: '销售总监', salary: 2500, requirements: { career: 80, happiness: 30 } },
          { level: 6, title: '副总裁', salary: 4000, requirements: { career: 92, happiness: 35 } },
        ]
      },
      {
        id: 'car_sales',
        name: '汽车销售',
        icon: '🚗',
        description: '为客户推荐最佳座驾，完成车辆销售',
        levels: [
          { level: 1, title: '销售顾问', salary: 220, requirements: { career: 8 } },
          { level: 2, title: '资深销售顾问', salary: 450, requirements: { career: 25 } },
          { level: 3, title: '展厅经理', salary: 800, requirements: { career: 45 } },
          { level: 4, title: '销售经理', salary: 1300, requirements: { career: 65, happiness: 25 } },
          { level: 5, title: '区域总监', salary: 2200, requirements: { career: 82, happiness: 30 } },
          { level: 6, title: '总经理', salary: 3500, requirements: { career: 92, happiness: 35 } },
        ]
      },
      {
        id: 'ecommerce',
        name: '电商运营',
        icon: '📦',
        description: '运营线上店铺，打造爆款商品',
        levels: [
          { level: 1, title: '运营助理', salary: 250, requirements: { career: 10 } },
          { level: 2, title: '运营专员', salary: 500, requirements: { career: 28 } },
          { level: 3, title: '高级运营', salary: 900, requirements: { career: 48 } },
          { level: 4, title: '运营经理', salary: 1500, requirements: { career: 68, happiness: 25 } },
          { level: 5, title: '运营总监', salary: 2400, requirements: { career: 84, happiness: 30 } },
          { level: 6, title: '电商副总', salary: 3800, requirements: { career: 93, happiness: 35 } },
        ]
      },
      {
        id: 'insurance_sales',
        name: '保险销售',
        icon: '🔐',
        description: '为客户规划保障方案，销售保险产品',
        levels: [
          { level: 1, title: '保险代理人', salary: 180, requirements: { career: 5 } },
          { level: 2, title: '高级代理人', salary: 400, requirements: { career: 22 } },
          { level: 3, title: '业务经理', salary: 750, requirements: { career: 42 } },
          { level: 4, title: '高级业务经理', salary: 1200, requirements: { career: 62, happiness: 20 } },
          { level: 5, title: '区域总监', salary: 2000, requirements: { career: 80, happiness: 28 } },
          { level: 6, title: '分公司总经理', salary: 3200, requirements: { career: 90, happiness: 35 } },
        ]
      },
    ]
  },
  {
    id: 'medical',
    name: '医疗健康',
    icon: '🏥',
    description: '救死扶伤，守护人类健康',
    careers: [
      {
        id: 'nurse',
        name: '护士',
        icon: '💉',
        description: '在医院提供专业的护理服务',
        levels: [
          { level: 1, title: '实习护士', salary: 200, requirements: { career: 10 } },
          { level: 2, title: '注册护士', salary: 380, requirements: { career: 28 } },
          { level: 3, title: '主管护师', salary: 600, requirements: { career: 48, health: 30 } },
          { level: 4, title: '副主任护师', salary: 900, requirements: { career: 65, health: 40 } },
          { level: 5, title: '主任护师', salary: 1400, requirements: { career: 80, health: 50 } },
          { level: 6, title: '护理部主任', salary: 2000, requirements: { career: 90, health: 55 } },
        ]
      },
      {
        id: 'doctor',
        name: '医生',
        icon: '🩺',
        description: '在医疗机构诊断治疗疾病',
        levels: [
          { level: 1, title: '住院医师', salary: 300, requirements: { career: 20 } },
          { level: 2, title: '主治医师', salary: 600, requirements: { career: 40 } },
          { level: 3, title: '副主任医师', salary: 1000, requirements: { career: 60, health: 30 } },
          { level: 4, title: '主任医师', salary: 1600, requirements: { career: 78, health: 40 } },
          { level: 5, title: '科室主任', salary: 2400, requirements: { career: 88, health: 50 } },
          { level: 6, title: '副院长', salary: 3500, requirements: { career: 95, health: 55 } },
        ]
      },
      {
        id: 'pharmacist',
        name: '药剂师',
        icon: '💊',
        description: '在医院或药房负责药品管理与配发',
        levels: [
          { level: 1, title: '初级药师', salary: 250, requirements: { career: 15 } },
          { level: 2, title: '中级药师', salary: 480, requirements: { career: 32 } },
          { level: 3, title: '主管药师', salary: 750, requirements: { career: 52, health: 25 } },
          { level: 4, title: '副主任药师', salary: 1100, requirements: { career: 70, health: 35 } },
          { level: 5, title: '主任药师', salary: 1600, requirements: { career: 84, health: 45 } },
          { level: 6, title: '药学部主任', salary: 2200, requirements: { career: 92, health: 50 } },
        ]
      },
    ]
  },
  {
    id: 'finance',
    name: '金融',
    icon: '💰',
    description: '在资本市场的浪潮中创造财富',
    careers: [
      {
        id: 'bank_teller',
        name: '银行职员',
        icon: '🏦',
        description: '在银行从事柜台业务与客户服务',
        levels: [
          { level: 1, title: '柜员', salary: 220, requirements: { career: 10 } },
          { level: 2, title: '高级柜员', salary: 420, requirements: { career: 28 } },
          { level: 3, title: '客户经理', salary: 750, requirements: { career: 48 } },
          { level: 4, title: '支行副行长', salary: 1200, requirements: { career: 65, wealth: 5000 } },
          { level: 5, title: '支行行长', salary: 2000, requirements: { career: 82, wealth: 10000 } },
          { level: 6, title: '分行副行长', salary: 3200, requirements: { career: 92, wealth: 20000 } },
        ]
      },
      {
        id: 'investment_advisor',
        name: '投资顾问',
        icon: '📈',
        description: '为客户提供专业的投资建议与资产配置',
        levels: [
          { level: 1, title: '助理顾问', salary: 300, requirements: { career: 18 } },
          { level: 2, title: '投资顾问', salary: 650, requirements: { career: 35 } },
          { level: 3, title: '高级投资顾问', salary: 1200, requirements: { career: 55, wealth: 10000 } },
          { level: 4, title: '投资经理', salary: 2200, requirements: { career: 72, wealth: 20000 } },
          { level: 5, title: '投资总监', salary: 3800, requirements: { career: 86, wealth: 50000 } },
          { level: 6, title: '首席投资官', salary: 6000, requirements: { career: 95, wealth: 100000 } },
        ]
      },
      {
        id: 'accountant',
        name: '会计师',
        icon: '🧮',
        description: '负责企业财务核算与税务筹划',
        levels: [
          { level: 1, title: '初级会计', salary: 250, requirements: { career: 12 } },
          { level: 2, title: '中级会计', salary: 500, requirements: { career: 30 } },
          { level: 3, title: '高级会计', salary: 850, requirements: { career: 50 } },
          { level: 4, title: '财务经理', salary: 1400, requirements: { career: 68, wealth: 5000 } },
          { level: 5, title: '财务总监', salary: 2200, requirements: { career: 84, wealth: 15000 } },
          { level: 6, title: '首席财务官', salary: 3500, requirements: { career: 93, wealth: 30000 } },
        ]
      },
    ]
  },
  {
    id: 'arts',
    name: '艺术/创意',
    icon: '🎨',
    description: '用创意和才华创造美好作品',
    careers: [
      {
        id: 'designer',
        name: '设计师',
        icon: '✏️',
        description: '从事平面、UI/UX或品牌视觉设计',
        levels: [
          { level: 1, title: '初级设计师', salary: 250, requirements: { career: 10 } },
          { level: 2, title: '中级设计师', salary: 500, requirements: { career: 28 } },
          { level: 3, title: '高级设计师', salary: 850, requirements: { career: 50 } },
          { level: 4, title: '设计主管', salary: 1300, requirements: { career: 68, happiness: 30 } },
          { level: 5, title: '设计总监', salary: 2000, requirements: { career: 83, happiness: 40 } },
          { level: 6, title: '首席创意官', salary: 3200, requirements: { career: 92, happiness: 50 } },
        ]
      },
      {
        id: 'writer',
        name: '作家',
        icon: '✍️',
        description: '创作小说、散文、剧本等文学作品',
        levels: [
          { level: 1, title: '新人作者', salary: 100, requirements: { career: 8 } },
          { level: 2, title: '签约作者', salary: 300, requirements: { career: 25 } },
          { level: 3, title: '畅销作者', salary: 800, requirements: { career: 48, happiness: 30 } },
          { level: 4, title: '知名作家', salary: 1500, requirements: { career: 68, happiness: 45 } },
          { level: 5, title: '文学大家', salary: 2500, requirements: { career: 84, happiness: 55 } },
          { level: 6, title: '文坛巨匠', salary: 4000, requirements: { career: 94, happiness: 65 } },
        ]
      },
      {
        id: 'musician',
        name: '音乐人',
        icon: '🎵',
        description: '创作、演奏或制作音乐作品',
        levels: [
          { level: 1, title: '独立音乐人', salary: 150, requirements: { career: 10 } },
          { level: 2, title: '签约音乐人', salary: 400, requirements: { career: 28 } },
          { level: 3, title: '知名音乐人', salary: 900, requirements: { career: 50, happiness: 30 } },
          { level: 4, title: '金牌制作人', salary: 1600, requirements: { career: 70, happiness: 45 } },
          { level: 5, title: '音乐总监', salary: 2600, requirements: { career: 85, happiness: 55 } },
          { level: 6, title: '音乐教父', salary: 4500, requirements: { career: 94, happiness: 65 } },
        ]
      },
    ]
  },
];

// 获取指定职业的等级信息
export function getCareerLevel(careerId, level) {
  for (const cat of CAREER_CATEGORIES) {
    for (const career of cat.careers) {
      if (career.id === careerId) {
        return career.levels.find(l => l.level === level) || null;
      }
    }
  }
  return null;
}

// 获取职业完整信息
export function getCareerInfo(careerId) {
  for (const cat of CAREER_CATEGORIES) {
    for (const career of cat.careers) {
      if (career.id === careerId) {
        return { category: cat, career };
      }
    }
  }
  return null;
}

// 检查是否可以晋升
export function canPromote(character) {
  if (!character.job) return false;
  const info = getCareerInfo(character.job.careerId);
  if (!info) return false;
  const nextLevel = info.career.levels.find(l => l.level === character.job.level + 1);
  if (!nextLevel) return false;
  return checkRequirements(character, nextLevel.requirements);
}

// 检查是否满足入职要求
export function checkRequirements(character, requirements) {
  for (const [key, value] of Object.entries(requirements)) {
    if ((character[key] || 0) < value) return false;
  }
  return true;
}

// 获取未满足的要求列表
export function getMissingRequirements(character, requirements) {
  const missing = [];
  const labels = { career: '事业', health: '健康', happiness: '快乐', wealth: '财富' };
  for (const [key, value] of Object.entries(requirements)) {
    const current = character[key] || 0;
    if (current < value) {
      missing.push({ key, label: labels[key] || key, current, required: value });
    }
  }
  return missing;
}

// 初始化职业状态
export function createJobState(careerId) {
  const info = getCareerInfo(careerId);
  if (!info) return null;
  const level1 = info.career.levels[0];
  return {
    categoryId: info.category.id,
    careerId: careerId,
    level: 1,
    title: level1.title,
    salary: level1.salary,
    workDay: 0,       // 0-29, 当月已工作天数
    isResigning: false,
    resignDaysLeft: 0,
  };
}

// 每日工作（每次行动调用）
export function workDayTick(job) {
  if (!job) return job;
  const newJob = { ...job, workDay: job.workDay + 1 };
  // 30天发薪
  if (newJob.workDay >= 30) {
    newJob.workDay = 0;
  }
  return newJob;
}

// 发起辞职
export function startResignation(job) {
  if (!job || job.isResigning) return job;
  return {
    ...job,
    isResigning: true,
    resignDaysLeft: 2,
  };
}

// 辞职流程推进（每次行动调用）
export function tickResignation(job) {
  if (!job || !job.isResigning) return { job, completed: false };
  const newJob = { ...job, resignDaysLeft: job.resignDaysLeft - 1 };
  if (newJob.resignDaysLeft <= 0) {
    // 辞职完成，判断是否发薪
    const shouldPay = job.workDay >= 15;
    return { job: newJob, completed: true, shouldPay };
  }
  return { job: newJob, completed: false };
}

// 晋升
export function promoteJob(job) {
  const info = getCareerInfo(job.careerId);
  if (!info) return job;
  const nextLevel = info.career.levels.find(l => l.level === job.level + 1);
  if (!nextLevel) return job;
  return {
    ...job,
    level: nextLevel.level,
    title: nextLevel.title,
    salary: nextLevel.salary,
  };
}