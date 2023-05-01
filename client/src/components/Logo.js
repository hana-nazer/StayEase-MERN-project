import React from 'react'

function Logo() {
  return (
   <>
<div class="flex items-center m-2">
  <svg class="w-12 h-12 mr-2 text-blue-500" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="#fff" stroke="#000" stroke-width="5" />
    <circle cx="50" cy="50" r="35" fill="#fff" />
    <path d="M30 50 L50 30 L70 50 L70 80 L30 80 Z" fill="#fff" stroke="#000" stroke-width="5" />
    <rect x="40" y="70" width="20" height="10" fill="#000" />
    <circle cx="50" cy="85" r="5" fill="#000" />
  </svg>
  <div class="text-center">
    <h1 class="text-2xl font-bold text-white -ml-10">StayEase</h1>
    <p class="text-sm text-gray-700">Find your perfect stay</p>
  </div>
</div>





   </>
  )
}

export default Logo