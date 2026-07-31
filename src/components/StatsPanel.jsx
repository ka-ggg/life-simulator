import { NORMAL_STATS, WORK_STATS, getWorkLevel, formatAge } from '../data/gameData';

export default function StatsPanel({ character }) {
  const normalEntries = Object.entries(NORMAL_STATS).map(([key, info]) => ({
    key,
    label: info.name,
    icon: info.icon,
    color: info.color,
    value: character[key] || 0,
    max: 100,
  }));

  const workEntries = Object.entries(WORK_STATS).map(([key, info]) => {
    const rawValue = character[key] || 0;
    const levelInfo = getWorkLevel(rawValue);
    const levelMin = levelInfo.min;
    const levelMax = levelInfo.max;
    const xpPercent = ((rawValue - levelMin) / (levelMax - levelMin + 1)) * 100;
    return {
      key,
      label: info.name,
      icon: info.icon,
      color: info.color,
      rawValue,
      level: levelInfo.level,
      levelName: levelInfo.name,
      xpPercent: Math.max(0, Math.min(100, xpPercent)),
    };
  });

  const wealthDisplay = (character.wealth || 0).toLocaleString();

  return (
    <div className="panel stats-panel">
      <div className="panel-header">
        <h2>角色状态</h2>
      </div>

      {/* 普通数值 */}
      <div className="stats-section-title">普通数值</div>
      <div className="stats-list">
        {normalEntries.map((stat) => (
          <div key={stat.key} className="stat-item">
            <div className="stat-header">
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}/{stat.max}</span>
            </div>
            <div className="stat-bar-track">
              <div
                className="stat-bar-fill"
                style={{
                  width: `${Math.min(100, (stat.value / stat.max) * 100)}%`,
                  background: stat.color,
                  boxShadow: `0 0 6px ${stat.color}40`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 工作数值 — 等级显示 */}
      <div className="stats-section-title">工作能力</div>
      <div className="stats-list">
        {workEntries.map((stat) => (
          <div key={stat.key} className="work-level-row">
            <span className="work-level-icon">{stat.icon}</span>
            <div className="work-level-info">
              <div className="work-level-name">{stat.label}</div>
              <div className="work-level-xp">
                <div
                  className="work-level-xp-fill"
                  style={{ width: `${stat.xpPercent}%` }}
                />
              </div>
            </div>
            <div className="work-level-badge">
              <span className="work-level-lv">Lv.{stat.level}</span>
              <span className="work-level-title">{stat.levelName}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="age-display">
        <span className="age-label">年龄</span>
        <span className="age-value">{formatAge(character.ageMonths)}</span>
      </div>

      <div className="age-display" style={{ marginTop: 4 }}>
        <span className="age-label">财富</span>
        <span className="age-value" style={{ color: 'var(--gold-bright)' }}>¥{wealthDisplay}</span>
      </div>
    </div>
  );
}