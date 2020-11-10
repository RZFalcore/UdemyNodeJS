const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const CartItem = sequelize.define("cartItem", {
  id: {
    type: Sequelize.STRING,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  quantity: Sequelize.INTEGER,
});

module.exports = CartItem;
