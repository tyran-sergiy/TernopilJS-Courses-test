import { Meteor } from 'meteor/meteor';

import { Trips } from '../trips.js';

Meteor.publish('trips', function () {
  Meteor._sleepForMs(2000);
  return Trips.find();
});
