import readLineSync from 'readline-sync';
import { playGame, getRandomFromHunded } from './index.js';

function isEven(number) {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
}

function playEvenOnce() {
  const numberToCheck = getRandomFromHunded();
  const rightAnswer = isEven(numberToCheck);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${numberToCheck}`);
  const playerAnswer = readLineSync.question('Your answer: ');

  return [playerAnswer, rightAnswer];
}

export default function checkEven() {
  playGame(3, playEvenOnce);
}
