import Ember from 'ember';

export default Ember.Component.extend({
  list: [],
  actions: {
    removeOption(optionIndex) {
      // console.log('Deleting option: ', optionIndex);
      let list = this.get("list");
      list.splice(optionIndex, 1);
      this.set("list", list.slice());
    }
  },
});
