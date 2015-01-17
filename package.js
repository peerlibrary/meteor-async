Package.describe({
  summary: "Async provides straight-forward, powerful functions for working with asynchronous JavaScript",
  version: '0.9.2_1',
  name: 'peerlibrary:async',
  git: 'https://github.com/peerlibrary/meteor-async.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0.2.1');
  api.export('async');

  api.add_files([
    'async/lib/async.js',
    'export-async.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['peerlibrary:async', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('tests.js', ['client', 'server']);
});
