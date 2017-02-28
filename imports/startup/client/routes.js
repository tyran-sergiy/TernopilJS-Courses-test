import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { ActiveRoute } from 'meteor/zimme:active-route';

import '../../ui/partials/sideNav.html';
import '../../ui/partials/Nav.html';

import '../../ui/layouts/HomeLayout.html';
import '../../ui/layouts/MainLayout.html';

import '../../ui/pages/trips/TripsList.js';
import '../../ui/pages/about_me/AboutMe.js';
import '../../ui/pages/sort/Sort.js';

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

FlowRouter.route('/about', {
  name: 'About me',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'AboutMe',
    });
  },
});

FlowRouter.route('/sort', {
  name: 'Sorting page',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'Sort',
    });
  },
});
