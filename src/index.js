import readlineSync from 'readline-sync';

export const printWelcome = () => console.log('Welcome to the Brain Games!');

export const showRules = () => console.log('Answer "yes" if number even otherwise answer "no".\n');

export const getName = () => readlineSync.question('May I have your name? ', { defaultInput: 'NoName:(' });

export const getToKnow = (userName) => {
  const sayHi = name => `Hello, ${name}! \n`;
  return console.log(sayHi(userName));
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const isEvenGame = (userName) => {
  const stages = 3;
  const iter = (acc) => {
    if (acc === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const num = getRandomInt(1, 100);
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ', { defaultInput: '' });
    if (answer === rightAnswer) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
  };
  return iter(stages);
};
