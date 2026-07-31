import { ACTIONS, NORMAL_STATS, WORK_STATS } from '../data/gameData';

const STAT_ICONS = {
  ...Object.fromEntries(Object.entries(NORMAL_STATS).map(([k, v]) => [k, v.icon])),
  ...Object.fromEntries(Object.entries(WORK_STATS).map(([k, v]) => [k, v.icon])),
  wealth: '💰',
};

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
                const sign = STAT_ICONS[key] || '';
                const prefix = val > 0 ? '+' : '';
                return (
                  <span key={key} className={`effect-tag ${val > 0 ? 'pos' : 'neg'}`}>
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