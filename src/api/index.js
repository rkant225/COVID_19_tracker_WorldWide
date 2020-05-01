import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
export const fetchData = async (country) =>{
    let changAbleURL = url
    if(country){
        changAbleURL = url + '/countries/' +  country;
    }
    try{
        const response = await axios.get(changAbleURL);
        const {confirmed, recovered, deaths, lastUpdate} = response.data;
        
        return {confirmed, recovered, deaths, lastUpdate};
    }catch(err){
        console.error('Some thing went wrong ', err)
    }
}

export const fetchDailyData = async () =>{
    try{
        const response = await axios.get(url + '/daily');
        const modifiedData = response.data.map((dailyData) =>{
            return { confirmed : dailyData.confirmed.total,
                     deaths : dailyData.deaths.total,
                     date : dailyData.reportDate}
                    });
        return modifiedData;
    }catch(err){
        console.error('Some thing went wrong ', err)
    }
}

export const fetchCountries = async () =>{
    try{
        const response = await axios.get(url + '/countries');
        
        return response.data.countries;
    }catch(err){
        console.error('Some thing went wrong ', err)
    }
}



