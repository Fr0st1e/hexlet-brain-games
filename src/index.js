import readlineSync from 'readline-sync';

const greeting = (hi, answer) => {
  console.log(hi(answer));
  return process.exit();
};

const acquaintance = () => {
  const actual = readlineSync.question('May I have your name? ', { defaultInput: 'NoName:(' });
  const sayHi = name => `Hello, ${name}!`;
  return greeting(sayHi, actual);
};

export default acquaintance;
