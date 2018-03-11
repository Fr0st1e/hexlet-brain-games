import { buildGame, getRandomNum } from '..';

const rules = 'Is this number prime?';

const isPrime2 = (numSymbol, div) => {
  if (numSymbol === 1 || (div * div <= numSymbol && numSymbol % div === 0)) {
    return false;
  }
  if (div > numSymbol / 2) {
    return true;
  }
  return isPrime2(numSymbol, div + 1);
};

const generateData = () => {
  const number = getRandomNum(2, 50);
  const question = `${number}`;
  return [question, isPrime2(number, 2) ? 'yes' : 'no'];
};

const play = () => buildGame(rules, generateData);

export default play;
