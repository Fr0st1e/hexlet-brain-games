import buildGame from '..';

const rules = 'What is the result of the expression? \n';

const addiotionExpression = (num1, num2) => [`${num1} + ${num2}`, String(num1 + num2)];
const subtractionExpression = (num1, num2) => [`${num1} - ${num2}`, String(num1 - num2)];
const divisionExpression = (num1, num2) => [`${num1} * ${num2}`, String(num1 * num2)];
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const setСondition = (acc) => {
  const iter = (expressionsArr, accArr) => {
    if (accArr.length === 3) {
      return accArr;
    }
    const firstNum = getRandomNum(1, 100);
    const secondNum = getRandomNum(1, 100);
    const [expression, ...rest] = expressionsArr;
    return iter(rest, [expression(firstNum, secondNum), ...accArr]);
  };
  return iter([divisionExpression, subtractionExpression, addiotionExpression], acc);
};

const play = () => buildGame(rules, setСondition([]));

export default play;
