const Order = require('../../db/db')

// home
const homepage = async (req, res) => {
    if(req.session.user){
        res.render("pages/home", {
            user: req.session.user.email
        })
    } else {
        res.redirect('/login.html')
    }
}


//get all orders and page Orders
const getAllOrders = async (req, res) => {
    try{
    Order.find({}, (err, result) => {
        res.render("pages/orders",{
            result,
            user: req.session.user.email
        }); 
    })
    } catch(e) {
        res.status(500).send(e);;
    }       
}

//get one note
const oneOrder = async (req, res) => {
    Order.findOne({name: req.params.id}, (err, response) => {
        res.json(response);
    })
}


// add new order
const addOrder = async (req, res) => {
    const {name, fileNo, material, count, color, project, model } = req.body;
    try{
        const order = new Order({ name,fileNo,material, count, color, project, model })
        order.save();
    } catch(e) {
        console.log("Somethings was wrong!");
        res.redirect("/");
    }
    res.redirect("/showOrders");
}


// edit one order
const updateOrder = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    Order.findOneAndUpdate({name: id}, data, {upsert: true}, (err) => {
        if(err) {
            console.log("Coś poszło nie tak ", err );
            return;
        }
        res.sendStatus(200);
    })
          
}


// delete one order
const deletOrder = async (req, res) => {
    
}

//export 
module.exports = {
    getAllOrders,
    homepage,
    addOrder,
    oneOrder,
    updateOrder,
    deletOrder
}