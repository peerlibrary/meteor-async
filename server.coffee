async = {}

do -> # To not pollute the namespace
  require = __meteor_bootstrap__.require

  async = require 'async'
