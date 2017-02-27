export const validateSortForm = (arrSize, sortTypes, arrCondition) => {
  const errors = [];

  if (arrSize == '') {
    errors.push('Empty Array size field');
  }

  let checked = 0;  //checked checkboxes count
  Object.keys(sortTypes).every(
    (key) => {
      if (!sortTypes[key].value.match(/^(bubbleSort)|(shellSort)|(quikSort)$/)) {
        errors.push('Did You change html? Problems with checkboxes, can`t sort now. Please, report about this problem');
        return false;
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
