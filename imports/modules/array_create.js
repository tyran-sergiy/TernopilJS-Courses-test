import { getRandArr } from './rand_int_arr_gen.js';
import { getFewUniqueArr } from './few_unique_arr_gen.js';
import { getReversedArr } from './reversed_arr_gen.js';

export const createArr = (arrSize, condition) => {

  switch (condition) {

  case 'Random':
    return getRandArr(arrSize, 0, 1000000);
  break;

  case 'Few Unique':
    return getFewUniqueArr(arrSize);
  break;

  case 'Reversed':
    return getReversedArr(arrSize);
  break;

  default:

}

};
