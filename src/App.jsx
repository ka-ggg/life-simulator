import { useGameState } from './hooks/useGameState';
import CharacterCreation from './components/CharacterCreation';
import CharacterPanel from './components/CharacterPanel';
import StatsPanel from './components/StatsPanel';
import ActionPanel from './components/ActionPanel';
import EventLog from './components/EventLog';
import EventModal from './components/EventModal';
import LifeSummary from './components/LifeSummary';
import JobPanel from './components/JobPanel';
import JobMarket from './components/JobMarket';
import './App.css';

export default function App() {
  const {
    character,
    gamePhase,
    setGamePhase,
    currentEvent,
    ending,
    lifeStage,
    jobMessages,
    lastFlavor,
    createCharacter,
    performAction,
    doBasicJob,
    handleEventChoice,
    handleEventContinue,
    resetGame,
    applyForJob,
    handlePromote,
    handleStartResignation,
    formatAge,
  } = useGameState();

  return (
    <div className="app">
      <div className="app-bg" />

      {gamePhase === 'creation' && (
        <CharacterCreation onCreate={createCharacter} />
      )}

      {(gamePhase === 'playing' || gamePhase === 'event') && character && (
        <div className="game-container">
          <header className="game-header">
            <div className="header-brand">
              <span className="header-logo">◈</span>
              <span className="header-title">模拟人生</span>
            </div>
            <div className="header-stats">
              <span className="header-age">{formatAge(character.ageMonths)}</span>
              <span className="header-stage" style={{ color: lifeStage?.color }}>
                {lifeStage?.name}
              </span>
            </div>
          </header>

          <main className="game-main">
            <div className="game-left">
              <CharacterPanel character={character} lifeStage={lifeStage} formatAge={formatAge} />
              <JobPanel
                character={character}
                onOpenMarket={() => setGamePhase('jobMarket')}
                onPromote={handlePromote}
                onStartResignation={handleStartResignation}
                jobMessages={jobMessages}
              />
            </div>
            <div className="game-center">
              <StatsPanel character={character} />
              {lastFlavor && (
                <div className="flavor-bar">
                  <span className="flavor-icon">📝</span>
                  <span className="flavor-text">{lastFlavor}</span>
                </div>
              )}
              <EventLog events={character.events} formatAge={formatAge} />
            </div>
            <div className="game-right">
              <ActionPanel
                character={character}
                onAction={performAction}
                onBasicJob={doBasicJob}
                disabled={gamePhase === 'event'}
              />
            </div>
          </main>
        </div>
      )}

      {gamePhase === 'jobMarket' && character && (
        <JobMarket
          character={character}
          onApply={applyForJob}
          onClose={() => setGamePhase('playing')}
        />
      )}

      {gamePhase === 'event' && currentEvent && (
        <EventModal
          event={currentEvent}
          onChoice={handleEventChoice}
          onContinue={handleEventContinue}
        />
      )}

      {gamePhase === 'ended' && character && ending && (
        <LifeSummary
          character={character}
          ending={ending}
          onRestart={resetGame}
          formatAge={formatAge}
        />
      )}
    </div>
  );
}