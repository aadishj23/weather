import React, { useEffect, useState } from 'react';
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import WeatherBackground from "./components/WeatherBackground";
import { WeatherContext } from './context/Weather';

function App() {
  const [data, setData] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [isDark, setIsDark] = useState(false);
  
  const fetchWeatherData = async () => {
    if (!searchCity.trim()) return;
    
    setLoading(true);
    setError("");
    
    try {
      const baseUrl = "https://api.weatherapi.com/v1/current.json?key=06f4e1bf307345b390e65518242904"
      const response = await fetch(`${baseUrl}&q=${searchCity}`);
      if (!response.ok) {
        throw new Error('City not found. Please check the spelling and try again.');
      }
      const datainfo = await response.json();
      setData(datainfo);
      
      // Add to recent searches
      if (searchCity.trim()) {
        setRecentSearches(prev => {
          const filtered = prev.filter(city => city !== searchCity.trim());
          return [searchCity.trim(), ...filtered].slice(0, 5);
        });
      }
      
      console.log(data)
    } 
    catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error.message);
      setData("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchCity.trim()) {
      const timeoutId = setTimeout(() => {
        fetchWeatherData();
      }, 1000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [searchCity]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setSearchCity('');
        setError('');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleFetchWeather = () => {
    fetchWeatherData(); 
  };

  const handleRecentSearch = (city) => {
    setSearchCity(city);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 relative ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 text-gray-800'
    }`}>
      {/* Weather Background Animation */}
      <WeatherBackground 
        condition={data?.current?.condition?.text} 
        isDark={isDark} 
      />
      
      <WeatherContext.Provider value={{searchCity, data, setSearchCity, setData, loading, error, isDark}}>
        <div className="max-w-4xl mx-auto p-4 md:p-8 relative z-10">
          {/* Header with Theme Toggle */}
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <div className="text-center flex-1">
              <h1 className={`text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent`}>
                Weather Forecast
              </h1>
              <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Get real-time weather information for any city
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Search Section */}
          <div className={`${isDark ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl mb-8`}>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <Input onSearch={handleFetchWeather} />
              <Button 
                onClick={handleFetchWeather} 
                value={loading ? "Searching..." : "Search"}
                disabled={loading}
              />
            </div>
            
            {/* Error Display */}
            {error && (
              <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-xl text-red-700 text-center">
                {error}
              </div>
            )}

                                  {/* Recent Searches */}
                      {recentSearches.length > 0 && (
                        <div className="mt-6">
                          <h3 className={`text-lg font-semibold mb-3 text-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Recent Searches
                          </h3>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {recentSearches.map((city, index) => (
                              <button
                                key={index}
                                onClick={() => handleRecentSearch(city)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                  isDark
                                    ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                }`}
                              >
                                {city}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Keyboard Shortcuts Help */}
                      <div className="mt-4 text-center">
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          💡 Press <kbd className={`px-2 py-1 rounded text-xs font-mono ${
                            isDark ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'
                          }`}>Esc</kbd> to clear search
                        </p>
                      </div>
          </div>

          {/* Weather Card */}
          <Card/>

          {/* Refresh Button */}
          <div className="text-center mt-8">
            <Button 
              onClick={handleFetchWeather} 
              value="Refresh"
              disabled={loading}
            />
          </div>
        </div>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
