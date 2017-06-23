import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeOption(event) {
      console.log('removing option', event.target);
    }
  },
});
