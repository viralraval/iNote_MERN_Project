const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inote?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("DB CONNECT SUCCESS");
    })
}

module.exports = connectMongo;