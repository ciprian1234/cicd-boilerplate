const CONFIG = {};

// Declare here common configuration, both development and production
CONFIG.PORT = 4000;

if (process.env.NODE_ENV === 'production') {
  // production specific config options
} else {
  // development specific config options
}

module.exports = CONFIG;
