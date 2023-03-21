import React, { useState } from "react";
import Pub_Review from '../Pub_Review/pubReview'

const Comment = ({ onComment,listComments }) => {
  const [comment, setComment] = useState("");
  const [theComments,setTheComments]=useState(listComments)

  const handleSubmit = (e) => {
    e.preventDefault();
    onComment(comment);
    setComment("");
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
      <div>
        {listComments.map((aComment)=>(
          <Pub_Review comment={aComment}/>
        ))}
      </div>
    </div>
  );
};

export default Comment;
