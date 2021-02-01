require('dotenv').config();

const {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
} = process.env;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER , DATABASE_PASSWORD , {
  dialect: "mysql",
  host: DATABASE_HOST,
});

module.exports = sequelize;
