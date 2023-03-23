import React, { useState,useEffect, useContext } from "react";
import { addComment } from "../../api";
import { LoginContext } from "../../context/Login";
import InputComment from "../InputComment/InputComment";
import TrueComment from "../TrueComment/TrueComment";

//recibimos el onComent y la lista de Comentarios 
const Comment = ({ listComments,eventId,chargeComments }) => {
  //Estado para comentario
  let elEvento=eventId;

  const handleSubmit = async(addCommentary) => {
    try{
      console.log('El Evento:',addCommentary.eventId)
      const response =async()=> await addComment(addCommentary)
      const theResult=await response();
      if(theResult.status==201){
        chargeComments(eventId,true)
      }
    }catch(err){
      console.log('error on Submit', err)
    }
  };

  return (
    <div style={{position:"relative",zIndex:10002}} onClick={()=>{console.log(elEvento)}}>
      <InputComment onSubmit={handleSubmit} eventId={elEvento}/>
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
