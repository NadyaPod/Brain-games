import hello from './cli.js';

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomFromHunded() {
  const number = Math.floor(Math.random() * 100);
  return number;
}

export function win(playerName) {
  console.log(`Congratulations, ${playerName}!`);
}

// eslint-disable-next-line no-unused-vars
export function defaultLose(playerName, playerAnswer, rightAnswer) {
  console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
  console.log(`Let's try again, ${playerName}!`);
}

// eslint-disable-next-line no-unused-vars
export function playGame(rounds, game, lose) {
  const playerName = hello();

  for (let i = 0; i < rounds; i += 1) {
    const [playerAnswer, rightAnswer] = game();

    if (playerAnswer !== rightAnswer) {
      lose(playerName, playerAnswer, rightAnswer);
      return;
    }
    console.log('Correct!');
  }
  win(playerName);
}
