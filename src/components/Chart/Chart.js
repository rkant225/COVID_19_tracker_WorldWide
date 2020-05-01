import React from 'react';
import styles from './Chart.module.css'
import {useState, useEffect} from 'react';
import * as API from '../../api';
import {Line, Bar} from 'react-chartjs-2';

const Chart = ({countryWiseData, countryName}) => {
    const [dailyData, setDailyData] = useState([]);
   
    const fetchDailyData = async ()=>{
      const dailyData = await API.fetchDailyData();
      return setDailyData(dailyData);
    }
  
    useEffect(()=>{
      fetchDailyData();
    },[]);
  
    const LineChart = dailyData.length > 0 && 
        <Line data={{
            labels : dailyData.map(d => d.date),
            datasets : [{data:dailyData.map(d=>d.confirmed), label : "Infected", borderColor : "#3333ff", fill : true},{data:dailyData.map(d=>d.deaths), label : "Death", borderColor : "#ff3333", fill : true}]
        }}/>

    const BarChart = countryName && countryWiseData && <Bar 
        data = {{
            labels : ['Infected', 'Recovered', 'Deaths'],
            datasets : [{
                label : 'People',
                backgroundColor : ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                data : [countryWiseData.confirmed.value, countryWiseData.recovered.value, countryWiseData.deaths.value]
            }]
        }}
        options = {{
            legend : {display : false},
            title : {display : true, text : `Current status in ${countryName.toUpperCase()}`}
        }}
    />  

    console.log(countryName)

  return (
    <div className={styles.container}>
      {countryName ? BarChart : LineChart}
    </div>
  );
}

export default Chart;
