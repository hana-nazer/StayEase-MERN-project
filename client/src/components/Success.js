import React, { Fragment } from 'react'

function Success() {
  return (
   <Fragment>
    <div class="w-1/2 h-64 flex flex-col justify-center items-center border">
  <div class="w-16 h-20 flex flex-col items-center justify-between">
    <div class="w-full h-4/5 bg-gradient-to-br from-green-400 to-green-600 shadow-inner transform scale-84 rounded-full animate-container animate-delay-750">
      <svg class="w-65 transform translate-y-1/4 stroke-current stroke-dasharray-80 stroke-dashoffset-80 animate-check animate-delay-1250" viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class="absolute bottom-0 left-0 w-full h-15 bg-radial-gradient-green-transparent rounded-full animate-shadow animate-delay-750"></div>
  </div>
</div>

   </Fragment>
  )
}

export default Success