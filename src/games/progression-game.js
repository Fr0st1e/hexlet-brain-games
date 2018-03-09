import { buildGame, getRandomNum } from '..';

const rules = 'What number is missing in this progression?';

const generateData = () => {
  const progressionLength = getRandomNum(4, 10);
  const progressionStep = getRandomNum(1, 6);
  const getProgression = (lengthProgression, stepProgression) => {
    const startNum = getRandomNum(1, 10);
    const iter = (length, step, acc) => {
      if (acc.length === length) {
        return acc;
      }
      return iter(length, step, [Math.max(...acc) + step, ...acc]);
    };
    return iter(lengthProgression, stepProgression, [startNum]);
  };
  const finalProgression = getProgression(progressionLength, progressionStep);
  const randomIndex = getRandomNum(0, finalProgression.length);
  const hideRandomSimbol = (index, arr) => {
    const plug = '..';
    return arr
      .reduce((acc, item) => (arr.indexOf(item) === index ? [plug, ...acc] : [item, ...acc]), [])
      .join(' ');
  };
  return [hideRandomSimbol(randomIndex, finalProgression), String(finalProgression[randomIndex])];
};

const play = () => buildGame(rules, generateData);

export default play;
