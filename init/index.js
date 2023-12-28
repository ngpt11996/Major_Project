const mongoose = require("mongoose");
const Listing = require('../models/listing.js');
const initData = require('./data.js')

// data initialise logic comes here..
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    //delete all without any condition filter
    initData.data = initData.data.map((obj)=>({...obj, owner: "65740c51c45114d3e71a03c2"}));
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was intialised");
};

initDB();
