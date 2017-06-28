import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    test(event) {
      console.log('testClick', event.target);
    },
  }
});
