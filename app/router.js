import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  console.log('INSIDE MAIN ROUTER');
  Ember.Logger.error('LOGGER ERROR');
  this.route('stones');
});

export default Router;
