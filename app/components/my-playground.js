import Ember from 'ember';

export default Ember.Component.extend({
  name: 'PROPERTY',
  computedName: Ember.computed('name', function() {
    const name = this.get('name');
    return `I append things to ${name} because I'm a computed property`;
  }),
});
