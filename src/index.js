import readLineSync from 'readline-sync';

export function hello() {
  console.log('Welcome to the Brain Games!');
  const playerName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
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
  console.log(`Let's try again, ${playerName}!`);
}

// eslint-disable-next-line no-unused-vars
export function playGame(rounds, game, lose = defaultLose) {
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
