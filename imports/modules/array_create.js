import { getRandArr } from './rand_int_arr_gen.js';

export const createArr = (arrSize, condition) => {

  switch (condition) {

  case 'Random':
    return getRandArr(arrSize, 0, 1000000);
  break;

  case 'Few Unique':

  break;

  case 'Reversed':

  break;

  default:

}

};
