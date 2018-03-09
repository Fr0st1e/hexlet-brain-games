import { buildGame, getRandomNum } from '..';

const rules = 'Balance the given number.';

const generateData = () => {
  const getBalanceNumber = (arr) => {
    const bigNum = Math.max(...arr);
    const lowNum = Math.min(...arr);
    const sortedArr = arr.sort().slice(1, arr.length - 1);
    if ((bigNum - lowNum) <= 1) {
      return arr.sort();
    }
    return getBalanceNumber([bigNum - 1, lowNum + 1, ...sortedArr]);
  };
  const generateResult = (funcBalance, funcRandom) => {
    const question = String(funcRandom(100, 10000));
    const answer = funcBalance(question.split('')).join('');
    return [question, answer];
  };
  return generateResult(getBalanceNumber, getRandomNum);
};


const play = () => buildGame(rules, generateData);

export default play;
