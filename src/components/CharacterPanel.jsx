export default function CharacterPanel({ character, lifeStage }) {
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
        <span>{character.age}岁</span>
      </div>
      <div className="char-stage-badge" style={{ color: lifeStage?.color, borderColor: lifeStage?.color }}>
        {lifeStage?.icon} {lifeStage?.name}
      </div>
    </div>
  );
}