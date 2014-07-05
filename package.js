Package.describe({
  summary: "Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript"
});

Package.on_use(function (api) {
  api.export('async');

  api.add_files([
    'async/lib/async.js',
    'export-async.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['async', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('tests.js', ['client', 'server']);
});
