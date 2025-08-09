import React from 'react'

export default function Button(props) {
  const isPrimary = props.value === "Search" || props.value === "Searching...";
  
  return (
    <button 
      className={`px-8 py-4 rounded-2xl font-semibold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100 ${
        isPrimary 
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white' 
          : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white'
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  )
}
