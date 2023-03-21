import React, { useContext, useEffect, useState } from "react";
import fotoano from "../../assets/img/perfil1.jpg";

import { getAPlace, getAUser, addFavorite } from "../../api";
import { FaRegComment } from "react-icons/fa";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import Comment from "../Comment/Comment";
import Review from "../Review/Review";
import { LoginContext } from "../../context/Login";

const Event = ({ theEvent }) => {
  const { logedUser } = useContext(LoginContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [placeXEvent, setPlaceXEvent] = useState({});
  const [userXEvent, setUserXEvent] = useState({
    name: "The",
    lastName: "Anonimous",
  });

  const saveFavorite = async () => {
    try {
      const favorite = {
        userId: logedUser.id,
        placeId: placeXEvent.id,
        eventId: theEvent.id,
      };
      const response = await addFavorite(favorite);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getPlaceXEvent = async () => {
    const response = await getAPlace(theEvent.placeId);
    setPlaceXEvent(response.data);
  };

  const getUserXEvent = async () => {
    if (theEvent.userId != null) {
      const response = await getAUser(theEvent.userId);
      setUserXEvent(response.data);
    }
  };

  useEffect(() => {
    getPlaceXEvent()
      .then()
      .catch((err) => console.log(err));
    getUserXEvent()
      .then()
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className=" p-4 ">
        <div className="bg-white card rounded-xl max-w-md border-2 border-info">
          <div className="flex items-center px-4 py-3">
            <img className="h-16 w-16 rounded-full" src={fotoano} />
            <div className="ml-3 ">
              <span className="text-sm font-semibold antialiased block leading-tight">
                {userXEvent.name} {userXEvent.lastName}
              </span>
              <span className="text-gray-600 text-xs block">
                {placeXEvent.location}{" "}
              </span>
            </div>
            <div className=" ml-5 sm:ml-44">
              {/* Para Favotiros */}
              <button onClick={() => saveFavorite()} className="cursor-pointer">
                <BsFillBookmarkStarFill fill="gold" size={30} />
              </button>
            </div>
          </div>

          <hr />
          <div className="text-center">
            <h1>{theEvent.name}</h1>
          </div>
          {theEvent.images[0] ? (
            <img src={theEvent.images[0].url} />
          ) : (
            <img src={"https://via.placeholder.com/150"} />
          )}
          <div className="flex flex-wrap gap-5 items-center justify-between mx-4 mt-3 mb-2">
            {/* LA DESCRIPCION */}
            <div>
              {/* El encabezado del acordeón */}
              <button
                className="flex  w-full px-4 py-2  font-bold  input input-bordered btn input-info"
                onClick={() => setIsOpen(!isOpen)}
              >
                {" "}
                Descripción
              </button>
              {isOpen && (
                <div className="px-4 py-2 text-gray-700 bg-white">
                  {theEvent.description}
                </div>
              )}
            </div>

            {/* FIN DESCRIPCION */}

            {/* Fecha */}
            <div>
              {/* El encabezado del acordeón */}
              <button
                className="flex  w-full px-4 py-2  font-bold  input input-bordered btn input-info"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                {" "}
                Fecha
              </button>
              {/* El contenido del acordeón */}
              {isOpen2 && (
                <div className="px-4 py-2 text-gray-700 bg-white">
                  {theEvent.date}
                </div>
              )}
            </div>
            {/* FIN Fecha */}
            <div className="mx-auto ">
              <label htmlFor="my-modal-6" className="cursor-pointer">
                <AiOutlineStar fill="back" size={40} />
              </label>
            </div>

            <div className="mx-auto ">
              <label htmlFor="my-modal-5" className="cursor-pointer">
                <FaRegComment fill="black" size={40} />
              </label>
            </div>
          </div>

          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative w-fit border-2 border-info">
              <label
                htmlFor="my-modal-5"
                className="btn btn-sm btn-circle absolute right-2 top-2 input-info"
              >
                ✕
              </label>
              <Comment />
            </div>
          </div>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative w-fit border-2 border-info">
              <label
                htmlFor="my-modal-6"
                className="btn btn-sm btn-circle absolute right-2 top-2 input-info"
              >
                ✕
              </label>
              <Review />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
