export default function CharacterPanel({ character, lifeStage, formatAge }) {
  return (
    <div className="panel char-panel">
      <div className="panel-header" style={{ width: '100%' }}>
        <h2>我的角色</h2>
      </div>
      <div className="char-avatar" style={{ borderColor: lifeStage?.color }}>
        <div className="char-avatar-inner">
          {character.gender === '男' ? '🧑' : '👩'}
        </div>
      </div>
      <div className="char-name">{character.name}</div>
      <div className="char-info">
        <span>{character.gender === '男' ? '♂' : '♀'}</span>
        <span>·</span>
        <span>{formatAge(character.ageMonths)}</span>
      </div>
      <div className="char-stage-badge" style={{ color: lifeStage?.color, borderColor: lifeStage?.color }}>
        {lifeStage?.icon} {lifeStage?.name}
      </div>
      <div className="age-display">
        <span className="age-label">财富</span>
        <span className="age-value">¥{character.wealth?.toLocaleString()}</span>
      </div>
    </div>
  );
}