const { Sequelize, DataTypes } = require("sequelize");
const database = require("../db");


const Contries = database.define("countries", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  module.exports = Contries;