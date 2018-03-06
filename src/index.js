import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ', { defaultInput: 'NoName:(' });
  const sayHi = name => `Hello, ${name}!`;
  return console.log(sayHi(userName));
};

export default greeting;
