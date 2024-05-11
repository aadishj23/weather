import './App.css';
import React from 'react';
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { WeatherContext } from './context/Weather';
// import { Api } from './api';

function App() {
  const [data, setData]  = React.useState("");
  const [searchCity, setSearchCity] = React.useState("");

  async function Api(){
        const baseUrl = "https://api.weatherapi.com/v1/current.json?key=06f4e1bf307345b390e65518242904"
        console.log("api on");
        console.log("City is", searchCity)
        const response = await fetch(`${baseUrl}&q=${searchCity}&aqi=no`);
        const data= await response.json()
        // setData(data)
        console.log(data)
    }

  return (
    <div className="App">
      <WeatherContext.Provider value={{searchCity, data, setSearchCity, setData}}>
        <Input />
        <Button onClick={Api} value="Search"/>
        <Card/>
        <Button onClick={Api} value="Refresh"/>
      </WeatherContext.Provider>
      <h1>Weather Forecast</h1>
    </div>
  );
}

export default App;
