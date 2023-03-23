import React,{useState,useContext} from 'react'
import { LoginContext } from '../../context/Login';

const InputComment = (props,{eventId}) => {
  const {logedUser}=useContext(LoginContext);
  const [comment, setComment] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    const addCommentary={
      userId:logedUser.id,
      eventId:eventId,
      comment:comment
    }
    props.onSubmit(addCommentary)
  }

  return (
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
            onChange={(e) => {setComment(e.target.value)
              console.log('Escribiendo en...',eventId)}}
          ></textarea>
          <button
            className="btn btn-info mt-3 hover:scale-110 transition duration-300 "
            type="submit"
          >
            Comentar
          </button>
        </div>
      </form>
  )
}

export default InputComment