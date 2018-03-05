#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { sayHi, actual, greeting } from '..';

console.log('Welcome to the Brain Games!');

const acquaintance = () => greeting(sayHi, actual);

acquaintance();

