module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("cart", {
    userId: {
      type: Sequelize.INT,
    },
    bookId: {
      type: Sequelize.INT,
    },
    quantity: {
      type: Sequelize.INT,
    },
  });
  return Cart;
};
