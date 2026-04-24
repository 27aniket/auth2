import mongoose from "mongoose";

export async function connectDB(){
        try {
             await  mongoose.connect(process.env.MONGO_URI!)
             console.log("DataBase is Connected")
        } catch (error) {
           console.error("DataBase is not Connected") ;
           process.exit(1)
        }
}