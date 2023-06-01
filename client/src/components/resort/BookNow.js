import React from 'react'
import { useNavigate } from 'react-router-dom'

function BookNow() {
  const navigate = useNavigate()
  const onBook = ()=>{
    navigate('/booking')
  }
  return (
   <>
   <div>
        <button className="w-full p-2 text-2xl font-semibold text-white rounded-md bg-cyan-800 mb-7" onClick={onBook}>
          Book now
        </button>
      </div>
   </>
  )
}

export default BookNow