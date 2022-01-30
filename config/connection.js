const Sequelize = require("sequelize");

require("dotenv").config();

//create a connection to the db
// using the JAWSDB_URL Heroku extension we can deploy this site to HEROKU
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;