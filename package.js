Package.describe({
  summary: "Meteor smart package for async node.js package"
});

Package.on_use(function (api) {
  api.export('async', 'server');

  api.add_files([
    'async/lib/async.js',
  ], 'client', {bare: true});

  api.add_files([
    'async/lib/async.js',
	'export-async.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['async', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('tests.js', ['client', 'server']);
});
