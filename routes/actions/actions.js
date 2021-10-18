const Order = require('../../db/db')
const User = require('../../db/models/Users');
const bcrypt = require('bcrypt');

const variable ="test variable past to view";

//register new User
const register = (req, res) => {
    const user = new User({
        email: req.body.login,
        password: req.body.pass
    })
    try{
        user.save();
        res.redirect('/login.html');
    }catch(e) {
        console.log("Nie udało się zalogować")
    }
}

// home
const homepage = (req, res) => {
    if(req.session.user){
        res.render("home", {
            variable,
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

const login = (req, res) => {
    User.findOne({email: req.body.login}, (require, user) => {
        console.log(req.body.pass)
        try{
            if(user.email) {
                const isValidPassword = user.comparePassword(req.body.pass);
                console.log(isValidPassword)
                if(isValidPassword) {
                    req.session.user = {
                        _id: user._id,
                        email: user.email
                    };
                    res.redirect('/')
                } else {
                    res.redirect('/login.html')
                }
            } else {
                res.redirect('/login.html')
            }
            
        }catch(e) {
            console.log("Coś poszło nie tak")
            res.redirect('/login.html')
        }        
    })    
}

const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login.html')
}



//export 
module.exports = {
    getOrders,
    homepage,
    addOrder,
    createOrder,
    editOrder,
    register,
    login,
    logout
}