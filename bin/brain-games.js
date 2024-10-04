import readlineSync from 'readline-sync';
import startLCMGame from '../src/games/lcm.js';
import startProgressionGame from '../src/games/progression.js';

const choice = readlineSync.question('Which game would you like to play? Choose "lcm" or "progression": ');

if (choice === 'lcm') {
  startLCMGame();
} else if (choice === 'progression') {
  startProgressionGame();
} else {
  console.log('Invalid choice! Please choose either "lcm" or "progression".');
}
