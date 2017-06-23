import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | stones parent', function() {
  setupComponentTest('stones-parent', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#stones-parent}}
    //     template content
    //   {{/stones-parent}}
    // `);

    this.render(hbs`{{stones-parent}}`);
    expect(this.$()).to.have.length(1);
  });
});
