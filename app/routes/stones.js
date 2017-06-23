import fetch from 'fetch';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(function(response) {
      console.log('PASOTE DE PRUEBA', response);
      return response.json();
    });
  },
  actions: {
    sayHi() {
      console.log('Hi1!');
    }
  },
  sayHi2() {
    console.log('Hi2!');
  },
  removeOption() {
    console.log('removing option');
  }
});
