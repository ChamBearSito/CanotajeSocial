import React, { useEffect, useState, useContext } from "react";
import "../Pub_Lugar/pubLugar.css";
import { Link } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";
import { getAUser } from "../../api";
import { getAPlace, addFavorite } from "../../api";
import { LoginContext } from "../../context/Login";

const PubLugar = ({ place, setModalPlace, setIsOpen, isOpen }) => {
  const { logedUser } = useContext(LoginContext);
  const [theUser, setTheUser] = useState({});

  const saveFavorite=async()=>{
    try{
    const favorite={
      userId:logedUser.id,
      placeId:place.id,
      eventId:null
    }
    const response= await addFavorite(favorite)
    console.log(response);
    }catch(err){
      console.log(err);
    }
  }

  const searchTheUser = async (pId) => {
    const response = await getAUser(pId);
    setTheUser(response.data);
  };

  const getThePlace = async (pId) => {
    const response = await getAPlace(pId);
    setModalPlace(response.data);
  };

  useEffect(() => {
    if (place.userId == null) {
      setTheUser({
        name: "The",
        lastName: "Anonimous",
      });
    } else {
      searchTheUser(place.userId)
        .then()
        .catch((err) => console.log(err));
      getThePlace(1)
        .then()
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <article>
      <section className="place-container">
        <div className="place-header">
          <div className="place-header-perfil">
            <img className="place-photo-perfil" />
            <Link to={`/perfil/${theUser.id}`} className="justify-between">
              <span>
                @{theUser.name} {theUser.lastName}
              </span>
            </Link>
          </div>
          <div className="place-header-options">
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <BiDotsHorizontalRounded />
              </label>
              <ul
                tabIndex={0}
                style={{ zIndex: 10001 }}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                {logedUser.id ? (
                  <>
                    <li><button onClick={()=>saveFavorite()}>Guardar</button></li>
                    {logedUser.id == place.userId?
                    <>
                      <li>Editar</li>
                      <li>Borrar</li>
                    </>: null
                    }
                  </>
                ) : (
                  <>
                    <Link
                      to={`/login`}
                      className="justify-between"
                    >
                      <li>Guardar</li>
                    </Link>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="place-datos">
          <h1 className="place-title">{place.name}</h1>
          <label
            onClick={() => {
              setModalPlace(place);
              setIsOpen(!isOpen);
            }}
            htmlFor="my-modal-5"
          >
            <img src={place.images[0].url} className="place-image" />
          </label>
        </div>
        <div className="place-footer">
          <div className="place-footer-comments">
            <BiMessageRounded />
          </div>
          <div className="place-rating-global">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </section>
      <section>{/* Lista de Reviews */}</section>
    </article>
  );
};

export default PubLugar;
