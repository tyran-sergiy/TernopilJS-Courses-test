import { getRandArr } from './RandIntArrGen.js';
import { getFewUniqueArr } from './FewUniqueArrGen.js';
import { getReversedArr } from './ReversedArrGen.js';

export const arrayGenerator = (arrSize, condition) => {

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
