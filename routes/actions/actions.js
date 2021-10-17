const Order = require('../../db/db')
const User = require('../../db/models/Users')

const variable ="test variable past to view";

//register new User
const register = (req, res) => {
    const user = new User({
        email: req.body.login,
        password: req.body.pass
    })
    user.save();
    res.redirect('/login.html');
}

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
        res.render("allOrders",{result}); 
    })
    } catch(e) {
        res.status(500).send(e);;
    }       
}

const createOrder = (req, res) => {
    res.render("forms/createOrder", {name:""})
}

const editOrder = (req, res) => {
    res.render("forms/createOrder",{
        name: "tralalala",
        fileNo: "ADDDEErerr d"
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
    checkLogin,
    createOrder,
    editOrder,
    register
}