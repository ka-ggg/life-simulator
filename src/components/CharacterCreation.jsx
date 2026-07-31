import { useState } from 'react';

export default function CharacterCreation({ onCreate }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('男');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate(name.trim(), gender);
  };

  return (
    <div className="creation-overlay">
      <div className="creation-modal">
        <h1 className="creation-title">开始你的人生</h1>
        <p className="creation-subtitle">从零开始，白手起家，一切都要靠自己打拼</p>

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

          <div className="creation-note">
            <span>💡</span>
            <span>初始资金 ¥3000 · 所有能力从零开始 · 没有天赋加成</span>
          </div>

          <button
            type="submit"
            className="start-btn"
            disabled={!name.trim()}
          >
            开始打工人生
          </button>
        </form>
      </div>
    </div>
  );
}