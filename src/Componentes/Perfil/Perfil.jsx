import React, { useEffect, useState, useContext } from "react";

import Logo from "../../assets/img/CannotExpress.png";

import { BsFillCalendarPlusFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

import { RxBookmarkFilled } from "react-icons/rx";
import { BsGearWideConnected } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import DetailEvent from "../ParaDetailEvent/DetailEvent";

import { Link, useParams } from "react-router-dom";
import { getAUser, getAllPlacesForUser, getAllEventsForUser } from "../../api";
import { ImageContext } from "../../context/Estadofoto";
import Footer from "../Footer/Footer";
import UsuarioInformacion from "../InfoUsuario/UsuarioInformacion";
import { LoginContext } from "../../context/Login";
import DetailsPlaces from "../ParaDetailplace/DetailsPlaces";
import { getAPlace, getAEvent, getAllEvents } from "../../api";

const Perfil = (props) => {
  //para abrir modal de evento en el perfil
  const [modalEvent, setModalEvent] = useState({});
  const [isOpenEvent, setIsOpenEvent] = useState(false);

  //para mostrar los favoritos del userloged
  const { getFavoritesXUser } = useContext(LoginContext);
  const { favoritesUser } = useContext(LoginContext);

  //para encontrar datos del usuario y los places,eventos que creo
  const [theUser, setTheUser] = useState({});
  const [thePlaces, setThePlaces] = useState([]);
  const [theEvents, setTheEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  //para mostrar modal place en el perfil
  const [modalPlace, setModalPlace] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  //datos para encontrar al usuario del perfil
  const { pId } = useParams();
  const { image, setImage } = useContext(ImageContext);
  const { logedUser, users } = useContext(LoginContext);

  //variable para mostrar datos del perfil
  //places, eventos y favoritos
  const [thePage, setThePage] = useState({
    pageActually: "pagePlace",
  });

  //filtrar eventos que pertenecen al place abierto en modal
  const [filterEvents, setFilterEvents] = useState([]);
  //metodo para filtrar los eventos
  const filterEventsArray = () => {
    let eventFilterArray = [];
    allEvents.map((aEvent) => {
      if (aEvent.placeId == modalPlace.id) {
        eventFilterArray.push(aEvent);
      }
    });
    setFilterEvents(eventFilterArray);
  };

  useEffect(() => {
    filterEventsArray();
  }, [modalPlace]);

  const getEvents = async () => {
    const response = await getAllEvents();
    setAllEvents(response.data);
  };
  //variable para guardar los favoritos
  const [savePubs, setSavePubs] = useState([]);

  //metodo para cambiar lo que se muestra en el perfil
  const onChangePage = (e) => {
    const value = e.target.value;
    setThePage({ pageActually: value });
  };

  //buscar los favoritos del usuario 
  //igualmente aca funciona con solo logedUser ya que
  //no se deberia poder buscar los favoritos de otra cuenta
  const chargeFavorites = async () => {
    await getFavoritesXUser(logedUser ? logedUser.id : pId);
    if (favoritesUser) {
      let response;
      let saveArray = [];
      favoritesUser.map(async (aFav) => {
        if (!aFav.eventId) {
          response = await getAPlace(aFav.placeId);
        } else {
          response = await getAEvent(aFav.eventId);
        }
        saveArray.push(response.data);
      });
      setSavePubs(saveArray);
    }
  };

  const chargeEventsXuser = async () => {
    const response = await getAllEventsForUser(pId);
    setTheEvents(response.data);
  };

  const searchTheUser = async (pId) => {
    const response = await getAUser(pId);
    setTheUser(response.data);
  };

  const chargeThePubs = async (pId) => {
    const response = await getAllPlacesForUser(pId);
    setThePlaces(response.data);
  };

  //useEffect para cargar datos del perfil
  useEffect(() => {
    if (logedUser.id == pId) {
      setTheUser(logedUser);
    } else {
      searchTheUser(pId)
        .then()
        .catch((err) => console.log(err));
    }

    chargeFavorites();

    getEvents()
      .then()
      .catch((err) => console.log(err));
    chargeEventsXuser()
      .then()
      .catch((err) => console.log(err));
    filterEventsArray();
    chargeThePubs(pId)
      .then()
      .catch((err) => console.log(err));
  }, []);

  //cerrar modal
  const closeModal = () => {
    document.getElementById("my-modal-3").checked = false;
    turnScrollIn();
  };

  //metodo para que no scrolle en el modal de
  //ajustes del perfil
  const turnScrollIn = () => {
    const theModal = document.getElementById("my-modal-3");
    if (theModal.checked == true) {
      let y = window.pageYOffset;
      let x = window.pageXOffset;
      window.onscroll = () => {
        window.scrollTo(x, y);
      };
    } else {
      window.onscroll = function () {};
    }
  };

  const changeModalEvent = (aEvent) => {
    setModalEvent(aEvent);
    setIsOpenEvent(!isOpenEvent);
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      {logedUser.id == pId && (
        <>
          <input
            type="checkbox"
            id="my-modal-3"
            onChange={turnScrollIn}
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative border-2 border-info">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <UsuarioInformacion closeModal={closeModal} />
            </div>
          </div>
        </>
      )}
      <nav className="">
        <div className="grid grid-cols-12 text-center ">
          <div className="col-span-12  p-5 text-center">
            <h1 className=" text-xl sm:text-5xl">
              <img className="mx-auto w-44 sm:w-48" src={Logo} alt="" />
            </h1>
          </div>
          <div className="col-span-12  p-5 gap-1 sm:gap-x-20">
            <div className="flex flex-auto justify-center gap-1 sm:gap-x-60">
              <div className="col-span-3  justify-center  py-5">
                <Link to="/principal">
                  <button className="cursor-pointer hover:scale-110">
                    <AiOutlineHome className="logos" size={60} fill="white" />
                  </button>
                </Link>
              </div>
              {logedUser.id==pId && (
                <div className="col-span-3 justify-center py-5">
                  <button className="cursor-pointer  hover:scale-110">
                    <label htmlFor="my-modal-3">
                      <BsGearWideConnected
                        className="logos"
                        size={60}
                        fill="white"
                      />
                    </label>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-6">
        <div className="sm:col-span-6 col-span-6  text-center pt-5 pb-5">
          <div className="grid grid-cols-2 mx-5">
            <div className="col-span-2 flex justify-center">
              <img
                className=" w-40 h-40 rounded-full shadow shadow-white"
                src={image}
                alt=""
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <div className="gird grid-cols-2">
                <div className="col-span-2">
                  {" "}
                  <h2 className="text-2xl pt-4 pb-3 ">
                    {theUser.name} {theUser.lastName}
                  </h2>
                </div>
                <div className="col-span-2">
                  {" "}
                  <p>{theUser.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="">
        <div className="flex flex-auto justify-center gap-1 sm:gap-x-20">
          <div className="col-span-2  justify-center  py-5">
            <input
              type="radio"
              name="changePages"
              onClick={(e) => onChangePage(e)}
              id="pagePlaces"
              value="pagePlaces"
              className="modal-toggle"
            />
            <label htmlFor="pagePlaces">
              <BiMap
                className="logos cursor-pointer hover:scale-110"
                size={60}
                fill="white"
              />
            </label>
          </div>

          <div className="col-span-2 justify-center py-5">
            <input
              type="radio"
              onChange={(e) => onChangePage(e)}
              name="changePages"
              id="pageEvents"
              value="pageEvents"
              className="modal-toggle"
            />
            <label htmlFor="pageEvents">
              <BsFillCalendarPlusFill
                className="logos cursor-pointer hover:scale-110"
                size={60}
                fill="white"
              />
            </label>
          </div>
          {logedUser.id == pId && (
            <>
              <div className="col-span-2 justify-center py-5">
                <input
                  type="radio"
                  id="pageFavorites"
                  name="changePages"
                  value="pageFavorites"
                  className="modal-toggle"
                  onChange={(e) => onChangePage(e)}
                />
                <label htmlFor="pageFavorites">
                  <RxBookmarkFilled
                    className="logos cursor-pointer hover:scale-110"
                    size={60}
                    fill="white"
                  />
                </label>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Publicaciones  */}
      <div className="flex flex1 flex-wrap content-end gap-5 mx-4 my-4">
        {thePage.pageActually == "pagePlaces" &&
          thePlaces.map((aPlace) => {
            return (
              <div key={aPlace.id} style={{ width: "150px", height: "150px" }}>
                <label
                  onClick={() => {
                    setModalPlace(aPlace);
                    setIsOpen(!isOpen);
                  }}
                  htmlFor="my-modal-4"
                >
                  <div className="col-span-3 sm:col-span-1 card border-4 border-black cursor-pointer bg-base-100 shadow-xl ">
                    <figure>
                      {aPlace.images[0] &&
                      aPlace.images[0].url != "undefined" ? (
                        <img src={aPlace.images[0].url} className="card" />
                      ) : (
                        <img
                          src={"https://via.placeholder.com/150"}
                          className="card"
                        />
                      )}
                    </figure>
                  </div>
                </label>
                {/* Put this part before </body> tag */}
              </div>
            );
          })}
        {thePage.pageActually == "pageEvents" &&
          theEvents.map((aEvent) => (
            <div key={aEvent.id} style={{ width: "150px", height: "150px" }}>
              <h1 className="event-detail-title">{aEvent.name}</h1>
              <label
                onClick={() => changeModalEvent(aEvent)}
                htmlFor="my-modal-5"
              >
                {aEvent.images[0] && aEvent.images[0].url != "undefined" ? (
                  <img
                    src={aEvent.images[0].url}
                    className="event-detail-image"
                  />
                ) : (
                  <img
                    src={"https://via.placeholder.com/150"}
                    className="event-detail-image"
                  />
                )}
              </label>
            </div>
          ))}
        {logedUser.id == pId &&
          thePage.pageActually == "pageFavorites" &&
          savePubs.map((aFav) => (
            <div key={aFav.id} style={{ width: "150px", height: "150px" }}>
              <label
                onClick={() => {
                  aFav.placeId ? setModalEvent(aFav) : setModalPlace(aFav);
                  aFav.placeId
                    ? setIsOpenEvent(!isOpenEvent)
                    : setIsOpen(!isOpen);
                }}
                htmlFor={aFav.placeId ? "my-modal-5" : "my-modal-4"}
              >
                <div className="col-span-3 sm:col-span-1 card border-4 border-black cursor-pointer bg-base-100 shadow-xl ">
                  <figure>
                  {aFav.images[0] && aFav.images[0].url != "undefined" ? (
                  <img
                    src={aFav.images[0].url}
                    className="event-detail-image"
                  />
                ) : (
                  <img
                    src={"https://via.placeholder.com/150"}
                    className="event-detail-image"
                  />
                )}
                  </figure>
                </div>
              </label>
              {/* Put this part before </body> tag */}
            </div>
          ))}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box relative border-2 border-info">
            <label
              onClick={() => setIsOpen(!isOpen)}
              htmlFor="my-modal-4"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {modalPlace && (
              <DetailsPlaces
                events={filterEvents}
                place={modalPlace}
                isOpen={isOpen}
              />
            )}
          </div>
        </div>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box relative border-2 border-info">
            <label
              onClick={() => setIsOpenEvent(!isOpenEvent)}
              htmlFor="my-modal-5"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <DetailEvent aEvent={modalEvent} isOpen={isOpenEvent} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Perfil;
