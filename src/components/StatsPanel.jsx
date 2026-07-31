export default function StatsPanel({ character }) {
  const stats = [
    { label: '健康', value: character.health, icon: '❤️', color: '#ef4444', max: 100 },
    { label: '快乐', value: character.happiness, icon: '😊', color: '#f59e0b', max: 100 },
    { label: '财富', value: character.wealth, icon: '💰', color: '#f59e0b', max: 10000, format: 'money' },
    { label: '事业', value: character.career, icon: '💼', color: '#00d4aa', max: 100 },
  ];

  return (
    <div className="panel stats-panel">
      <div className="panel-header">
        <h2>角色状态</h2>
      </div>
      <div className="stats-list">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <div className="stat-header">
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">
                {stat.format === 'money'
                  ? `¥${stat.value.toLocaleString()}`
                  : `${stat.value}`
                }
                {stat.max === 100 && `/${stat.max}`}
              </span>
            </div>
            <div className="stat-bar-track">
              <div
                className="stat-bar-fill"
                style={{
                  width: `${Math.min(100, (stat.value / stat.max) * 100)}%`,
                  backgroundColor: stat.color,
                  boxShadow: `0 0 8px ${stat.color}40`
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="age-display">
        <span className="age-label">年龄</span>
        <span className="age-value">{character.age}岁</span>
      </div>
    </div>
  );
}