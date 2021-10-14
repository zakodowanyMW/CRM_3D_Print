const Order = require('../../db/db')

const showOrder = (req, res) => {
    const orders = Order.find({}, (req, result) => {
        res.send(result);
    });
}

module.exports = {
    showOrder: showOrder
}