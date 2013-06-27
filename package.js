Package.describe({
  summary: "Meteor smart package for async node.js package"
});

Package.on_use(function (api) {
  api.add_files([
    'async/lib/async.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['async', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('tests.js', ['client', 'server']);
});
