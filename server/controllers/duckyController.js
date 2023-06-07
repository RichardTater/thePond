const {Product} = require("../models/products");

module.exports = {
    getDucks: (req, res) => {
        Product.findAll()
            .then(products => {
                res.status(200).json(products)
            }).catch(theseHands => {
                console.log(theseHands)
                res.status(400).send()
            })
    }
}