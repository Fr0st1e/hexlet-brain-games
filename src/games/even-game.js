import buildGame from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const setСondition = () => {
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const num = getRandomNum(1, 100);
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return [num, rightAnswer];
};

const play = () => buildGame(rules, setСondition);

export default play;
