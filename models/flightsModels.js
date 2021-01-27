const { Sequelize, DataTypes } = require("sequelize");
const database = require("../db");

const Flights = database.define("flights", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  time_in: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time_out: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location_from: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location_to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plane: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pilot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Flights;
