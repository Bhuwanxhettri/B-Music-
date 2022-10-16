const BASE_URL ="https://shazam-core.p.rapidapi.com/v1"
const Options = {
  headers: {
    'X-RapidAPI-Key': '883bb6a040mshb539034a27f6434p1a3250jsna7990cb35ed2',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};


export const getTopCharts = async(endpoint)=>{
   const res = await fetch(`${BASE_URL}/${endpoint}`,Options)
   const data = res.json();
   return data;
}

// export const getSongsByGenre = async(endpoint)=>{
//   const res = await fetch(`${BASE_URL}/${endpoint}`,Options)
//   const data = res.json();
//   return data;
// }