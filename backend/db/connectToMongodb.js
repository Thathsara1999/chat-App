import mongoose from 'mongoose';

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.Mongo_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongodb;
