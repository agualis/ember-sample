import Ember from 'ember';

export default Ember.Component.extend({
  list: [],
  listNum: 5,
  actions: {
    test(event) {
      console.log('testClick', event.target);
    },
    removeOption(optionIndex) {
      let list = this.get('list');
      console.log('removing option', list);
      delete list[optionIndex];
      list.splice(optionIndex, 1);
      this.incrementProperty('listNum');
      console.log('removed option', list);
    }
  },
});
