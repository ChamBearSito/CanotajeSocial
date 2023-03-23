import React, { useState,useEffect } from "react";
import { getAUser } from "../../api";
import Pub_Review from '../Pub_Review/pubReview'
import TrueComment from "../TrueComment/TrueComment";

//recibimos el onComent y la lista de Comentarios 
const Comment = ({ listComments }) => {
  const [comment, setComment] = useState("");//Estado para comentario
  const [theComments,setTheComments]=useState([])//Estado Para Lista de Cometrarios y le asignamos la lista

  const handleSubmit = (e) => {
    e.preventDefault();
  };



  return (
    <div style={{position:"relative",zIndex:10002}}>
      <form onSubmit={handleSubmit} style={{color:"#fff",}}>
        <label>
          {" "}
          <h1>Add a comment</h1>
        </label>
        <div className="flex flex1 flex-wrap sm:flex-nowrap items-center sm:items-end gap-5">
          <textarea
            className="border-2 border-info max-w-xs h-24 w-full input input-bordered"
            cols="30"
            rows="20"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className="btn btn-info mt-3 hover:scale-110 transition duration-300 "
            type="submit"
          >
            Comentar
          </button>
        </div>
      </form>
      <div className="mt-5">
        {/* Recorremos la lista y por cada uno creamos Pub_Review */}
        {listComments.map((aComment)=>
        (
          <TrueComment key={aComment.comment.id} aComment={aComment}/>
        ))}
      </div>
    </div>
  );
};

export default Comment;
