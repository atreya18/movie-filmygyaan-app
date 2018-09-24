import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alldatas', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alldatas');
    assert.ok(route);
  });
});
