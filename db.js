const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_tech', 'root', 'teste123', {dialect: 'mysql', host: 'localhost'});
 
module.exports = sequelize;
