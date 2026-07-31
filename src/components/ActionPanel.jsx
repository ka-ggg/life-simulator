import { useRef, useCallback } from 'react';
import { BASIC_JOBS, SELF_IMPROVE_ACTIONS, LIFE_ACTIONS } from '../data/gameData';

export default function ActionPanel({ character, onAction, onBasicJob, disabled }) {
  const btnRefs = useRef({});

  const handleClick = useCallback((handler, payload, e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    const ring = document.createElement('span');
    ring.className = 'ripple-ring';
    ring.style.width = ring.style.height = `${size * 0.8}px`;
    ring.style.left = `${x + size * 0.1}px`;
    ring.style.top = `${y + size * 0.1}px`;

    const flash = document.createElement('span');
    flash.className = 'click-flash';

    const container = btn.querySelector('.ripple-container');
    if (container) {
      container.appendChild(ripple);
      container.appendChild(ring);
      container.appendChild(flash);
      setTimeout(() => { ripple.remove(); ring.remove(); flash.remove(); }, 700);
    }

    handler(payload);
  }, []);

  const hasCareerJob = character?.job != null;
  const stamina = character?.stamina || 0;
  const hunger = character?.hunger || 0;
  const wealth = character?.wealth || 0;

  return (
    <div className="panel action-panel">
      <div className="panel-header">
        <h2>行动选项</h2>
        <span className="panel-header-hint">每次行动 = 1个月</span>
      </div>

      {/* 打工赚钱 — 无门槛工作 */}
      {!hasCareerJob && (
        <div className="action-section">
          <div className="section-label">打工赚钱</div>
          <div className="basic-job-grid">
            {BASIC_JOBS.map((job) => (
              <button
                key={job.id}
                className="action-btn basic-job-btn"
                onClick={(e) => handleClick(onBasicJob, job, e)}
                disabled={disabled || stamina < 10}
                title={job.description}
              >
                <div className="btn-border-glow" />
                <div className="ripple-container" />
                <span className="action-icon">{job.icon}</span>
                <span className="action-name">{job.name}</span>
                <span className="basic-job-salary">¥{job.salary.toLocaleString()}/月</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 有职业时显示工作收益 */}
      {hasCareerJob && (
        <div className="action-section">
          <div className="section-label career-working-label">
            <span>{character.job.careerName}</span>
            <span className="career-salary-badge">¥{(character.job.salary || 0).toLocaleString()}/月</span>
          </div>
          <p className="career-working-hint">你已入职正式工作，每次行动自动推进工作进度（每月自动发薪）</p>
        </div>
      )}

      {/* 自我提升 */}
      <div className="action-section">
        <div className="section-label">自我提升</div>
        <div className="action-grid">
          {SELF_IMPROVE_ACTIONS.map((action) => (
            <button
              key={action.id}
              className="action-btn"
              onClick={(e) => handleClick(onAction, action, e)}
              disabled={disabled || (action.effects.wealth < 0 && wealth < Math.abs(action.effects.wealth))}
              title={action.description}
            >
              <div className="btn-border-glow" />
              <div className="ripple-container" />
              <span className="action-icon">{action.icon}</span>
              <span className="action-name">{action.name}</span>
              <span className="action-effects">
                {Object.entries(action.effects).filter(([k]) => !['wealth'].includes(k) || action.effects[k] < 0).map(([key, val]) => {
                  const prefix = val > 0 ? '+' : '';
                  return (
                    <span key={key} className={`effect-tag ${val > 0 ? 'pos' : 'neg'}`}>
                      {prefix}{key === 'wealth' ? `¥${val}` : val}
                    </span>
                  );
                })}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 生活维持 */}
      <div className="action-section">
        <div className="section-label">生活维持</div>
        <div className="action-grid">
          {LIFE_ACTIONS.map((action) => (
            <button
              key={action.id}
              className="action-btn"
              onClick={(e) => handleClick(onAction, action, e)}
              disabled={disabled || (action.effects.wealth < 0 && wealth < Math.abs(action.effects.wealth))}
              title={action.description}
            >
              <div className="btn-border-glow" />
              <div className="ripple-container" />
              <span className="action-icon">{action.icon}</span>
              <span className="action-name">{action.name}</span>
              <span className="action-effects">
                {Object.entries(action.effects).filter(([k]) => !['wealth'].includes(k) || action.effects[k] < 0).map(([key, val]) => {
                  const prefix = val > 0 ? '+' : '';
                  return (
                    <span key={key} className={`effect-tag ${val > 0 ? 'pos' : 'neg'}`}>
                      {prefix}{key === 'wealth' ? `¥${val}` : val}
                    </span>
                  );
                })}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}