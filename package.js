Package.describe({
  summary: "Async provides straight-forward, powerful functions for working with asynchronous JavaScript",
  version: '0.9.0-1',
  name: 'mrt:async',
  git: 'https://github.com/peerlibrary/meteor-async.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:async');
});
