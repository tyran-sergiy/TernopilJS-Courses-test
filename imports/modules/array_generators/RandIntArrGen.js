import { getRandomInt } from './GetRandInt.js';

export const getRandArr = (arrSize, min, max) =>
Array.from({ length: arrSize }, () => getRandomInt(min, max));
