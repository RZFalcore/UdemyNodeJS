const Sequelize = require("sequelize");

const sequelize = new Sequelize("node", "root", "1miT4@y90", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
