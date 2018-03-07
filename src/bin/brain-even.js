#!/usr/bin/env node
import { printWelcome, showRules, getToKnow, getName, isEvenGame } from '..';

printWelcome();
showRules();

const userName = getName();

getToKnow(userName);

isEvenGame(userName);
