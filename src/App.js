import './App.css';
import React from 'react';
import Card from "./components/Card";
// import Input from "./components/Input";
import Button from "./components/Button";
// import { WeatherProvider, useWeather } from './context/Weather';
import { createContext , useContext, useState} from "react";

const WeatherContext = createContext();


function App() {
  const [data, setData]  = useState("");
  const [searchCity, setSearchCity] = useState("");

  async function getdata(){
    const baseUrl = "https://api.weatherapi.com/v1/current.json?key=06f4e1bf307345b390e65518242904"
    console.log("api on");
    console.log("searchCity is: ", searchCity)
    const response = await fetch(`${baseUrl}&q=${searchCity}&aqi=no`);
    console.log("api response", response);
    const data= await response.json()
    console.log(data)
  }
  


  return (
    <div className="App">
      <WeatherContext.Provider value={{searchCity, data, setSearchCity, setData}}>
        <Input />
        <Button onClick={getdata} value="Search"/>
        <Card/>
        <Button onClick={getdata} value="Refresh"/>
        </WeatherContext.Provider>
        <h1>Weather Forecast</h1>
    </div>
  );
}
function Input() {
  const {searchCity, setSearchCity}=useContext(WeatherContext);
  // const {searchCity, setSearchCity}=useWeather();
  // const setSearchCity=useWeather();
  console.log("City : ", searchCity);
  return (
    <input className="input-field"
      type='text'
      placeholder="Search here"
      // value={fetchData.searchCity}
      onChange={ (e) => setSearchCity(e.target.value)}
    /> 
  )
}

export default App;
