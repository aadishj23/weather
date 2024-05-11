import { createContext , useContext, useState} from "react";
// import {getWeather} from "../api/index";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData]  = useState("");
    const [searchCity, setSearchCity] = useState("");

    // const fetchData = async () => {
    //   const response = await getWeather(searchCity);
    //   console.log(response)
    // }
    return <WeatherContext.Provider value={{searchCity, data, setSearchCity, setData}}>
      {props.children};
    </WeatherContext.Provider>
}

