import buildGame from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';

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

const getСondition = (gcd) => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(gcd(firstNum, secondNum));
  return [question, answer];
};

const setСondition = (arrAcc) => {
  const iter = (acc) => {
    if (acc.length === 3) {
      return acc;
    }
    return iter([getСondition(findGCD), ...acc]);
  };
  return iter(arrAcc);
};

const play = () => buildGame(rules, setСondition([]));

export default play;
