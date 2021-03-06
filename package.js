Package.describe({
  summary: "Async provides straight-forward, powerful functions for working with asynchronous JavaScript",
  version: '1.5.2_1',
  name: 'peerlibrary:async',
  git: 'https://github.com/peerlibrary/meteor-async.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0.2.1');
  api.export('async');

  api.add_files([
    'before.js',
    'async/lib/async.js',
    'after.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['peerlibrary:async', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('tests.js', ['client', 'server']);
});
