const BASE_URL ="https://shazam-core.p.rapidapi.com/v1"
const Options = {
  headers: {
    'X-RapidAPI-Key': 'c2324a6212msh8e7f39c0dc8e252p1c09f2jsnd90bcce504ad',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};


export const getTopCharts = async(endpoint)=>{
   const res = await fetch(`${BASE_URL}/${endpoint}`,Options)
   const data = res.json();
   return data;
}
