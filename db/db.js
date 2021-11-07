const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/print3d');

const orderSchema = new Schema( {
    name: {
        type: String,
        default: "Brak nazwy detalu",
        required: true,
    },
    fileNo: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
        min: 1
    },
    color: {
        type: String,
        required: true,
    },
    project: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Nowo dodane",
    }

})

const Order = mongoose.model('Order', orderSchema)


module.exports = Order;


