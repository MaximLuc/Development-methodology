import { getRandomNumber } from '../utils.js';
import gameEngine from '../gameEngine.js';

const description = 'Find the least common multiple of given numbers.';

const getLCM = (a, b) => {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  return (a * b) / gcd(a, b);
};

const getLCMForThreeNumbers = (a, b, c) => getLCM(getLCM(a, b), c);

const generateRound = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const number3 = getRandomNumber(1, 20);

  const question = `${number1} ${number2} ${number3}`;
  const correctAnswer = getLCMForThreeNumbers(number1, number2, number3);

  return { question, correctAnswer: String(correctAnswer) };
};

export default () => gameEngine(description, generateRound);
