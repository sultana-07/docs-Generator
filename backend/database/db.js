// tommor would be nice to have a database connection here
const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the process with failure
    });
}

module.exports = connectDB;