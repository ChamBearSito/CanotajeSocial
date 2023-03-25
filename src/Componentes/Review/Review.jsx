import React, { useEffect, useState, useContext } from "react";
import Star from "../Star/Star";
import PubReview from "../Pub_Review/pubReview";
import { createReview } from "../../api";
import { LoginContext } from "../../context/Login";

const Review = ({ chargeReviews, pOe, listReviews }) => {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const {logedUser} = useContext(LoginContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const myReview={
        userId:logedUser.id,
        review:review,
        rating:rating
      }
      let myReviewActualized;
      pOe.pOe=='place'? 
      myReviewActualized={...myReview,placeId:pOe.id}
      :myReviewActualized={...myReview,eventId:pOe.id}
      const response =async()=> await createReview(myReviewActualized)
      const theResult=await response();
      if(theResult.status==201){
        chargeReviews(pOe.id,pOe.pOe,true)
      }
    }catch(err){
      console.log('error on Submit', err)
    }
    setRating(0);
    setReview("");
  };

  return (
    <>
      <div className="m-5">
        <form onSubmit={handleSubmit}>
          <label>
            <h1>Rating</h1>
          </label>
          <Star setRating={setRating} />

          <label>
            {" "}
            <h1>Review</h1>
          </label>
          <textarea
            className="border-2 border-info max-w-xs h-24 w-full input input-bordered"
            cols="30"
            rows="20"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <br />

          <button
            className="btn btn-info mt-3 hover:scale-110 transition duration-300 "
            type="submit"
          >
            Submit Review
          </button>
        </form>
        <div className="mt-5">
          {/* Recorremos la lista y por cada uno creamos Pub_Review */}
          {listReviews.map((aRev) => (
            <PubReview key={aRev.id} aReview={aRev} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
