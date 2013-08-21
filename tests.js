Tinytest.addAsync('meteor-async', function (test, onComplete) {
  var isDefined = false;
  try {
    async;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "async is not defined");
  test.isTrue(Package.async.async, "Package.async.async is not defined");

  async.each(['a'], function (item, cb) {
    test.equal(item, 'a', "Iterated item not equal");
    cb();
  }, function (err) {
    test.isFalse(err, "Error iterating: " + err);
    onComplete();
  });
});
