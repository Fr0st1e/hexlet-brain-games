import { buildGame, getRandomNum } from '..';

const isPrime = (numSymbol) => {
  const iter = (num, divider) => {
    if (divider === 1) {
      return 'yes';
    }
    if (num % divider !== 0) {
      return iter(num, divider - 1);
    }
    return 'no';
  };
  return iter(numSymbol, numSymbol - 1);
};

const generateData = () => {
  const number = getRandomNum(2, 50);
  const question = `Is this number prime? ${number}`;
  return [question, isPrime(number)];
};

const play = () => buildGame('', generateData);

export default play;
