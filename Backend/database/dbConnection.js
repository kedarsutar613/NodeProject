import mongoose from "mongoose";
export const dbConnection =()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        dbName:"Details",
    })
        .then(()=>{
             console.log("Database Connected!");
           })
           .catch((err)=>{
                console.log(`Error is connecting to Database! ${err}`);
            })
}