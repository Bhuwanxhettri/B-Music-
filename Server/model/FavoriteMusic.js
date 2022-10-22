import mongoose from "mongoose";

const favoriteSchema = mongoose.Schema({
    fevSongs:[
      {
        key:{
          type:String,
        },
        image:{
          type:String,
        },
        title:{
            type:String,
        },
        subtitle:{
            type:String,
        },
        url:{
          type:String,
        }

     }
    ],
    userEmail:{
      type:String
    },

})

export default mongoose.model("FavoriteMusic",favoriteSchema);
