import React, { useEffect, useState } from "react";
import "../Pub_Review/pubReview.css";
import { getAUser, getAPlace, getAEvent } from "../../api";

const PubReview = (comment) => {
  const [dataXComment, setDataXComment] = useState({
    user: {}
  });

  const searchDataXComment = async () => {
    const responseUser = await getAUser(comment.userId);

    setDataXComment({
      user: responseUser.data,
    });
  };

  useEffect(()=>{
    searchDataXComment();
  },[])

  return (
    <div className="review-container">
      <div className="review-profile">{dataXComment.user.name} {dataXComment.user.lastName}</div>
      <div className="review-content">{comment.comment}</div>
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
