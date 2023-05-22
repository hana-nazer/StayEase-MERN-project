import React from "react";

function Logo() {
  return (
    <div className="flex items-center">
      <svg className="w-8 h-8 text-blue-500" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="#fff"
          stroke="#000"
          strokeWidth="5"
        />
        <circle cx="50" cy="50" r="35" fill="#fff" />
        <path
          d="M30 50 L50 30 L70 50 L70 80 L30 80 Z"
          fill="#fff"
          stroke="#000"
          strokeWidth="5"
        />
        <rect x="40" y="70" width="20" height="10" fill="#000" />
        <circle cx="50" cy="85" r="5" fill="#000" />
      </svg>
      <div className="text-center ">
        <h1 className="text-sm font-bold text-white">StayEase</h1>
      </div>
    </div>
  );
}

export default Logo;
