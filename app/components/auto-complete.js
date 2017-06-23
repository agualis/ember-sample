import Ember from 'ember';

export default Ember.Component.extend({
  name: 'HELLO',
  list: [],
  computedName: Ember.computed('name', function() {
    const name = this.get('name');
    return `I append things to ${name} because I'm a computed property`;
  }),
  actions: {
    clickHandler1() {
      console.log('OH YEAH');
    },
    onOptionClick(event) {
      console.log('OH YEAH2', );
      this.clickHandler(event.target.id);
    },
  }
});
