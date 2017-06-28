import fetch from 'fetch';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(function(response) {
      Ember.Logger.info('FETCHING DATA', response);
      return response.json();
    });
  }
});
