#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { sayHi, actual, greeting } from '..';

const acquaintance = () => {
  console.log('Welcome to the Brain Games!');
  return greeting(sayHi, actual);
};

acquaintance();

