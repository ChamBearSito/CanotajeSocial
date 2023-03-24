import React, { useContext, useEffect, useState } from "react";
import foto from "../../assets/img/perfil1.jpg";
import "./Event.css";

import {
  getAPlace,
  getAUser,
  addFavorite,
  deleteEvent,
  deleteFavorite,
} from "../../api";
import { FaRegComment } from "react-icons/fa";
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { LoginContext } from "../../context/Login";

//Traemos el TheEvent
const Event = ({
  theEvent,
  setIsOpenComment,
  isOpenComment,
  chargeComments,
  getTheEvents,
  chargeReviews,
  setIsOpenReview,
  isOpenReview
}) => {
  //Traemos el logedUser de su Context
  const { logedUser } = useContext(LoginContext);
  //Acordiones
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  //
  const [savedFav, setSavedFav] = useState({
    status: false,
    favId: "",
  });

  const { favoritesUser } = useContext(LoginContext);

  // estado para abrir Boton de Editar o Borrar
  const [editarborrar, seteditarborrar] = useState(false);

  //estado para el Evento de xPlace
  const [placeXEvent, setPlaceXEvent] = useState({});

  //estado que es un objeto para el UserxEvent
  const [userXEvent, setUserXEvent] = useState({
    name: "The",
    lastName: "Anonimous",
  });

  const { getFavoritesXUser } = useContext(LoginContext);
  // llamamos a la funcion de la api de getAllComents, cramos un arrayFiltrer, entonces por cada comentario
  //si el comentario.placeId es igual al theEvent.id entonces que a ese comentario lo guarde en el array

  //creamos favorite con UserId,placeIdm y EventId, luego llamamos a la api para agregar favorito
  const saveFavorite = async () => {
    try {
      const favorite = {
        userId: logedUser.id,
        placeId: placeXEvent.id,
        eventId: theEvent.id,
      };
      const response = await addFavorite(favorite);
      if (response.status == 201) {
        setSavedFav({
          status: true,
          favId: response.data.id,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteOfFavorites = async () => {
    try {
      const response = await deleteFavorite(savedFav.favId);
      if (response.status == 200) {
        setSavedFav({
          status: false,
          favId: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkIsFavorite = async () => {
    favoritesUser.map((aFav) => {
      if (aFav.eventId == theEvent.id) {
        setSavedFav({
          status: true,
          favId: aFav.id,
        });
      }
    });
  };

  // Obtenemos el Place mandandole el placeId, y seteamos el PlaceXEvent con la respuesta
  const getPlaceXEvent = async () => {
    const response = await getAPlace(theEvent.placeId);
    setPlaceXEvent(response.data);
  };

  // Si el userId de TheEvent es distinto a Nulll entonces llame a la api y setie la respuesta
  const getUserXEvent = async () => {
    if (theEvent.userId != null) {
      const response = await getAUser(theEvent.userId);
      setUserXEvent(response.data);
    }
  };

  const deleteAEvent = async (pId) => {
    let respuest = window.confirm("Esta seguro de borrar?");
    if (respuest) {
      const response = await deleteEvent(pId);
      if (response.status == 200) {
        getTheEvents();
        alert("Se elimino!");
      } else alert("Algo salio mal!");
    }
  };

  //Para hacer bajar opciones al hacer click
  const toggleDropdown = () => {
    seteditarborrar(!editarborrar);
  };

  //Cada vez que se Monte el componente que llame a las funciones de getPlaceXEvent, getUserXEvent(), chargeComments()
  //y si hay algun error que lo muyestre
  useEffect(() => {
    getPlaceXEvent()
      .then()
      .catch((err) => console.log(err));
    if (theEvent.userId == null) {
      setUserXEvent({
        name: "The",
        lastName: "Anonimous",
      });
    } else {
      getUserXEvent(theEvent.userId)
        .then()
        .catch((err) => console.log(err));
    }
    chargeComments(theEvent.id, true);
    chargeReviews(theEvent.id, "event", true);
    checkIsFavorite();
  }, []);

  return (
    <>
      <div className=" p-2 ">
        <div
          style={{ width: "400px", height: "auto" }}
          className="bg-white card rounded-xl max-w-md border-2 border-info"
        >
          <div className="flex items-center px-4 py-3">
            <img className="h-16 w-16 rounded-full" src={foto} />
            <div className="ml-3 ">
              <span className="text-sm font-semibold antialiased block leading-tight w-20">
                {userXEvent.name} {userXEvent.lastName}
              </span>
              <span className="text-gray-600 text-xs block">
                {placeXEvent && placeXEvent.location}
              </span>
            </div>
            <div className=" ml-5 absolute right-5">
              {/* Para Favotiros */}
              {savedFav.status ? (
                <button
                  onClick={() => {
                    deleteOfFavorites();
                  }}
                  className="cursor-pointer"
                >
                  <BsFillBookmarkDashFill fill="red" size={30} />
                </button>
              ) : (
                <button
                  onClick={() => saveFavorite()}
                  className="cursor-pointer"
                >
                  <BsFillBookmarkPlusFill fill="gold" size={30} />
                </button>
              )}

              {logedUser.id == theEvent.userId && (
                <>
                  <button onClick={toggleDropdown}>
                    <BsFillArrowDownCircleFill size={30} />
                  </button>
                  {editarborrar && (
                    <div className="absolute right-0">
                      <ul
                        tabIndex={0}
                        style={{ zIndex: 10001 }}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li className="justify-between">
                          <button onClick={() => {}}>Editar</button>
                        </li>
                        <li className="justify-between">
                          <button onClick={() => deleteAEvent(theEvent.id)}>
                            Borrar
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <hr />
          <div className="text-center">
            <h1 className="">{theEvent.name}</h1>
          </div>
          <div style={{ height: "300px" }}>
            {theEvent.images[0] ? (
              <img className="event-image" src={theEvent.images[0].url} />
            ) : (
              <img
                className="event-image"
                src={"https://via.placeholder.com/150"}
              />
            )}
          </div>
          <div className="flex flex-wrap gap-5 items-center justify-between mx-4 mt-3 mb-2">
            {/* LA DESCRIPCION */}
            <div className={isOpen ? "w-full" : ""}>
              {/* El encabezado del acordeón */}
              <button
                className="flex w-full px-4 py-2  font-bold  input input-bordered btn input-info"
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
              <label
                htmlFor="my-modal-6"
                onClick={() => {
                  chargeReviews(theEvent.id, "event")
                  setIsOpenReview(!isOpenReview);
                }}
                className="cursor-pointer"
              >
                <AiOutlineStar fill="back" size={40} />
              </label>
            </div>

            <div className="mx-auto ">
              <label
                htmlFor="my-modal-5"
                onClick={() => {
                  chargeComments(theEvent.id);
                  setIsOpenComment(!isOpenComment);
                }}
                className="cursor-pointer"
              >
                <FaRegComment fill="black" size={40} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
