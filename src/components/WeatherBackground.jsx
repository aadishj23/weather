import React from 'react';

export default function WeatherBackground({ condition, isDark }) {
  const getBackgroundAnimation = (condition) => {
    const conditionText = condition?.toLowerCase() || '';
    
    if (conditionText.includes('rain') || conditionText.includes('drizzle')) {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-20 bg-blue-400 opacity-60 animate-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>
      );
    }
    
    if (conditionText.includes('snow')) {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-snow"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      );
    }
    
    if (conditionText.includes('sunny') || conditionText.includes('clear')) {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse" />
          <div className="absolute top-20 right-20 w-20 h-20 bg-orange-300 rounded-full opacity-30 animate-ping" />
        </div>
      );
    }
    
    if (conditionText.includes('cloudy') || conditionText.includes('overcast')) {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-16 rounded-full opacity-20 animate-float ${
                isDark ? 'bg-gray-400' : 'bg-gray-300'
              }`}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      );
    }
    
    return null;
  };

  return getBackgroundAnimation(condition);
}
