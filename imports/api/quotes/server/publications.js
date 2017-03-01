import { Meteor } from 'meteor/meteor';

import { Quotes } from '../quotes.js';

Meteor.publish('quotes', function () {
  return Quotes.find();
});
