const Order = require('../../db/db')


//get all orders
const getOrders = (req, res) => {
    try{
    Order.find({}, (req, result) => {
        res.send(result); 
    })
    } catch(e) {
        response.status(500).send(e);;
    }       
}



//export 
module.exports = {
    getOrders
}