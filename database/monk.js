const monk = require('monk');

const db = monk(process.env.MONGODB_URI || 'localhost/openbook');

module.exports = db;
