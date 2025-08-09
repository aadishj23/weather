import React from 'react'
import {useWeather} from '../context/Weather';

export default function Input(props) {
  const {searchCity, setSearchCity, isDark} = useWeather();
  console.log("City : ", searchCity);
  return (
    <input 
      className={`w-full md:w-80 px-6 py-4 text-lg md:text-xl border-0 rounded-2xl backdrop-blur-sm shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 placeholder-gray-400 font-medium ${
        isDark 
          ? 'bg-gray-700/80 text-white placeholder-gray-300 focus:bg-gray-600 focus:ring-blue-400' 
          : 'bg-white/80 text-gray-700 focus:bg-white'
      }`}
      type='text'
      placeholder="Enter city name..."
      value={searchCity}
      onChange={(e) => setSearchCity(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && props.onSearch && props.onSearch()}
    /> 
  )
}
