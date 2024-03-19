import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTAURANT",
    })
    .then(()=>{
        console.log("the db is connected");
    }).catch(err=>{
        console.log(`error occured ${err}`);
    })
};