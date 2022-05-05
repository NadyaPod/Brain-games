import readLineSync from 'readline-sync';
import { playGame, getRandomFromHunded } from './index.js';

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomOperation() {
  const number = getRandomInRange(1, 4);
  let result = '';

  switch (number) {
    case 1:
      result = '+';
      break;
    case 2:
      result = '-';
      break;
    case 3:
      result = '*';
      break;
    default:
      console.log('Нет операций!');
  }
  return result;
}

function calculateTheExpession(firstNumber, secondNumber, operator) {
  if (operator === '+') {
    return firstNumber + secondNumber;
  } if (operator === '-') {
    return firstNumber - secondNumber;
  } if (operator === '*') {
    return firstNumber * secondNumber;
  }
  return 'No operator';
}

function playCalcOnce() {
  const firstNumber = getRandomFromHunded();
  const secondNumber = getRandomFromHunded();
  const operator = getRandomOperation();

  const questionExpression = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = String(calculateTheExpession(firstNumber, secondNumber, operator));

  console.log('What is the result of the expression?');
  console.log(`Question: ${questionExpression}`);
  const playerAnswer = readLineSync.question('Your answer: ');

  if (playerAnswer === rightAnswer) {
    return true;
  }
  return console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
}

export default function checkSum() {
  playGame(3, playCalcOnce);
}
