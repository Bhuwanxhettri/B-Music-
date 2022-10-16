import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },

   cloudinary_id:{
          type:String,
    }
    ,
    blogs:[{type:mongoose.Types.ObjectId,ref:"Blog",required:true}],
})

export default mongoose.model("User",usersSchema);

// in mongo db it will be store as users