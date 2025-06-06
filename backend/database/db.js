const mongoose = require('mongoose');/*------ Mongoose Require ------*/

const connectDb = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/acd")
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log('MongoDB connection error:', err));
}

module.exports = connectDb;/*------ Export ConnectDB ------*/