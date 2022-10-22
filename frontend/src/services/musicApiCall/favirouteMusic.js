import axios from 'axios'
const URL ="http://localhost:5000/favMusic";

export const favoriuteSong = async(fevSongs)=>{
     const res =  await axios.put(`${URL}/add`,fevSongs);
     return res.data;
}

export const getFevMusic = async(userEmail)=>{
    const res = await axios.put(`${URL}/get`,userEmail);
    return res.data
}

export const removeFevMusic  = async(fevsong)=>{
    const res = await axios.put(`${URL}/delete`,fevsong);
    return res.data;
}