import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    clickHandler() {
      this.attrs.clickHandler(...arguments);
    }
  }
});
