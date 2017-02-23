import { Trips } from '../../../api/trips/trips.js';

import './Trip.html';
import './TripsList.html';

Template.TripsList.onCreated(function () {

  var self = this;
  self.autorun(function () {
    self.subscribe('trips');
  });

});

Template.TripsList.helpers({

  trips() {
    return Trips.find();
  },

});
