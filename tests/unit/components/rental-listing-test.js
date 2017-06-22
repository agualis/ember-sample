import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rental-listing', 'Unit | Component | rental listing', {
  unit: true
});

test('concats name with computed strings', function(assert) {
  const rentalListing = this.subject();
  rentalListing.set('name', 'WTF');
  assert.equal(rentalListing.get('computedName'), 'I append things to WTF because I\'m a computed property');
});
