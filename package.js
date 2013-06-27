Package.describe({
  summary: "Meteor smart package for async node.js package"
});

Npm.depends({
  async: "0.2.9"
});

Package.on_use(function (api) {
  api.add_files([
    'async.js'
  ], ['client', 'server']);
});
