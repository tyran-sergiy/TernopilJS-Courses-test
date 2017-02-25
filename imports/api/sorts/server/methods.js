import { Meteor } from 'meteor/meteor';

Meteor.methods({

  'sort.bubbleSort'(array) {

    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] > array[j]) {
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
    }

    return array;
  },

});
