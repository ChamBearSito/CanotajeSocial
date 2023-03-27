import React, { useEffect, useState } from "react";
import {getAUser} from '../../api'

const TrueComment = ({aComment}) => {
  //Componente para mostrar comentarios 
  const [commentUser, setCommentUser]=useState({
    name:'The',
    lastName:'Anonimous'
  });

  const getTheUser=async(pId)=>{
    const theUser=await getAUser(pId)
    setCommentUser(theUser.data);
  }

  useEffect(()=>{
    getTheUser(aComment.comment.userId).then().catch((err)=>console.log(err))
  },[])

  return (
    <div key={aComment.comment.id} className="flex flex1 flex-wrap">
      <div className="">
        {commentUser.name} {commentUser.lastName}:
      </div>
      <div className="ml-3">{aComment.comment.comment}</div>
    </div>
  );
};

export default TrueComment;
