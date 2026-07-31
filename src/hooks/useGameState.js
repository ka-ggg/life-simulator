import { useState, useCallback } from 'react';
import {
  createInitialCharacter,
  applyAction,
  applyEvent,
  getAvailableEvents,
  getEnding,
  getLifeStage
} from '../data/gameData';

export function useGameState() {
  const [character, setCharacter] = useState(null);
  const [gamePhase, setGamePhase] = useState('creation'); // creation | playing | event | ended
  const [currentEvent, setCurrentEvent] = useState(null);
  const [recentEventIds, setRecentEventIds] = useState([]);
  const [eventTriggered, setEventTriggered] = useState(false);

  const createCharacter = useCallback((name, gender, trait) => {
    const char = createInitialCharacter(name, gender, trait);
    setCharacter(char);
    setGamePhase('playing');
    setRecentEventIds([]);
    setEventTriggered(false);
  }, []);

  const performAction = useCallback((action) => {
    if (!character || !character.isAlive) return;

    const newChar = applyAction(character, action);
    setCharacter(newChar);

    // 检查是否触发随机事件 (30%概率)
    if (newChar.isAlive && !eventTriggered) {
      const roll = Math.random();
      if (roll < 0.35) {
        const available = getAvailableEvents(newChar, recentEventIds);
        if (available.length > 0) {
          const event = available[Math.floor(Math.random() * available.length)];
          setCurrentEvent(event);
          setGamePhase('event');
          setEventTriggered(true);
          return;
        }
      }
    }

    setEventTriggered(false);

    if (!newChar.isAlive) {
      setGamePhase('ended');
    }
  }, [character, eventTriggered, recentEventIds]);

  const handleEventChoice = useCallback((choiceIndex) => {
    if (!currentEvent || !character) return;

    const newChar = applyEvent(character, currentEvent, choiceIndex);
    setCharacter(newChar);
    setRecentEventIds(prev => [...prev, currentEvent.id].slice(-10));
    setCurrentEvent(null);
    setGamePhase('playing');

    if (!newChar.isAlive) {
      setGamePhase('ended');
    }
  }, [currentEvent, character]);

  const handleEventContinue = useCallback(() => {
    if (!currentEvent || !character) return;

    const newChar = applyEvent(character, currentEvent, null);
    setCharacter(newChar);
    setRecentEventIds(prev => [...prev, currentEvent.id].slice(-10));
    setCurrentEvent(null);
    setGamePhase('playing');

    if (!newChar.isAlive) {
      setGamePhase('ended');
    }
  }, [currentEvent, character]);

  const resetGame = useCallback(() => {
    setCharacter(null);
    setGamePhase('creation');
    setCurrentEvent(null);
    setRecentEventIds([]);
    setEventTriggered(false);
  }, []);

  const ending = character && !character.isAlive ? getEnding(character) : null;
  const lifeStage = character ? getLifeStage(character.age) : null;

  return {
    character,
    gamePhase,
    currentEvent,
    ending,
    lifeStage,
    createCharacter,
    performAction,
    handleEventChoice,
    handleEventContinue,
    resetGame
  };
}