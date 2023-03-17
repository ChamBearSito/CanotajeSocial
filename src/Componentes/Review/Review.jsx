import React, { useState } from 'react'
import Star from '../Star/Star';

const Review = ({onReview}) => {


    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        onReview({rating, review});
        setRating(0);
        setReview("");
    };
    const handleRatingChange = (value) =>{
        setRating(value);
    }

  return (
   <>
   <div className='m-20'>

        <form  onSubmit={handleSubmit} className="border-2 border-info w-fit p-3 rounded-xl">
            
        
            <label><h1>Rating</h1></label>
            <Star value={rating} onChange={handleRatingChange} />


            <label> <h1>Review</h1></label> 
            <textarea className='border-2 border-info max-w-xs h-24 w-full input input-bordered' cols="30" rows="20" value={review} onChange={(e) => setReview(e.target.value)}></textarea><br />
      
        <button className='btn btn-info mt-3 hover:scale-110 transition duration-300 ' type="submit">Submit Review</button>



        </form>

   </div>
   
   </>
  )
}

export default Review