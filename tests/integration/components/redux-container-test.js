import { click, find } from 'ember-native-dom-helpers';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
// const snapshot = require('snap-shot')
import { PageObject } from './page-object';


describe('Integration | Component | redux container', function() {
  setupComponentTest('redux-container-mock', {
    integration: true
  });


  it('renders', async function() {
    this.render(hbs`{{redux-container-mock}}`)
    const page = new PageObject(this)
    console.log('ESTADO INICIAL', page.text())
    const button = await find('button')
    await click(button)
    await click(button)
    console.log('ESTADO FINAL', page.text())
    // snapshot(page.text())
  });
});
