import readLineSync from 'readline-sync';
import { playGame, getRandomFromHunded } from './index.js';

function isPrime(number) {
  /* eslint max-len: ["error", { "code": 130 }] */
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

  return primeNumbers.includes(number) ? 'yes' : 'no';
}

function playPrimeOnce() {
  const numberToCheck = getRandomFromHunded();
  const rightAnswer = isPrime(numberToCheck);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${numberToCheck}`);
  const playerAnswer = readLineSync.question('Your answer: ');

  return [playerAnswer, String(rightAnswer)];
}

function calcLose(playerName, playerAnswer, rightAnswer) {
  console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
}

export default function checkPrime() {
  playGame(3, playPrimeOnce, calcLose);
}
