import React from 'react'
import { useWeather } from '../context/Weather'
export default function Card() {
  const {data}= useWeather();
  return (
    <div className="Card">
      {data && (
        <div> 
          <h2>{data.location.name}, {data.location.country}</h2>
          <p>Temperature: {data.current.temp_c}°C</p>
          <p>Condition: {data.current.condition.text}</p>
        </div>)
      }
    </div>
  )
}

