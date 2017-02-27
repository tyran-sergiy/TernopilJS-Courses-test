import { ReactiveVar } from 'meteor/reactive-var';

import './Sort.html';
import { arrayGenerator } from '/imports/modules/array_generators/ArrayGenerator.js';
import { sort } from '/imports/modules/sort/sort.js';
import { dialog } from '/imports/modules/ModalDialog.js';

Template.Sort.onCreated(function sortOnCreated() {
    this.executionTime = new ReactiveVar({});
    this.sorting = new ReactiveVar(false);
    this.logs = new ReactiveVar([]);
  });

Template.Sort.helpers({
  sorting() {
    return Template.instance().sorting.get();
  },

  executionTime() {
    return Template.instance().executionTime.get();
  },

  logs() {
    return Template.instance().logs.get();
  },
});

Template.Sort.events({

    'submit .sort'(event, instance) {

      event.preventDefault();

      const target = event.target;

      const arrSize = target.size.value;
      const condition = target.condition.value;

      const sortTypes = target.sortTypes;
      const array = arrayGenerator(arrSize, condition);

      const executionTime = {};
      const logs = [];
      const sortPromises = [];

      Object.keys(sortTypes).map(
        (key) => {

          if (sortTypes[key].checked) {

            let sortType = sortTypes[key].value;

            sortPromises.push(sort(array, sortType, condition, logs, instance));
          }

        }
      );

      const serial = funcs =>
      funcs.reduce((promise, func) =>
      promise.then(result => func().then(Array.prototype.concat.bind(result))), Promise.resolve([]));

      instance.sorting.set(true);
      serial(sortPromises).then((res)=> {

        instance.sorting.set(false);

        dialog('dialog', '.close').showModal();

      });

      /*
    Promise.all(sortPromises).then(times => {
        console.log(times);
        instance.executionTime.set(times);
        instance.sorting.set(false);

      });
    */

    },
  });
