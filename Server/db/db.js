import mongoose from "mongoose";
import mongodbURL  from "../config/app-config.json" assert { type: "json" }; 

export const databaseConnect = async()=>{
   await mongoose.connect(mongodbURL.url)
            .then(()=>console.log("Connectet to database"))
            .catch((err)=>console.log(err));
}

