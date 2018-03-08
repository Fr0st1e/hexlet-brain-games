import buildGame from '..';

const rules = 'What is the result of the expression?';


const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateData = () => {
  const addExpression = (num1, num2) => [`${num1} + ${num2}`, String(num1 + num2)];
  const subExpression = (num1, num2) => [`${num1} - ${num2}`, String(num1 - num2)];
  const divExpression = (num1, num2) => [`${num1} * ${num2}`, String(num1 * num2)];
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const funcArray = [addExpression(num1, num2), subExpression(num1, num2), divExpression(num1, num2)];
  return funcArray[getRandomNum(0, 3)];
};

const play = () => buildGame(rules, generateData);


export default play;
