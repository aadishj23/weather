import { createContext , useContext} from "react";
export const WeatherContext = createContext(null);
export const useWeather = () => {
    return useContext(WeatherContext);
}


