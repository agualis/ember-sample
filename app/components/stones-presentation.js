import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onOptionClick(index, event) {
      console.log(event);
      this.clickHandler(index);
    },
  }
});
