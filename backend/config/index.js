require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME
}

config.mongodb = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`,
module.exports = { config }