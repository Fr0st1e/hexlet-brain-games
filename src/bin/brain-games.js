#!/usr/bin/env node
import { actual, sayHi, greeting } from '..';

const acquaintance = () => {
  console.log('Welcome to the Brain Games!');
  return greeting(sayHi, actual);
};

acquaintance();

