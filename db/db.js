const { json } = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/print3d');

const Order = mongoose.model('Order', {
    id: {
        type: Number,
        required: true,
        min: 1
    },
    name: {
        type: String
    }
})



module.exports = Order;


