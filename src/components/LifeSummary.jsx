import { NORMAL_STATS, WORK_STATS } from '../data/gameData';

export default function LifeSummary({ character, ending, onRestart }) {
  const normalEntries = Object.entries(NORMAL_STATS).map(([key, info]) => ({
    label: info.name,
    icon: info.icon,
    value: character[key] || 0,
    max: 100,
  }));

  const workEntries = Object.entries(WORK_STATS).map(([key, info]) => ({
    label: info.name,
    icon: info.icon,
    value: character[key] || 0,
    max: 100,
  }));

  const allStats = [
    ...normalEntries,
    { label: '财富', icon: '💰', value: character.wealth || 0, format: 'money' },
    ...workEntries,
  ];

  return (
    <div className="summary-overlay">
      <div className="summary-modal">
        <div className="summary-content">
          <div className="summary-grade" style={{ color: ending.color }}>
            {ending.grade}
          </div>
          <h1 className="summary-title" style={{ color: ending.color }}>
            {ending.title}
          </h1>
          <p className="summary-description">{ending.description}</p>

          <div className="summary-stats">
            <div className="summary-char-info">
              <span className="summary-name">{character.name}</span>
              <span className="summary-age">享年 {character.age} 岁</span>
            </div>
            <div className="summary-stats-grid">
              {allStats.map((stat) => (
                <div key={stat.label} className="summary-stat-item">
                  <span className="summary-stat-icon">{stat.icon}</span>
                  <span className="summary-stat-label">{stat.label}</span>
                  <span className="summary-stat-value">
                    {stat.format === 'money'
                      ? `¥${stat.value.toLocaleString()}`
                      : `${stat.value}${stat.max ? `/${stat.max}` : ''}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="summary-actions-taken">
            <h3>人生回顾</h3>
            <div className="summary-action-count">
              你共做出了 {character.actionsTaken?.length || 0} 次人生选择
            </div>
          </div>

          <button className="restart-btn" onClick={onRestart}>
            再活一次
          </button>
        </div>
      </div>
    </div>
  );
}