const Order = require('../../db/db')

// home
const homepage = (req, res) => {
    if(req.session.user){
        res.render("pages/home", {
            user: req.session.user.email
        })
    } else {
        res.redirect('/login.html')
    }
}


//get all orders
const getOrders = (req, res) => {
    try{
    Order.find({}, (err, result) => {
        res.render("pages/allOrders",{
            result,
            user: req.session.user.email
        }); 
    })
    } catch(e) {
        res.status(500).send(e);;
    }       
}

const createOrder = (req, res) => {
    if(req.session.user) {
    res.render("forms/createOrder", {name:"",
    user: req.session.user.email})
    } else {
        res.redirect('/login.html')
    }
}

const editOrder = (req, res) => {
    res.render("forms/createOrder",{
        name: "tralalala",
        fileNo: "ADDDEErerr d",
        user: req.session.user.email
    })
}

const addOrder = (req, res) => {
    const {name} = req.body;
    const {fileNo} = req.body;
    try{
        const order = new Order({
            id: 4,
            name,
            fileNo,
        })
        order.save();
    } catch(e) {
        console.log("Somethings was wrong!")
    }
    res.redirect("/");
}


//export 
module.exports = {
    getOrders,
    homepage,
    addOrder,
    createOrder,
    editOrder
}