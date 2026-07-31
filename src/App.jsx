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
    createCharacter,
    performAction,
    handleEventChoice,
    handleEventContinue,
    resetGame,
    applyForJob,
    handlePromote,
    handleStartResignation,
    canPromote,
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
              <span className="header-age">{character.age}岁</span>
              <span className="header-stage" style={{ color: lifeStage?.color }}>
                {lifeStage?.name}
              </span>
            </div>
          </header>

          <main className="game-main">
            <div className="game-left">
              <CharacterPanel character={character} lifeStage={lifeStage} />
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
              <EventLog events={character.events} />
            </div>
            <div className="game-right">
              <ActionPanel
                onAction={performAction}
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
        />
      )}
    </div>
  );
}