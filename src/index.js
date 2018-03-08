import readlineSync from 'readline-sync';

const printWelcome = () => console.log('Welcome to the Brain Games!');
const printRules = (rules = '') => (rules === '' ? null : console.log(rules));
const sayHi = name => console.log(`Hello, ${name}! \n`);

const buildGame = (rules, gameFunc = []) => {
  const getName = () => readlineSync.question('May I have your name? ', { defaultInput: 'NoName:(' });
  printWelcome();
  printRules(rules);
  console.log('');
  const userName = getName();
  sayHi(userName);
  if (gameFunc instanceof Array) {
    return console.log();
  }
  const iter = (func, acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const currentGame = func();
    console.log(`Question: ${currentGame[0]}`);
    const answer = readlineSync.question('Your answer: ', { defaultInput: '' });
    if (answer === currentGame[1]) {
      console.log('Correct!');
      return iter(func, acc + 1);
    }
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${currentGame[1]}'`);
  };
  return iter(gameFunc, 0);
};

export default buildGame;
