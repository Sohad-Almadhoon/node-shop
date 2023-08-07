const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-course", "root", "goodgirl12345", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;