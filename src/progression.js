import readLineSync from 'readline-sync';
import { playGame, getRandomFromHunded, getRandomInRange } from './index.js';

function generateMissingProgression() {
  const arr = [];
  const step = getRandomInRange(1, 11);
  let startNumber = getRandomFromHunded();

  for (let i = 0; i < 8; i += 1) {
    arr.push(startNumber + step);
    startNumber += step;
  }

  const missingIndex = getRandomInRange(0, 7);
  const missingElement = arr[missingIndex];
  arr[missingIndex] = '..';

  return [arr, missingElement];
}

function playProgressionOnce() {
  const [progression, rightAnswer] = generateMissingProgression();

  console.log('What number is missing in the progression?');
  console.log(`Question: ${progression}`);
  const playerAnswer = readLineSync.question('Your answer: ');

  return [playerAnswer, String(rightAnswer)];
}

function calcLose(playerName, playerAnswer, rightAnswer) {
  console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
}

export default function checkProgression() {
  playGame(3, playProgressionOnce, calcLose);
}
