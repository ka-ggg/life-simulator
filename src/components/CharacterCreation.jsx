import { useState } from 'react';
import { TRAITS } from '../data/gameData';

export default function CharacterCreation({ onCreate }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('男');
  const [selectedTrait, setSelectedTrait] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !selectedTrait) return;
    onCreate(name.trim(), gender, selectedTrait);
  };

  return (
    <div className="creation-overlay">
      <div className="creation-modal">
        <h1 className="creation-title">创建你的人生</h1>

        <form onSubmit={handleSubmit} className="creation-form">
          <div className="form-group">
            <label className="form-label">姓名</label>
            <input
              type="text"
              className="form-input"
              placeholder="请输入姓名"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={10}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label className="form-label">性别</label>
            <div className="gender-selector">
              <button
                type="button"
                className={`gender-btn ${gender === '男' ? 'selected' : ''}`}
                onClick={() => setGender('男')}
              >
                ♂ 男
              </button>
              <button
                type="button"
                className={`gender-btn ${gender === '女' ? 'selected' : ''}`}
                onClick={() => setGender('女')}
              >
                ♀ 女
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">初始特质</label>
            <div className="trait-grid">
              {TRAITS.map((trait) => (
                <button
                  key={trait.id}
                  type="button"
                  className={`trait-card ${selectedTrait === trait.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTrait(trait.id)}
                >
                  <span className="trait-icon">{trait.icon}</span>
                  <span className="trait-name">{trait.name}</span>
                  <span className="trait-desc">{trait.description}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="start-btn"
            disabled={!name.trim() || !selectedTrait}
          >
            开始人生
          </button>
        </form>
      </div>
    </div>
  );
}