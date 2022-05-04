import readLineSync from 'readline-sync';

export default function hello() {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}