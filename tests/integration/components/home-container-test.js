import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | home container', function() {
  setupComponentTest('home-container', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#home-container}}
    //     template content
    //   {{/home-container}}
    // `);

    this.render(hbs`{{home-container}}`);
    expect(this.$()).to.have.length(1);
  });
});
