const mongoose = require('mongoose');

const connectDB = async (mongo_uri: string) => {
    try {
        const conn = await mongoose.connect(mongo_uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.bold);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;
