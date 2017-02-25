import './Sort.html';
import { arrayGenerator } from '../../../modules/array_generators/ArrayGenerator.js';
import { bubbleSort } from '../../../modules/array_sorters/BubbleSort.js';
Template.Sort.events({

    'submit .sort'(event, instance) {

      event.preventDefault();

      const target = event.target;
      const arrSize = target.size.value;
      const condition = target.condition.value;

      const arr = arrayGenerator(arrSize, condition);

      const start = new Date().getTime();
      console.log(bubbleSort(arr));
      const end = new Date().getTime();
      const time = end - start;
      alert('Execution time: ' + time);

    },
  });
