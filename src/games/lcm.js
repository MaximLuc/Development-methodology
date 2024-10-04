import { getRandomNumber } from '../utils.js';
import gameEngine from '../gameEngine.js';

const description = 'Find the least common multiple of given numbers.';

const getLCM = (a, b) => {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  return (a * b) / gcd(a, b);
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);

  const question = `${number1} ${number2}`;
  const correctAnswer = getLCM(number1, number2);

  return { question, correctAnswer };
};

export default () => gameEngine(description, generateRound);
