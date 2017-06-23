import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    clickHandler2() {
      console.log('YOYO');
      this.clickHandler(...arguments);
    }
  }
});
