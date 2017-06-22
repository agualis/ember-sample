import { describe, it, expect } from 'mocha';
import { setupTest } from 'ember-mocha';


describe('rental-listing | Unit | Component | rental listing', function() {
  setupTest('component:rental-listing', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  it('concats name with computed strings', function() {
    var controller = this.subject();
    expect(controller).to.be.ok;
    // const rentalListing = this.subject();
    // rentalListing.set('name', 'WTF');
    // expect(rentalListing.get('computedName')).eql('I append things to WTF because I\'m a computed property');
  });
});

