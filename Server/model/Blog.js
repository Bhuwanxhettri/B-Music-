import mongoose from "mongoose";

const blogSchema =mongoose.Schema(
   {
    title:{
        type:String,
        // required:true
    },
    description:{
       type:String,
      //  required:true
    },
    genere:{
       type:String,
      //  required:true
    },
    image: {
      type: String,
      trim: true,
      default:
        "https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?w=2000",
    },
    cloudinary_id:{
      type:String
    },
    comments: [
      {
        comment: {
          type: String,
        },
        commentBy: {
         type:mongoose.Types.ObjectId,
          ref: "User",
        },
        commentAt: {
          type: Date,
          // required: true,
        },
      },
    ],
    Likes:[
       {
         like:{
            type:String,
         },
         likedBy: {
          type:mongoose.Types.ObjectId,
           ref: "User",
         },
         likedAt:{
          type: Date,
          // required: true,
         }
       },  
    ],
    user:{
       type:mongoose.Types.ObjectId,
       ref:"User",
      //  required:true
    },
   },
   {
      timestamps: true,
   },
);

export default mongoose.model("Blog",blogSchema);

