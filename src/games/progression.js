import { getRandomNumber } from '../utils.js';
import gameEngine from '../gameEngine.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, ratio, length) => {
  const progression = [];
  let current = start;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    progression.push(current);
    current *= ratio;
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 10);
  const ratio = getRandomNumber(2, 5);
  const progression = generateProgression(start, ratio, progressionLength);

  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => gameEngine(description, generateRound);
