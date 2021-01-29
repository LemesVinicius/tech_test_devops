const { Sequelize, DataTypes } = require("sequelize");
const database = require("../db");

const Planes = database.define("planes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Planes;
