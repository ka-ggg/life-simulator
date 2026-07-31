import { ACTIONS } from '../data/gameData';

export default function ActionPanel({ onAction, disabled }) {
  return (
    <div className="panel action-panel">
      <div className="panel-header">
        <h2>行动选项</h2>
      </div>
      <div className="action-grid">
        {ACTIONS.map((action) => (
          <button
            key={action.id}
            className="action-btn"
            onClick={() => onAction(action)}
            disabled={disabled}
            title={action.description}
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-name">{action.name}</span>
            <span className="action-effects">
              {Object.entries(action.effects).map(([key, val]) => {
                const signs = { health: '❤️', happiness: '😊', wealth: '💰', career: '💼' };
                const sign = signs[key] || '';
                const prefix = val > 0 ? '+' : '';
                return (
                  <span key={key} className={`effect-tag ${val > 0 ? 'positive' : 'negative'}`}>
                    {sign}{prefix}{key === 'wealth' ? `¥${val}` : val}
                  </span>
                );
              })}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}