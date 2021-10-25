const User = require('../../db/models/Users');


class UserActions {

    //register new User
    register = (req, res) => {
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
    // end register new user


    //login
    login = (req, res) => {
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
    // end login


    //logout
    logout = (req, res) => {
        req.session.destroy();
        res.redirect('/login.html')
    }
    // end logout

}


module.exports = new UserActions();