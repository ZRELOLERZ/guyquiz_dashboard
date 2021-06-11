module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'guyquiz',
      user: 'admin',
      password: 'password2021'
    },
    migrations: {
      directory: './database/migrations/'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
