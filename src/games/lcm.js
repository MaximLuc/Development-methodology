import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

const findLCM = (a, b) => {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  return Math.abs(a * b) / gcd(a, b);
};

export const playLCMGame = () => {
  console.log('Welcome to the Least Common Multiple (LCM) game!');

  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const num3 = getRandomNumber(1, 100);

  console.log(`Find the LCM of the numbers: ${num1}, ${num2}, and ${num3}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = findLCM(findLCM(num1, num2), num3);

  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`Wrong. The correct answer was ${correctAnswer}.`);
  }
};
