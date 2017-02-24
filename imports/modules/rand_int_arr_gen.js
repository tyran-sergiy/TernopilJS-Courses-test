import { getRandomInt } from './get_rand_int.js';

export const getRandArr = (arrSize, min, max) =>
Array.from({ length: arrSize }, () => getRandomInt(min, max));
