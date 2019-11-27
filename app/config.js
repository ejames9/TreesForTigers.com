/*
config.js

Configuration code for treesForTigers.com
web app..
*/

var
path = require('path'),
env  = process.env.NODE_ENV || 'development',
port = process.env.PORT || 8090;



//Configuration object..
module.exports = {
            root: __dirname,
             app: {
               name: 'treesForTigers.com'
             },
            port: port,
              db: 'mongodb://localhost/' + env,
      cookiePass: 'trunk joined gun bean'
               };
