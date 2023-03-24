import React, { useEffect, useState } from "react";
import "../Pub_Review/pubReview.css";
import { getAUser, getAPlace, getAEvent } from "../../api";

const PubReview = (aReview) => {
  const [dataXComment, setDataXComment] = useState({
    name:'The',
    lastName:'Anonimous'
  });
  const [theReviews, setTheReviews]=useState()

  const searchDataXComment = async (pId) => {
    
    if(aReview.aReview.userId){  
      const responseUser = await getAUser(pId);
      setDataXComment(responseUser.data);
    }
    
  };

  const chargeTheReviews=()=>{
    const theReviews=document.getElementsByClassName(`rating-review-${aReview.aReview.id}`)
    setTheReviews(theReviews)
    theReviews[aReview.aReview.rating-1].checked=true
  }

  useEffect(()=>{
    searchDataXComment(aReview.aReview.userId);
    chargeTheReviews()
  },[])

  return (
    <div className="review-container mt-5">
      <div className="review-profile">{dataXComment.name} {dataXComment.lastName}:</div>
      <div className="review-content">{aReview.aReview.review}</div>
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.aReview.id}`}
        />
        <input
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.aReview.id}`}
        />
        <input
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.aReview.id}`}
        />
        <input
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.aReview.id}`}
        />
        <input
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.aReview.id}`}
        />
      </div>
    </div>
  );
};

export default PubReview;
