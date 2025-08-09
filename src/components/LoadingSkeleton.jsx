import React from 'react';

export default function LoadingSkeleton({ isDark }) {
  return (
    <div className={`${isDark ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-xl animate-pulse`}>
      {/* Location Header Skeleton */}
      <div className="text-center mb-8">
        <div className={`h-12 md:h-16 bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl mb-4 mx-auto w-3/4 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
        <div className={`h-6 md:h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mb-2 mx-auto w-1/2 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
        <div className={`h-5 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mx-auto w-1/3 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
      </div>

      {/* Main Weather Info Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-8">
        {/* Temperature Section Skeleton */}
        <div className="text-center lg:col-span-1">
          <div className={`h-32 md:h-40 bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl mb-4 mx-auto w-3/4 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
          <div className={`h-20 md:h-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl mb-4 mx-auto w-1/2 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
          <div className={`h-8 md:h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mb-2 mx-auto w-2/3 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
          <div className={`h-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mx-auto w-1/2 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
        </div>

        {/* Weather Details Grid Skeleton */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-700/50' : 'bg-white/50'} rounded-2xl p-4 text-center`}>
                <div className={`h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mb-2 mx-auto w-1/2 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
                <div className={`h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mb-1 mx-auto w-3/4 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
                <div className={`h-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mx-auto w-2/3 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info Skeleton */}
      <div className={`${isDark ? 'bg-gray-700/50' : 'bg-white/50'} rounded-2xl p-6`}>
        <div className={`h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mb-6 mx-auto w-1/3 ${isDark ? 'from-gray-600 to-gray-700' : ''}`}></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
              <div className={`h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mb-2 mx-auto w-1/2`}></div>
              <div className={`h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mb-1 mx-auto w-3/4`}></div>
              <div className={`h-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mx-auto w-2/3`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}