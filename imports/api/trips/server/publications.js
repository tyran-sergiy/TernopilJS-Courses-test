import { Meteor } from 'meteor/meteor';

import { Trips } from '../trips.js';

Meteor.publish('trips', function () {
  return Trips.find();
});
