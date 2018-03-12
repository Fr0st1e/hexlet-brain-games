import { buildGame, getRandomNum } from '..';

const rules = 'Is this number prime?';

const isPrime = (num) => {
  const divider = 2;
  const iter = (numSymbol, div) => {
    if (numSymbol === 1 || (div * div <= numSymbol && numSymbol % div === 0)) {
      return false;
    }
    if (div > numSymbol / 2) {
      return true;
    }
    return iter(numSymbol, div + 1);
  };
  return iter(num, divider);
};

const generateData = () => {
  const number = getRandomNum(2, 50);
  const question = `${number}`;
  return [question, isPrime(number) ? 'yes' : 'no'];
};

const play = () => buildGame(rules, generateData);

export default play;
