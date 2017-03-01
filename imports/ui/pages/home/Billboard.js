import './Billboard.html';
import { Quotes } from '/imports/api/quotes/quotes.js';

Template.Billboard.onCreated(function () {

  var self = this;
  self.autorun(function () {
    self.subscribe('quotes');
  });

});

Template.Billboard.helpers({
  randQuote() {
    return Quotes.findOne({}, { skip: Math.random() * Quotes.find().count() });
  },

});
