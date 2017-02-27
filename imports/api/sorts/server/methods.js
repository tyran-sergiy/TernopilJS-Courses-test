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

  

});
