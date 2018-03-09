import { buildGame, getRandomNum } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const generateData = () => {
  const num = getRandomNum(1, 100);
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return [num, rightAnswer];
};

const play = () => buildGame(rules, generateData);

export default play;
