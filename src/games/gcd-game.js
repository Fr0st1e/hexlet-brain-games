import buildGame from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const findGCD = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    return findGCD(num2, num1 - num2);
  }
  return findGCD(num1, num2 - num1);
};

const generateData = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(findGCD(firstNum, secondNum));
  return [question, answer];
};

const play = () => buildGame(rules, generateData);

export default play;
