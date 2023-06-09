import React from 'react'

function LoadingFallback() {
  return (
   <>
    <div className="flex items-center justify-center h-screen bg-black">
     <p className='text-white'>Loading...</p>
    </div>
   </>
  )
}

export default LoadingFallback