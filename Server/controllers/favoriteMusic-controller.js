import FavoriteMusic from '../model/FavoriteMusic'

export const addFavirouteMusic = async(req,res)=>{
    const {userEmail,fevSongs} = req.body;
    try{
       const user = await FavoriteMusic.find({userEmail});
       if(user[0]?.userEmail === userEmail){
          const modifed = [...user]
        //   console.log({userEmail:user[0].userEmail})
          modifed[0].fevSongs.push(fevSongs);
        //   console.log({fevSongs:modifed[0].fevSongs});
         await FavoriteMusic.updateOne({userEmail:user[0].userEmail},{$set:{fevSongs:modifed[0].fevSongs}});
       }else{
              const favMusic = new FavoriteMusic({
                   userEmail,
                   fevSongs
               })
               await favMusic.save();
       }
    }catch(err){
        console.log(err);
    }
         
}