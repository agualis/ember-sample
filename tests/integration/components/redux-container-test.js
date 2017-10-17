import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | redux container', function() {
  setupComponentTest('redux-container-mock', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{redux-container-mock}}`);
    expect(this.$()).to.have.length(1);
  });

  it('renders', function() {
    this.render(hbs`{{redux-container-mock}}`);
    expect(this.$()).to.have.length(1);
  });
});
