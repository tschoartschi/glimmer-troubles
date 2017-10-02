import ifX from './helper';

const { module, test } = QUnit;

module('Helper: if-x', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(ifX([]), undefined);
  });
});
