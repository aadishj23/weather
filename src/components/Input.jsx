import React from 'react'
import {useWeather} from '../context/Weather';

export default function Input(props) {
  const { fetchData } = useWeather();
  console.log("Weatherrrrrr : ", weather);
  return (
    <input className="input-field"
        placeholder="Search here"
        value={weather.searchCity}
        onChange={ (e) => weather.setSearchCity(e.target.value)}>
      
    </input>
  )
}
