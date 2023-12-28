if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
console.log(process.env.CLOUD_NAME);
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const expenseError = require('./utils/ExpenseError.js');
const listingRouter = require('./routes/listing.js');
const reviewRouter = require('./routes/review.js');
const userRouter = require('./routes/user.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');

const dbUrl=process.env.MONGO_ATLAS_URL;
//create database
main().then(() => {
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET
      },
      touchAfter: 24 *3600,
});

store.on("error",()=>{
    console.log("ERROR IN MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now()+ 7*24*60*1000,
        maxAge: 7*24*60*1000,
        httpOnly: true
    }
};

app.set("view engine","ejs");
app.set("views", path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);
//to parse data coming in req
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//use local strategy for authenticating user using authenticate static method
passport.use(new LocalStrategy(User.authenticate()));
//serialise and deserialize user info in session object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/",(req,res)=>{
    res.redirect("/listings");
});

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.get("/demouser", async(req,res)=>{
    const fakeUser = new User({
       email: "email1",
       username: "username1" 
    });

    let registeredUser = await User.register(fakeUser,"password1");
    res.send(registeredUser);
});

app.use("/listings",listingRouter);
app.use("/listings/:id/review", reviewRouter);
app.use("/",userRouter);

app.all("*",(req,res,next)=>{
    next(new expenseError(404,"Page Not Found"));
});

//middlewares
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong!!"} = err;
    res.render("error.ejs",{message});
    //res.status(statusCode).send(message);
    //res.send("something went wrong..");
});
 
app.listen(9090,()=>{
    console.log("server is listening on port 9090");
});
