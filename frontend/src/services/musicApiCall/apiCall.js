const BASE_URL ="https://shazam-core.p.rapidapi.com/v1"
const Options = {
  headers: {
    'X-RapidAPI-Key': '377dec16c0mshfc445eb552bfb51p13343ajsn6a057ff2ec07',
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