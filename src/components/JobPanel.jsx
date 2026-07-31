import { getCareerInfo } from '../data/careerData';
import { WORK_STATS, getWorkLevel } from '../data/gameData';

const STAT_LABELS = Object.fromEntries(
  Object.entries(WORK_STATS).map(([k, v]) => [k, v.name])
);

export default function JobPanel({ character, onOpenMarket, onPromote, onStartResignation, jobMessages }) {
  const job = character?.job;

  if (!job) {
    return (
      <div className="panel job-panel">
        <div className="panel-header">
          <h2>职业</h2>
        </div>
        <div className="job-empty">
          <div className="job-empty-icon">💼</div>
          <div className="job-empty-text">暂无职业</div>
          <div className="job-empty-desc">前往职业市场寻找工作</div>
          <button className="job-market-btn" onClick={onOpenMarket}>
            浏览职业市场
          </button>
        </div>
      </div>
    );
  }

  const info = getCareerInfo(job.careerId);
  const career = info?.career;
  const nextLevel = career?.levels.find(l => l.level === job.level + 1);

  return (
    <div className="panel job-panel">
      <div className="panel-header">
        <h2>职业</h2>
      </div>

      <div className="job-current">
        <div className="job-current-header">
          <span className="job-current-icon">{career?.icon || '💼'}</span>
          <div className="job-current-info">
            <div className="job-current-title">{job.title}</div>
            <div className="job-current-career">{career?.name || '未知职业'}</div>
          </div>
          <div className="job-current-level">
            <span className="job-level-badge">Lv.{job.level}</span>
          </div>
        </div>

        <div className="job-details">
          <div className="job-detail-item">
            <span className="job-detail-label">月薪</span>
            <span className="job-detail-value income">¥{job.salary.toLocaleString()}</span>
          </div>
          <div className="job-detail-item">
            <span className="job-detail-label">本月已工作</span>
            <span className="job-detail-value">{job.workDay}/30 天</span>
          </div>
          <div className="job-detail-item">
            <span className="job-detail-label">发薪倒计时</span>
            <span className="job-detail-value">{30 - job.workDay} 天后</span>
          </div>
        </div>

        {job.isResigning && (
          <div className="job-resigning">
            <div className="job-resigning-icon">📝</div>
            <div className="job-resigning-text">
              <div>离职手续办理中</div>
              <div className="job-resigning-days">还需工作 {job.resignDaysLeft} 天</div>
            </div>
          </div>
        )}
      </div>

      {nextLevel && !job.isResigning && (
        <div className="job-next-level">
          <div className="jnl-title">下一级</div>
          <div className="jnl-info">
            <span className="jnl-level">Lv.{nextLevel.level}</span>
            <span className="jnl-name">{nextLevel.title}</span>
            <span className="jnl-salary">¥{nextLevel.salary.toLocaleString()}/月</span>
          </div>
          <div className="jnl-reqs">
            {Object.entries(nextLevel.requirements).map(([k, reqLevel]) => {
              const rawValue = character[k] || 0;
              const charLevel = getWorkLevel(rawValue);
              const met = charLevel.level >= reqLevel;
              return (
                <span key={k} className={`jnl-req ${met ? 'met' : 'unmet'}`}>
                  {STAT_LABELS[k] || k}: Lv.{charLevel.level}/{reqLevel} {met ? '✓' : '✗'}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {!nextLevel && !job.isResigning && (
        <div className="job-max-level">
          <span>🏆 已达到最高级别！</span>
        </div>
      )}

      {!job.isResigning && (
        <div className="job-actions">
          {nextLevel && (
            <button className="job-btn promote-btn" onClick={onPromote}>
              ⬆ 晋升
            </button>
          )}
          <button className="job-btn resign-btn" onClick={onStartResignation}>
            📤 辞职
          </button>
        </div>
      )}

      {jobMessages && jobMessages.length > 0 && (
        <div className="job-messages">
          {jobMessages.slice(0, 5).map(msg => (
            <div key={msg.id} className={`job-msg job-msg-${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}