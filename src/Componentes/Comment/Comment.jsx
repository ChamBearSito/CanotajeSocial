import React, { useState } from "react";

const Comment = ({ onComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onComment(comment);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Comment;
