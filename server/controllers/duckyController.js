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
    const duckObj = req.body;
    console.log(duckObj);
    if (req.session.cart) {
      const index = req.session.cart.findIndex(
        (item) => item.id === duckObj.id
      );
      if (index >= 0) {
        console.log(req.session.cart, index, req.session.cart[index]);
        req.session.cart[index].quantity += 1;
      } else {
        duckObj.quantity = 1;
        req.session.cart.push(duckObj);
      }
    } else {
      duckObj.quantity = 1;
      req.session.cart = [duckObj];
    }
    console.log(req.session.cart);
    res.status(200).send(req.session.cart);
  },
  deleteDuckFromCart: (req, res) => {
    const { duckId } = req.params;
    if (req.session.cart) {
      const index = req.session.cart.findIndex((item) => +item.id === +duckId);
      req.session.cart.splice(index, 1);
      console.log(req.session.cart);
    }
  },
  editQuantity: (req, res) => {
    const { duckId, action } = req.body;
    const index = req.session.cart.findIndex((item) => +item.id === +duckId);
    if (action === "+") {
      req.session.cart[index].quantity += 1;
      console.log("hit if", req.session.cart)
    } else if (action === "-" && req.session.cart[index].quantity === 1) {
      req.session.cart.splice(index, 1);
    } else {
      req.session.cart[index].quantity -= 1;
    }
    res.sendStatus(200)
  },
  getDucksInCart: (req, res) => {
    if (req.session.cart) {
      res.status(200).send(req.session.cart);
    } else {
      res.status(400).send("No Cart Found.");
    }
  },
};
