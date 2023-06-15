import { useState } from "react";

const Weather = ()=>{

   
    let [placeid,setplaceid] = useState(null);
    let [currentweather,setcurrentweather] = useState(null);
    let [time,settime]=useState("");
   
    
   let handleweather =()=>{
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=${placeid}&timezone=auto&language=en&units=auto`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cab0ab8cf2mshc991fe29cfc2910p1022b6jsn3abe8d7e77e5',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };
      fetch(url, options)
    .then((res)=>{return res.json()})
    .then((data)=>{setcurrentweather(data.current) ;console.log(data); settime(data.timezone) })
   }
    return (
        <div className="weather">
            <h2>***Weather Application***</h2>

         <div className="search">

         <input type="text" onChange={(e)=>{setplaceid(e.target.value)}} placeholder="Enter the place name"/>
         <button onClick={handleweather}>Search</button>

         </div>

      
       {currentweather  && <div className="deatils">
        <h2 align="right">{placeid}</h2>
        <h2 align="right">{time}</h2>
        <h2 align="right">  {currentweather.temperature} <sup>o</sup></h2>
        <h2 align="right">{currentweather.summary}</h2>
        <h2 align="right">{currentweather.timezone}</h2>
       <div className="spans"> <span>Wind direction : {currentweather.wind.dir}</span> <br />
        <span>Humidity : {currentweather.humidity}</span><br />
        <span>Cloud cover : {currentweather.cloud_cover}</span><br />
        <span>Dew Point : {currentweather.dew_point}</span><br />
        <span>Pressure : {currentweather.pressure}</span><br />
       
        <span>visibility : {currentweather.visibility}</span></div>
      </div> }


        </div>

       


    )
}
export default Weather;