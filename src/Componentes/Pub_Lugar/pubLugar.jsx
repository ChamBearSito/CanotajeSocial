import React, { useEffect, useState, useContext } from "react";
import "../Pub_Lugar/pubLugar.css";
import { Link } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";
import { getAUser, deletePlace } from "../../api";
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from "react-icons/bs";
import { deleteFavorite, addFavorite, getAllComments } from "../../api";
import { LoginContext } from "../../context/Login";
import Comment from "../Comment/Comment";
import EditPlace from "../EditPlaceuEvent/EditPlace";

const PubLugar = ({
  place,
  setModalPlace,
  setIsOpen,
  isOpen,
  getThePlaces,
  isOpenReview,
  setIsOpenReview,
  chargeReviews
}) => {
  const { logedUser } = useContext(LoginContext);
  const [theUser, setTheUser] = useState({});
  const [isOpenComment, setIsOpenComment] = useState(false);

  const [savedFav, setSavedFav] = useState({
    status: false,
    favId: "",
  });

  const { favoritesUser } = useContext(LoginContext);

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
      if (aFav.placeId == place.id) {
        setSavedFav({
          status: true,
          favId: aFav.id,
        });
      }
    });
  };

  const saveFavorite = async () => {
    try {
      const favorite = {
        userId: logedUser.id,
        placeId: place.id,
        eventId: null,
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

  const deleteAPlace = async (pId) => {
    let respuest = window.confirm("Esta seguro de borrar?");
    if (respuest) {
      const response = await deletePlace(pId);
      if (response.status == 200) {
        await getThePlaces();
        alert("Se elimino!");
      } else alert("Algo salio mal!");
    }
  };

  const searchTheUser = async (pId) => {
    const response = await getAUser(pId);
    setTheUser(response.data);
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
    }
    checkIsFavorite();
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
            {logedUser.id && (
              <>
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
              </>
            )}
            <div className="dropdown dropdown-end">
              {logedUser.id == place.userId ? (
                <label tabIndex={0}>
                  <BiDotsHorizontalRounded />
                </label>
              ) : null}
              <ul
                tabIndex={0}
                style={{ zIndex: 10001 }}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                {logedUser.id ? (
                  <>
                    {logedUser.id == place.userId ? (
                      <>
<<<<<<< HEAD
                        <li>
                          <button>Editar</button>
                        </li>
                        <li>
                          <button onClick={() => deleteAPlace(place.id)}>
                            Borrar
                          </button>
                        </li>
=======
                        <li><button> 
                          
                          
                           <label htmlFor="editar">
                            Editar
                           </label>
                           
                           </button></li>

                           <input type="checkbox" id="editar" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-screen-md border-2 border-info">
          <label
            htmlFor="editar"
            className="btn btn-sm btn-circle absolute right-2 top-2 input-info"
          >
            ✕
          </label>
         <EditPlace/>
        </div>
      </div>






                        <li><button onClick={()=>deleteAPlace(place.id)}>Borrar</button></li>
>>>>>>> 587dd9c5c1409f3807b1eea403dcb02087abdaf0
                      </>
                    ) : null}
                  </>
                ) : (
                  <>
                    <Link to={`/login`} className="justify-between">
                      <li>Guardar</li>
                    </Link>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="place-datos">
          <hr />
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
            <label
              onClick={() => setIsOpenComment(!isOpenComment)}
              htmlFor="my-modal-comment"
            >
              <BiMessageRounded />
            </label>
          </div>
          <label htmlFor="my-modal-6" className="cursor-pointer">
            <div
              style={{
                width: "125px",
                height: "25px",
                position: "absolute",
                right: "0",
                zIndex: 10003,
              }}
              onClick={() => {
                chargeReviews(place.id, "place");
                setIsOpenReview(!isOpenReview);
              }}
            ></div>
          </label>
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
                className={`mask mask-star-2 bg-orange-400 `}
                id={`rating-review-${place.id}`}
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
