import React from "react";
import { AiFillStar } from "react-icons/ai";

const Star = ({ setRating }) => {
  //Componente complemento a Review para que devuelva el valor
  //del rating de la misma, estrellitas literalmente
  const onOffStars = (value) => {
    const theStars = document.getElementsByClassName("ratingForReview");

    for(let i=value-1;i<theStars.length;i++){
      theStars[i].dataset.setlight=0;
      theStars[i].style.opacity=0.5
    }
    for(let i=0;i<value;i++){
      theStars[i].dataset.setlight=1;
      theStars[i].style.opacity=1
    }
    setRating(value)
  };

  return (
    <>
      <span
        className="flex flex-wrap bg-black p-3 input"
        style={{ cursor: "pointer" }}
      >
        <AiFillStar
          className="ratingForReview"
          data-setlight={1}
          onClick={()=>onOffStars(1)}
          color="yellow"
        />
        <AiFillStar
          className="ratingForReview"
          data-setlight={1}
          onClick={()=>onOffStars(2)}
          color="yellow"
        />
        <AiFillStar
          className="ratingForReview"
          data-setlight={1}
          onClick={()=>onOffStars(3)}
          color="yellow"
        />
        <AiFillStar
          className="ratingForReview"
          data-setlight={1}
          onClick={()=>onOffStars(4)}
          color="yellow"
        />
        <AiFillStar
          className="ratingForReview"
          data-setlight={1}
          onClick={()=>onOffStars(5)}
          color="yellow"
        />
      </span>
    </>
  );
};

export default Star;
