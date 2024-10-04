export const getRandomNumber = (min = 1, max = 100) =>
  // eslint-disable-next-line no-unused-expressions, implicit-arrow-linebreak
  Math.floor(Math.random() * (max - min + 1)) + min;
