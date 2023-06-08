import React from 'react'
import { useNavigate } from 'react-router-dom'

function BookNow(props) {
  const resortId = props.resortId
  const navigate = useNavigate()
  const onBook = ()=>{
    navigate(`/book/${resortId}`)
  }
  return (
   <>
   <div>
        <button className="w-full p-2 text-2xl font-semibold text-white rounded-md bg-custom-gray mb-7" onClick={onBook}>
          Book now
        </button>
      </div>
   </>
  )
}

export default BookNow