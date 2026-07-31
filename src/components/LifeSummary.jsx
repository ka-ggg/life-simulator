export default function LifeSummary({ character, ending, onRestart }) {
  const stats = [
    { label: '健康', value: character.health, icon: '❤️', max: 100 },
    { label: '快乐', value: character.happiness, icon: '😊', max: 100 },
    { label: '财富', value: character.wealth, icon: '💰', format: 'money' },
    { label: '事业', value: character.career, icon: '💼', max: 100 },
  ];

  return (
    <div className="modal-overlay">
      <div className="summary-modal">
        <div className="summary-glow" style={{ '--glow-color': ending.color }} />
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
              {stats.map((stat) => (
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