const User = require('./../models/user.js'  );

module.exports.renderSignup = (req,res)=>{
    res.render('users/signup.ejs');
};

module.exports.signup = async (req,res)=>{
    try{  
        let {username,email,password} = req.body;
        const newUser = new User({email,username});
        const registeredUser = await User.register(newUser,password); 
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to WanderLust!!");
            res.redirect("/listings"); 
        });
    } catch(err){
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

module.exports.login = (req,res)=>{
    try{
        req.flash("success", "Welcome Back to WanderLust!!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        console.log(redirectUrl);
        res.redirect(redirectUrl);
    }catch(err){
        req.flash("error", err.message);
        res.redirect("/login");
    }
};

module.exports.logout = (req,res,next) =>{
    req.logOut((err)=>{
        if(err) {
            return next(err);
        }
        req.flash("success","successfully logged out!!");
        res.redirect("/listings");
    });
};