// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/openbook'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
