import React, { useEffect, useState } from "react";
import "../Pub_Review/pubReview.css";
import { getAUser, getAPlace, getAEvent } from "../../api";

const PubReview = ({onChargeReviews,aReview}) => {
  //componente para mostrar una review, no funciona las estrellas
  //no se porque pero se dejo comentado
  const [dataXComment, setDataXComment] = useState({
    name:'The',
    lastName:'Anonimous'
  });
  const [theReviews, setTheReviews]=useState()

  const searchDataXComment = async (pId) => {
    
    if(aReview.userId){  
      const responseUser = await getAUser(pId);
      setDataXComment(responseUser.data);
      
    }
    
  };

  // const chargeTheReviews=()=>{
  //   const theReviews=document.getElementsByClassName(`rating-review-${aReview.id}`)
  //   setTheReviews(theReviews)
  //   if(aReview.rating>0)
  //     theReviews[aReview.rating-1].checked=true
  // }

  useEffect(()=>{
    searchDataXComment(aReview.userId);
    
  },[])

  return (
    <div className="review-container mt-5">
      <div className="review-profile">{dataXComment.name} {dataXComment.lastName}:</div>
      <div className="review-content">{aReview.review}</div>
      <div className="rating">
        {aReview.rating==1?
        <input
        type="radio"
        name="rating-2"
        id="rating-1"
        className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.id}`}
        checked
        />:<input
        type="radio"
        name="rating-2"
        id="rating-1"
        className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.id}`}
        />}
        {aReview.rating==2?
        <input
        type="radio"
        name="rating-2"
        id="rating-1"
        className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.id}`}
        checked
        />:<input
        type="radio"
        name="rating-2"
        id="rating-1"
        className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.id}`}
        />}
        {aReview.rating==3?
        <input
        type="radio"
        name="rating-2"
        id="rating-1"
        className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.id}`}
        checked
        />:<input
        type="radio"
        name="rating-2"
        id="rating-1"
        className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.id}`}
        />}
        {aReview.rating==4?
        <input
        type="radio"
        name="rating-2"
        id="rating-1"
        className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.id}`}
        checked
        />:<input
        type="radio"
        name="rating-2"
        id="rating-1"
        className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.id}`}
        />}
        {aReview.rating==5?
        <input
        type="radio"
        name="rating-2"
        id="rating-1"
        className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.id}`}
        checked
        />:<input
        type="radio"
        name="rating-2"
        id="rating-1"
        className={`mask mask-star-2 bg-orange-400 rating-review-${aReview.id}`}
        />}
      </div>
    </div>
  );
};

export default PubReview;
