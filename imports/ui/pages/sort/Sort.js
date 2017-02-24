import './Sort.html';
import { createArr } from '../../../modules/array_create.js';
Template.Sort.events({

    'submit .sort'(event, instance) {

      event.preventDefault();

      const target = event.target;
      const arrSize = target.size.value;
      const condition = target.condition.value;

      console.log(createArr(arrSize, condition));

    },
  });
