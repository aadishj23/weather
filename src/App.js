import './App.css';
import React from 'react';
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { WeatherProvider, useWeather } from './context/Weather';

function App() {
  const searchCity=useWeather();
  const setSearchCity=useWeather();
  async function getdata(){
    const baseUrl = "https://api.weatherapi.com/v1/current.json?key=06f4e1bf307345b390e65518242904"
    console.log("api on");
    console.log(setSearchCity)
    const response = await fetch(`${baseUrl}&q=${searchCity}&aqi=no`);
    // console.log("api", response);
    const data= await response.json()
    console.log(data)
  }
  

  return (
    <div className="App">
      <WeatherProvider>
        <Input />
        <Button onClick={getdata} value="Search"/>
        <Card/>
        <Button onClick={getdata} value="Refresh"/>
      </WeatherProvider>
      <h1>Weather Forecast</h1>
    </div>
  );
}

export default App;
