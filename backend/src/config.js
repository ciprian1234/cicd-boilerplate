const CONFIG = {};

// Declare here common configuration, both development and production
CONFIG.PORT = 4000;

if (process.env.NODE_ENV === 'production') {
  // production specific config options
  CONFIG.DB_CONNECTION_URI = 'mongodb://root:my_password@mongo:27017/MyDatabase?retryWrites=true&w=majority&authSource=admin';
} else {
  // development specific config options
  CONFIG.DB_CONNECTION_URI = 'mongodb://root:my_password@127.0.0.1:27017/MyDatabase?retryWrites=true&w=majority&authSource=admin';
}

module.exports = CONFIG;
