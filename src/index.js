import readlineSync from 'readline-sync';

const printWelcome = rules => console.log(`Welcome to the Brain Games! \n${rules}`);
const sayHi = name => console.log(`Hello, ${name}! \n`);

const buildGame = (rules = '\n', gamesArr) => {
  const getName = () => readlineSync.question('May I have your name? ', { defaultInput: 'NoName:(' });
  printWelcome(rules);
  const userName = getName();
  sayHi(userName);
  if (gamesArr.length === 0) {
    return console.log();
  }
  const iter = (arr) => {
    if (arr.length === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const currentGame = arr[0];
    console.log(`Question: ${currentGame[0]}`);
    const answer = readlineSync.question('Your answer: ', { defaultInput: '' });
    if (answer === currentGame[1]) {
      console.log('Correct!');
      return iter(arr.slice(1));
    }
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${currentGame[1]}'`);
  };
  return iter(gamesArr);
};

export default buildGame;
