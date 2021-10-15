const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/print3d');

const orderSchema = new Schema( {
    id: {
        type: Number,
        required: true,
        min: 1
    },
    name: {
        type: String,
        default: "Brak nazwy detalu"
    },
    fileNo: {
        type: String
    }
})

const Order = mongoose.model('Order', orderSchema)


module.exports = Order;


