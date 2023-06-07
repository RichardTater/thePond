const { Product } = require("../models/products");

module.exports = {
  getDucks: (req, res) => {
    Product.findAll()
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((theseHands) => {
        console.log(theseHands);
        res.status(400).send();
      });
  },
  addDuckToCart: (req, res) => {
    const { duckObj } = req.body;
    if (req.session.cart) {
      const index = req.session.cart.findIndex(
        (item) => item.id === duckObj.id
      );
      if (index) {
        req.session.cart[index].quantity += 1;
      } else {
        req.session.cart.push(duckObj);
      }
    } else {
      duckObj.quantity = 1;
      req.session.cart = [duckObj];
    }
    res.status(200).send(req.session.cart);
  },
  deleteDuckFromCart: (req, res) => {
    
  },
  getDucksInCart: (req, res) => {},
};
