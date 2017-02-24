import './Sort.html';
import { arrayGenerator } from '../../../modules/array_generators/ArrayGenerator.js';
Template.Sort.events({

    'submit .sort'(event, instance) {

      event.preventDefault();

      const target = event.target;
      const arrSize = target.size.value;
      const condition = target.condition.value;

      console.log(arrayGenerator(arrSize, condition));

    },
  });
