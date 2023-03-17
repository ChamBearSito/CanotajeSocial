import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Star = ({value,onClick}) => {
    const filledStar = <AiFillStar  color='yellow'/>
    const emptyStar = <AiFillStar color='yellow' style={{opacity:0.5}}/>
  return (
    <>
        
      <span className='flex flex-wrap' onClick={() => onClick(value)} style={{ cursor: "pointer" }}>
      {value <= Math.floor(value) ? filledStar : emptyStar}
      {value >= Math.ceil(value) ? emptyStar : filledStar}
      {value - Math.floor(value) >= 0.5 ? filledStar : emptyStar}
      {value <= Math.floor(value) + 1 ? emptyStar : filledStar}
      {value >= Math.ceil(value) + 1 ? filledStar : emptyStar}
    </span>
   
    
    </>
  )
}

export default Star