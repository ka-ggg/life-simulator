import { useState } from 'react';
import { CAREER_CATEGORIES, checkRequirements, getMissingRequirements } from '../data/careerData';

const STAT_LABELS = { career: '事业', health: '健康', happiness: '快乐', wealth: '财富' };

export default function JobMarket({ character, onApply, onClose }) {
  const [activeCategory, setActiveCategory] = useState(CAREER_CATEGORIES[0].id);

  const category = CAREER_CATEGORIES.find(c => c.id === activeCategory);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="job-market-modal" onClick={e => e.stopPropagation()}>
        <div className="job-market-header">
          <div className="job-market-title">
            <span className="jm-title-icon">💼</span>
            <span>职业市场</span>
          </div>
          <button className="jm-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* 分类标签 */}
        <div className="jm-categories">
          {CAREER_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`jm-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="jm-cat-icon">{cat.icon}</span>
              <span className="jm-cat-name">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* 分类描述 */}
        {category && (
          <div className="jm-category-desc">{category.description}</div>
        )}

        {/* 职业列表 */}
        {category && (
          <div className="jm-careers-list">
            {category.careers.map(career => {
              const level1 = career.levels[0];
              const canApply = !character.job && checkRequirements(character, level1.requirements);
              const missing = !character.job ? getMissingRequirements(character, level1.requirements) : [];
              const maxLevel = career.levels[career.levels.length - 1];

              return (
                <div key={career.id} className="jm-career-card">
                  <div className="jm-career-top">
                    <div className="jm-career-info">
                      <span className="jm-career-icon">{career.icon}</span>
                      <div className="jm-career-text">
                        <div className="jm-career-name">{career.name}</div>
                        <div className="jm-career-desc">{career.description}</div>
                      </div>
                    </div>
                    {character.job ? (
                      <span className="jm-status-employed">已就业</span>
                    ) : canApply ? (
                      <button className="jm-apply-btn" onClick={() => onApply(career.id)}>
                        入职
                      </button>
                    ) : (
                      <div className="jm-locked">
                        <span className="jm-lock-icon">🔒</span>
                        <span className="jm-lock-text">条件不足</span>
                      </div>
                    )}
                  </div>

                  {/* 等级预览 */}
                  <div className="jm-levels">
                    {career.levels.map((lv, i) => (
                      <div key={lv.level} className={`jm-level-item ${i === 0 ? 'jm-level-current' : ''}`}>
                        <div className="jm-level-badge">
                          <span className="jm-level-num">Lv{lv.level}</span>
                          <span className="jm-level-title">{lv.title}</span>
                        </div>
                        <div className="jm-level-info">
                          <span className="jm-level-salary">💰 ¥{lv.salary}/月</span>
                          <span className="jm-level-reqs">
                            {Object.entries(lv.requirements).map(([k, v]) => (
                              <span key={k} className="jm-req-tag">
                                {STAT_LABELS[k] || k} ≥ {v}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 入职条件提示 */}
                  {!character.job && !canApply && missing.length > 0 && (
                    <div className="jm-missing-reqs">
                      <span className="jm-missing-label">入职缺少：</span>
                      {missing.map(m => (
                        <span key={m.key} className="jm-missing-tag">
                          {m.label} {m.current}/{m.required}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}