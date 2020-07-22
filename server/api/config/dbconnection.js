const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://mwa:mwaonilnemarket@online-market-api-isj4r.mongodb.net/online-market-api?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});
    console.log('The Database is connected....')
}

module.exports = connectDB;
