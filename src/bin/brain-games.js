#!/usr/bin/env node
import { printWelcome, getToKnow, getName } from '..';

printWelcome();
console.log('\n');

const userName = getName();

getToKnow(userName);

