import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
        if (await mongoose.connect(config.MONGODB_URI)){
                console.log("Database is connected")
        }
        else{
                console.log("Database Connection Error")
        }
          
}

export default connectDB;