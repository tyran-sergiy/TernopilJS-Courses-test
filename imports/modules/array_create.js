import { getRandomInt } from './get_rand_int.js';

export const createArr = (arrSize, condition) => {

  switch (condition) {

  case 'Random':
    let min = 0;
    let max = 10000000;

    return Array.from({ length: arrSize }, () => getRandomInt(min, max));
  break;

  case 'Few Unique':

  break;

  case 'Reversed':

  break;

  default:

}

};
