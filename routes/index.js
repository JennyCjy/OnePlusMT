const logRoutes = require('./log_routes');
module.exports = function(app, db) {
    logRoutes(app, db);
  // Other route groups could go here, in the future
};