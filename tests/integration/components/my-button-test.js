import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | my button', function() {
  setupComponentTest('my-button', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#my-button}}
    //     template content
    //   {{/my-button}}
    // `);

    this.render(hbs`{{my-button}}`);
    expect(this.$()).to.have.length(1);
  });
});
