import { describe, it } from 'mocha';
import { expect } from 'chai';
import { setupTest } from 'ember-mocha';

describe('stones-container | Unit | Component | stones container', function() {
  setupTest('component:stones-container', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  it('removes element from list', function() {
    const container = this.subject();
    container.set('list', ['1', '2']);
    container.send('removeOption', 0);

    expect(container.get('list')).to.eql(['2']);
  });
});

