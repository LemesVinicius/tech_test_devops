const { Sequelize, DataTypes } = require("sequelize");
const database = require("../db");

const Cities = database.define("cities", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  module.exports = Cities;