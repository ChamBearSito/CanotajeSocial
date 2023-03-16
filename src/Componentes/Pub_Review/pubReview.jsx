import React from "react";
import '../Pub_Review/pubReview.css';

const PubReview = () => {

    return (
        <div className='review-container'>
            <div className="review-profile">@nombre:</div>
            <div className="review-content">@comentario</div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
        </div>
    );
}

export default PubReview;