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

export function lose(playerName) {
  console.log(`Let's try again, ${playerName}!`);
}

export function playGame(rounds, game) {
  const playerName = hello();

  for (let i = 0; i < rounds; i += 1) {
    if (game()) {
      console.log('Correct!');
    } else {
      return lose(playerName);
    }
  }
  return win(playerName);
}
