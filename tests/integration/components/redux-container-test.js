import { expect } from 'chai';
// import { click, fillIn, find, findAll, keyEvent, triggerEvent } from 'ember-native-dom-helpers';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';


describe('Integration | Component | redux container', function() {
  setupComponentTest('redux-container-mock', {
    integration: true
  });


  it('renders', function() {
    this.render(hbs`{{redux-container-mock}}`);
    console.log('LOCUROTE', this.$()['0'].innerHTML)
    expect(this.$()).to.have.length(1);
  });
});
