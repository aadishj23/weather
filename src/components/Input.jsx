import React from 'react'
import {useWeather} from '../context/Weather';

export default function Input(props) {
  const {searchCity, setSearchCity}=useWeather();
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
