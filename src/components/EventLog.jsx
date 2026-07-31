export default function EventLog({ events }) {
  if (!events || events.length === 0) {
    return (
      <div className="panel event-log-panel">
        <div className="panel-header">
          <h2>近期事件</h2>
        </div>
        <div className="event-log-empty">还没有发生任何事情，开始你的行动吧！</div>
      </div>
    );
  }

  return (
    <div className="panel event-log-panel">
      <div className="panel-header">
        <h2>近期事件</h2>
      </div>
      <div className="event-log-list">
        {events.slice(0, 6).map((event, idx) => (
          <div key={idx} className={`event-log-item ${event.type}`}>
            <span className="event-log-icon">{event.icon}</span>
            <span className="event-log-text">
              {event.type === 'action'
                ? `完成${event.action}`
                : event.title}
              {event.choice && ` → ${event.choice}`}
            </span>
            <span className="event-log-effects">
              {event.effects && Object.entries(event.effects).map(([key, val]) => {
                if (val === 0) return null;
                const signs = { health: '❤️', happiness: '😊', wealth: '💰', career: '💼' };
                const sign = signs[key] || '';
                const prefix = val > 0 ? '+' : '';
                return (
                  <span key={key} className={`mini-effect ${val > 0 ? 'positive' : 'negative'}`}>
                    {sign}{prefix}{key === 'wealth' ? `¥${val}` : val}
                  </span>
                );
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}