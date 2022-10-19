import mongoose from "mongoose";

const favoriteSchema = mongoose.Schema({
    
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
       //  required:true
     },

})