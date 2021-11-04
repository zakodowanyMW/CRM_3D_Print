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


//get all orders and filter orders
const getAllOrders = async (req, res) => {
    const name = req.query.nameFilter ? req.query.nameFilter : "" ;
    const fileNo = req.query.nrFile ? req.query.nrFile : "";
    const project = (req.query.chooseMachine) ? req.query.chooseMachine : "";
    const chooseStatus = req.query.chooseStatus ? req.query.chooseStatus : "";
    const page = req.query.page ? Number(req.query.page) : 1;
    const perPage = 3;

    try{
    let result = await Order.find({
        name: { $regex: name, $options: 'i'},
        fileNo: { $regex: fileNo, $options: 'i'},
        project: { $regex: project, $options: 'i'},
        chooseStatus: { $regex: chooseStatus, $options: 'i'},
    });
        const pageNo = (Math.floor((result.length - 1) / perPage) + 1) || 1;
        result = result.slice(perPage*(page-1),page*perPage);
        res.render("pages/orders",{
            result,
            pageNo,
            name, fileNo, project, chooseStatus,
            user: req.session.user.email
        }); 
    } catch(e) {
        res.status(500).send(e);;
    } 
    
    //secend way but i cant return pageNo correct
    // try{
    // Order.find({
    //     name: { $regex: name, $options: 'i'},
    //     fileNo: { $regex: fileNo, $options: 'i'},
    //     project: { $regex: project, $options: 'i'},
    //     chooseStatus: { $regex: chooseStatus, $options: 'i'},
    // }, (err, result) => {
    //     const pageNo = result.length;
    //     console.log(result.length);
    //     res.render("pages/orders",{
    //         result,
    //         pageNo,
    //         user: req.session.user.email
    //     }); 
    // }).skip(perPage*(page-1)).limit(perPage);
    // } catch(e) {
    //     res.status(500).send(e);;
    // }       
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