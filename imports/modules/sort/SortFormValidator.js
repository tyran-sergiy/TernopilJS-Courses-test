export const validateSortForm = (arrSize, sortTypes, arrCondition) => {
  const errors = [];

  if (arrSize == '') {
    errors.push('Please, enter array size');
  }

  if (arrSize > 60000) {
    errors.push('Array size limit is 60000');
  }

  let checked = 0;  //checked checkboxes count
  Object.keys(sortTypes).forEach(
    (key) => {

      if (!sortTypes[key].value.match(/^(bubbleSort)|(shellSort)|(insertionSort)$/)) {
        errors.push('Did You change html? Problems with checkboxes, can`t sort now. Please, report about this problem');
      }

      if (sortTypes[key].checked) {

        checked++;
      }

    });

  if (checked == 0) {
    errors.push('Choose at least one sort type');
  }

  if (!arrCondition.match(/^(Random)|(Reverse)|(Few Unique)$/)) {
    errors.push('Did You change html? Problems with radio buttons, can`t sort now. Please, report about this problem');
  }

  return errors;
};
