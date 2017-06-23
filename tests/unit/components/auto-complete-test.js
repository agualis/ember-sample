import { describe, it } from 'mocha';
import { expect } from 'chai';
import { setupTest } from 'ember-mocha';

describe('auto-complete | Unit | Component | auto complete', function() {
  setupTest('component:auto-complete', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  it('concats name with computed strings', function() {
    const autocomplete = this.subject();
    autocomplete.set('name', 'WTF');
    expect(autocomplete.get('computedName')).to.equal('I append things to WTF because I\'m a computed property');
  });
});

