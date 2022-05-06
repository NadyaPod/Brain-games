import readLineSync from 'readline-sync';

export default function hello() {
  console.log('Welcome to the Brain Games!');
  const playerName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
}
