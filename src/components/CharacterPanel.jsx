export default function CharacterPanel({ character, lifeStage }) {
  return (
    <div className="panel character-panel">
      <div className="panel-header">
        <h2>我的角色</h2>
      </div>
      <div className="character-avatar-container">
        <div className="character-avatar" style={{ borderColor: lifeStage?.color }}>
          <div className="avatar-body">
            <div className="avatar-head">
              <div className="avatar-face">
                <span className="avatar-eyes">• •</span>
                <span className="avatar-mouth">﹏</span>
              </div>
            </div>
            <div className="avatar-torso"></div>
          </div>
        </div>
        <div className="character-name">{character.name}</div>
        <div className="character-gender-age">
          {character.gender === '男' ? '♂' : '♀'} · {character.age}岁
        </div>
        <div className="character-stage" style={{ color: lifeStage?.color }}>
          {lifeStage?.name}
        </div>
      </div>
    </div>
  );
}