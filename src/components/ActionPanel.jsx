import { useRef, useCallback } from 'react';
import { ACTIONS, NORMAL_STATS, WORK_STATS } from '../data/gameData';

const STAT_ICONS = {
  ...Object.fromEntries(Object.entries(NORMAL_STATS).map(([k, v]) => [k, v.icon])),
  ...Object.fromEntries(Object.entries(WORK_STATS).map(([k, v]) => [k, v.icon])),
  wealth: '💰',
};

export default function ActionPanel({ onAction, disabled }) {
  const btnRefs = useRef({});

  const handleClick = useCallback((action, e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    // Primary ripple
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Secondary ring
    const ring = document.createElement('span');
    ring.className = 'ripple-ring';
    ring.style.width = ring.style.height = `${size * 0.8}px`;
    ring.style.left = `${x + size * 0.1}px`;
    ring.style.top = `${y + size * 0.1}px`;

    // Click flash
    const flash = document.createElement('span');
    flash.className = 'click-flash';

    const container = btn.querySelector('.ripple-container');
    if (container) {
      container.appendChild(ripple);
      container.appendChild(ring);
      container.appendChild(flash);
      setTimeout(() => {
        ripple.remove();
        ring.remove();
        flash.remove();
      }, 700);
    }

    onAction(action);
  }, [onAction]);

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
            onClick={(e) => handleClick(action, e)}
            disabled={disabled}
            title={action.description}
          >
            <div className="btn-border-glow" />
            <div className="ripple-container" />
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