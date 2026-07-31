export default function EventModal({ event, onChoice, onContinue }) {
  const isChoice = event.type === 'choice';

  return (
    <div className="modal-overlay">
      <div className="event-modal">
        <div className="event-modal-glow" />
        <div className="event-modal-content">
          <div className="event-modal-icon">{event.icon}</div>
          <h2 className="event-modal-title">人生事件</h2>
          <p className="event-modal-description">{event.description}</p>

          <div className="event-modal-effects">
            {isChoice ? (
              <>
                <div className="choice-effects">
                  {event.choices.map((choice, idx) => (
                    <div key={idx} className="choice-effects-group">
                      <span className="choice-label">{choice.label}</span>
                      <div className="choice-effect-tags">
                        {Object.entries(choice.effects).map(([key, val]) => {
                          const signs = { health: '❤️', happiness: '😊', wealth: '💰', career: '💼' };
                          const sign = signs[key] || '';
                          const prefix = val > 0 ? '+' : '';
                          return (
                            <span key={key} className={`effect-tag ${val > 0 ? 'positive' : 'negative'}`}>
                              {sign}{prefix}{key === 'wealth' ? `¥${val}` : val}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="event-effect-tags">
                {Object.entries(event.effects).map(([key, val]) => {
                  const signs = { health: '❤️', happiness: '😊', wealth: '💰', career: '💼' };
                  const sign = signs[key] || '';
                  const prefix = val > 0 ? '+' : '';
                  return (
                    <span key={key} className={`effect-tag ${val > 0 ? 'positive' : 'negative'}`}>
                      {sign}{prefix}{key === 'wealth' ? `¥${val}` : val}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          <div className="event-modal-actions">
            {isChoice ? (
              event.choices.map((choice, idx) => (
                <button
                  key={idx}
                  className={`event-choice-btn ${idx === 0 ? 'primary' : 'secondary'}`}
                  onClick={() => onChoice(idx)}
                >
                  {choice.label}
                </button>
              ))
            ) : (
              <button className="event-choice-btn primary" onClick={onContinue}>
                继续
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}