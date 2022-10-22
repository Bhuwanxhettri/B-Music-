const BASE_URL ="https://shazam-core.p.rapidapi.com/v1"
const Options = {
  headers: {
    'X-RapidAPI-Key': '61b75fd6f7msh761ba973525f63fp12e1f3jsn761caebe05c3',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};


export const getTopCharts = async(endpoint)=>{
   const res = await fetch(`${BASE_URL}/${endpoint}`,Options)
   const data = res.json();
   return data;
}

export const searchMusic = async(endpoint)=>{
  const res = await fetch(`${BASE_URL}/${endpoint}`,Options)
  const data = res.json();
  return data;
}