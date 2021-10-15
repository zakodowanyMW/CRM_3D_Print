const Order = require('../../db/db')

const variable ="test variable past to view";

// home
const homepage = (req, res) => {
    if(req.get){
        res.render("home", {
            variable
        })
    } else {
        res.redirect('/login.html')
    }
}


//get all orders
const getOrders = (req, res) => {
    try{
    Order.find({}, (err, result) => {
        res.send(result); 
    })
    } catch(e) {
        res.status(500).send(e);;
    }       
}

const addOrder = (req, res) => {
    try{
        const order = new Order({
            id: 3,
            name: "Nowy przedmiot do druku",
            fileNo: "A-1256-002"
        })
        order.save();
    } catch(e) {
        console.log("Somethings was wrong!")
    }
    res.sendStatus(200);
}

const checkLogin = (req, res) => {
    const param = req.body.login;
    console.log(param)
    res.redirect('/')
    
}



//export 
module.exports = {
    getOrders,
    homepage,
    addOrder,
    checkLogin
}