import React, { useEffect, useState } from "react";
import "../Pub_Review/pubReview.css";
import { getAUser, getAPlace, getAEvent } from "../../api";

const PubReview = (aComment) => {
  const [dataXComment, setDataXComment] = useState({
    name:'The',
    lastName:'Anonimous'
  });

  const searchDataXComment = async (pId) => {
    
    if(aComment.aComment.userId){  
      const responseUser = await getAUser(pId);
      setDataXComment(responseUser.data);
    }
    
  };

  useEffect(()=>{
    searchDataXComment(aComment.aComment.userId);
    console.log('pubReview',aComment)
  },[])

  return (
    <div className="review-container">
      <div className="review-profile">{dataXComment.name} {dataXComment.lastName}</div>
      <div className="review-content">{aComment.aComment.comment}</div>
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
    </div>
  );
};

export default PubReview;
