#!/usr/bin/env node
import readlineSync from 'readline-sync';

const actual = readlineSync.question('May I have your name? ', { defaultInput: 'NoName:(' });

const sayHi = name => `Hello, ${name}!`;

const greeting = (hi, answer) => {
  console.log(hi(answer));
  return process.exit();
};

const acquaintance = () => {
  console.log('Welcome to the Brain Games!');
  return greeting(sayHi, actual);
};

acquaintance();

