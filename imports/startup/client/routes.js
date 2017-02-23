import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/partials/sideNav.html';

import '../../ui/layouts/HomeLayout.html';
import '../../ui/layouts/MainLayout.html';

import '../../ui/pages/trips/TripsList.js';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('HomeLayout');
  },
});

FlowRouter.route('/trips', {
  name: 'My trips',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'TripsList',
    });
  },
});
