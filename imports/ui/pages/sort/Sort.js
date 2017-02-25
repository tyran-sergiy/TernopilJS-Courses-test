import { ReactiveVar } from 'meteor/reactive-var';

import './Sort.html';
import { arrayGenerator } from '../../../modules/array_generators/ArrayGenerator.js';

Template.Sort.onCreated(function sortOnCreated() {
    this.executionTime = new ReactiveVar({});
    this.sorting = new ReactiveVar(false);
  });

Template.Sort.helpers({
  sorting() {
    return Template.instance().sorting.get();
  },

  executionTime() {
    return Template.instance().executionTime.get();
  },
});

Template.Sort.events({

    'submit .sort'(event, instance) {

            instance.sorting.set(true);

      console.log(instance.sorting.get());
      event.preventDefault();

      const target = event.target;

      const arrSize = target.size.value;
      const condition = target.condition.value;

      const bubbleType = target.bubbleSort.checked;
      const shellType = target.shellSort.checked;
      const array = arrayGenerator(arrSize, condition);

      const executionTime = {};

      console.log(instance.sorting.get());

      if (bubbleType) {

        let start = new Date().getTime();
        Meteor.call('sort.bubbleSort', array,
          (err, res) => {
            console.log(res);
            instance.sorting.set(false);
          }
      );
        let end = new Date().getTime();
        let time = end - start;

        executionTime.bubbleSort = time;
      };


      console.log(instance.sorting.get());

      instance.executionTime.set(executionTime);

      //  alert('Execution time: ' + time);

    },
  });
