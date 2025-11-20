import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected successfully');
        
    } catch (error) {
        console.log('MongoDb connection error', error);
        // Exit the process if DB connection fails to avoid running the server in a bad state
        process.exit(1)
        
    }
}

export default connectDB;
