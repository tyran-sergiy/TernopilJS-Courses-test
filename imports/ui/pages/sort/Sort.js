import { ReactiveVar } from 'meteor/reactive-var';

import './Sort.html';
import { arrayGenerator } from '/imports/modules/array_generators/ArrayGenerator.js';
import { sortPromise } from '/imports/modules/sort/SortPromiseGen.js';
import { validateSortForm } from '/imports/modules/sort/SortFormValidator.js';
import { dialog } from '/imports/modules/ModalDialog.js';

Template.Sort.onCreated(function sortOnCreated() {
    this.executionTime = new ReactiveVar([]);
    this.sorting = new ReactiveVar(false);
    this.logs = new ReactiveVar([]);
    this.errors = new ReactiveVar([]);
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

  errors() {
    return Template.instance().errors.get();
  },
});

Template.Sort.events({

    'submit .sort'(event, instance) {

      event.preventDefault();

      const target = event.target;

      const arrSize = target.size.value;
      const arrCondition = target.condition.value;

      const sortTypes = target.sortTypes;

      const logs = [];
      const sortPromises = [];

      const errors = validateSortForm(arrSize, sortTypes, arrCondition);
      instance.errors.set(errors);
      if (errors.length) {
        return false;
      }

      const array = arrayGenerator(arrSize, arrCondition);

      Object.keys(sortTypes).map(
        (key) => {

          if (sortTypes[key].checked) {

            let sortType = sortTypes[key].value;

            sortPromises.push(sortPromise(array, sortType, arrCondition, logs, instance));
          }

        }
      );

      const serial = funcs =>
      funcs.reduce((promise, func) =>
      promise.then(result => func().then(Array.prototype.concat.bind(result))), Promise.resolve([]));

      instance.sorting.set(true);
      serial(sortPromises).then((res)=> {
        instance.executionTime.set(res);
        instance.sorting.set(false);

        dialog({ dialogSelector: 'dialog', closeSelector: '.close' }).showModal();

      });

    },
  });
