import { Meteor } from 'meteor/meteor';

Meteor.methods({

  'sort.bubbleSort'(array) {

    let start = new Date().getTime();

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          [array[i], array[j]] = [array[j], array[i]]; // Swap vars with crazy es6 feature
        }
      }
    }

    let end = new Date().getTime();
    let time = end - start;

    return time;
  },

  'sort.shellSort'(array) {

    let start = new Date().getTime();

    for (var gap = array.length - 1; gap > 0; gap = parseInt(gap / 2)) {
      for (let i = gap; i < array.length; i++) {
        const tmp = array[i];
        let last = i;
        for (let j = i; j >= gap && tmp < array[j - gap]; j -= gap) {
          array[j] = array[j - gap];
          last -= gap;
        }

        array[last] = tmp;
      }
    }

    let end = new Date().getTime();
    let time = end - start;

    return time;
  },

  'sort.quickSort'(array) {
    if (array.length < 2) {
      return array;
    }

    const base = array[0];
    const lesser = [];
    const greater = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < base) {
        lesser.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }

    return Meteor.call('sort.quickSort', lesser)
    .concat(base, Meteor.call('sort.quickSort', greater));
  },
});
