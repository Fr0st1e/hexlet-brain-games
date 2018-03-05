#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { sayHi, actual, acquaintance } from '..';

const greetings = () => 'Welcome to the Brain Games!';

greetings();

console.log(acquaintance);

