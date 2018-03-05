import readlineSync from 'readline-sync';

export const actual = readlineSync.question('May I have your name? ', { defaultInput: 'NoName:(' });

export const sayHi = name => `Hello, ${name}!`;

const greeting = (hi, answer) => {
  console.log(hi(answer));
  return process.exit();
};

export const acquaintance = greeting(sayHi, actual);
