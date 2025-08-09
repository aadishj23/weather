import React from 'react'
import { useWeather } from '../context/Weather'
import LoadingSkeleton from './LoadingSkeleton'

export default function Card() {
  const {data, loading, isDark} = useWeather();
  
  if (loading) {
    return <LoadingSkeleton isDark={isDark} />;
  }
  
  if (!data) {
    return (
      <div className={`${isDark ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl text-center`}>
        <div className={`${isDark ? 'text-gray-500' : 'text-gray-400'} mb-4`}>
          <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className={`text-2xl md:text-3xl font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Search for a city
        </h3>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Enter a city name above to get weather information
        </p>
      </div>
    );
  }

  const getWeatherIcon = (condition) => {
    const conditionText = condition.toLowerCase();
    if (conditionText.includes('sunny') || conditionText.includes('clear')) {
      return '☀️';
    } else if (conditionText.includes('cloudy') || conditionText.includes('overcast')) {
      return '☁️';
    } else if (conditionText.includes('rain') || conditionText.includes('drizzle')) {
      return '🌧️';
    } else if (conditionText.includes('snow')) {
      return '❄️';
    } else if (conditionText.includes('thunder')) {
      return '⛈️';
    } else if (conditionText.includes('fog') || conditionText.includes('mist')) {
      return '🌫️';
    } else {
      return '🌤️';
    }
  };

  const getWeatherColor = (condition) => {
    const conditionText = condition.toLowerCase();
    if (conditionText.includes('sunny') || conditionText.includes('clear')) {
      return 'from-yellow-400 to-orange-500';
    } else if (conditionText.includes('cloudy') || conditionText.includes('overcast')) {
      return 'from-gray-400 to-gray-600';
    } else if (conditionText.includes('rain') || conditionText.includes('drizzle')) {
      return 'from-blue-400 to-blue-600';
    } else if (conditionText.includes('snow')) {
      return 'from-blue-200 to-blue-400';
    } else if (conditionText.includes('thunder')) {
      return 'from-purple-500 to-gray-700';
    } else {
      return 'from-blue-300 to-indigo-500';
    }
  };

  const formatTime = (timeString) => {
    if (!timeString) return '';
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className={`${isDark ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-xl`}>
      {/* Location Header with Weather-based Background */}
      <div className={`text-center mb-8 p-6 rounded-2xl bg-gradient-to-r ${getWeatherColor(data.current.condition.text)} text-white`}>
        <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
          {data.location.name}
        </h2>
        <p className="text-xl md:text-2xl opacity-90 mb-2">
          {data.location.country}
        </p>
        <p className="text-lg opacity-80">
          {formatTime(data.location.localtime)}
        </p>
      </div>

      {/* Main Weather Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-8">
        {/* Temperature Section */}
        <div className="text-center lg:col-span-1">
          <div className={`text-8xl md:text-9xl font-light mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {data.current.temp_c}°
          </div>
          <div className="text-6xl md:text-7xl mb-4 animate-pulse">
            {getWeatherIcon(data.current.condition.text)}
          </div>
          <p className={`text-2xl md:text-3xl font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            {data.current.condition.text}
          </p>
          <div className="space-y-2">
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Feels like {data.current.feelslike_c}°C
            </p>
            {data.current.temp_c !== data.current.feelslike_c && (
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {data.current.temp_c > data.current.feelslike_c ? '🌡️ Warmer than actual' : '❄️ Colder than actual'}
              </p>
            )}
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`${isDark ? 'bg-gray-700/50 hover:bg-gray-600/70' : 'bg-white/50 hover:bg-white/70'} rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105`}>
              <div className="text-2xl mb-2">💨</div>
              <p className={`text-sm mb-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Wind</p>
              <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {data.current.wind_kph} km/h
              </p>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{data.current.wind_dir}</p>
            </div>
            <div className={`${isDark ? 'bg-gray-700/50 hover:bg-gray-600/70' : 'bg-white/50 hover:bg-white/70'} rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105`}>
              <div className="text-2xl mb-2">💧</div>
              <p className={`text-sm mb-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Humidity</p>
              <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {data.current.humidity}%
              </p>
            </div>
            <div className={`${isDark ? 'bg-gray-700/50 hover:bg-gray-600/70' : 'bg-white/50 hover:bg-white/70'} rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105`}>
              <div className="text-2xl mb-2">👁️</div>
              <p className={`text-sm mb-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Visibility</p>
              <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {data.current.vis_km} km
              </p>
            </div>
            <div className={`${isDark ? 'bg-gray-700/50 hover:bg-gray-600/70' : 'bg-white/50 hover:bg-white/70'} rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105`}>
              <div className="text-2xl mb-2">🌡️</div>
              <p className={`text-sm mb-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Pressure</p>
              <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {data.current.pressure_mb} mb
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Additional Info */}
      <div className={`${isDark ? 'bg-gray-700/50' : 'bg-white/50'} rounded-2xl p-6`}>
        <h3 className={`text-xl font-semibold mb-6 text-center ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Detailed Weather Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-2xl mb-2">☀️</div>
            <p className="text-sm text-gray-600 mb-1">UV Index</p>
            <p className="text-lg font-semibold text-gray-800">
              {data.current.uv}
            </p>
            <p className="text-xs text-gray-500">
              {data.current.uv <= 2 ? 'Low' : data.current.uv <= 5 ? 'Moderate' : data.current.uv <= 7 ? 'High' : 'Very High'}
            </p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-2xl mb-2">🌬️</div>
            <p className="text-sm text-gray-600 mb-1">Wind Gust</p>
            <p className="text-lg font-semibold text-gray-800">
              {data.current.gust_kph} km/h
            </p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-2xl mb-2">🌡️</div>
            <p className="text-sm text-gray-600 mb-1">Dew Point</p>
            <p className="text-lg font-semibold text-gray-800">
              {data.current.dewpoint_c}°C
            </p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <div className="text-2xl mb-2">🌫️</div>
            <p className="text-sm text-gray-600 mb-1">Cloud Cover</p>
            <p className="text-lg font-semibold text-gray-800">
              {data.current.cloud}%
            </p>
          </div>
        </div>
      </div>

      {/* Weather Alert Section (if available) */}
      {data.alerts && data.alerts.alert && data.alerts.alert.length > 0 && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-red-800 mb-4 text-center">
            ⚠️ Weather Alerts
          </h3>
          <div className="space-y-3">
            {data.alerts.alert.map((alert, index) => (
              <div key={index} className="bg-red-100 rounded-xl p-4">
                <p className="font-semibold text-red-800">{alert.headline}</p>
                <p className="text-red-700 text-sm mt-1">{alert.msg}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Last Updated Timestamp */}
      <div className="mt-6 text-center">
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Last updated: {formatTime(data.current.last_updated_epoch ? new Date(data.current.last_updated_epoch * 1000) : data.current.last_updated)}
        </p>
      </div>
    </div>
  )
}

