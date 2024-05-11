const baseUrl = "https://api.weatherapi.com/v1/current.json?key=06f4e1bf307345b390e65518242904"

export const getWeather = async (city) => {
    console.log("api on");
    const response = await fetch(`${baseUrl}&q=${city}&aqi=no`);
    console.log("api", response);
    return response.json();
}