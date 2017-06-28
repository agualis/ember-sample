import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onOptionClick(index, event) {
      this.clickHandler(index);
    },
  }
});
