import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { LoginContext } from "../../context/Login";
import FeedPlaces from "../FeedPlaces/FeedPlaces";
import "./principal.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import {
  BsFillPatchPlusFill,
  BsCalendarCheck,
  BsCalendarCheckFill,
} from "react-icons/bs";
import RellenoModal from "../ParaSubidaPlace/RellenoModal";
import RellenoModalEvento from "../ParaSubirEvento/RellenoModalEvento";
import { getAllEvents, getAllPlaces } from "../../api";

const PaginaPrincipal = () => {
  // Traemos getFavoritesXUser y logedUser de LoginContext
  const { getFavoritesXUser } = useContext(LoginContext);
  const { logedUser } = useContext(LoginContext);
  //Creamos estados para los places y events inicializandolos como Array 
  const [thePlaces, setThePlaces] = useState([]);
  const [theEvents, setTheEvents] = useState([]);
  //estado Para ShowEvents siendo false
  const [showEvents, setShowEvents] = useState(false);

  //Seteamos los estados inicializados como array para mandarle todos los places y events
  const getThePlaces = async () => {
    const response = await getAllPlaces();
    setThePlaces(response.data.reverse());
  };

  const getTheEvents = async () => {
    const response = await getAllEvents();
    setTheEvents(response.data.reverse());
  };

  useEffect(()=>{
    getFavoritesXUser(logedUser.id)
  },[logedUser])

  useEffect(() => {
    getThePlaces();
    getTheEvents();
  }, []);

  return (
    <>
      <Layout>
        {logedUser.id && (
          <>
            <div className="toolBar">
              <div className="toolsIcons">
                <label htmlFor="my-modal-3">
                  <div className="createPlace">
                    <BsFillPlusCircleFill />
                    <p>Create Place</p>
                  </div>
                </label>
                <div
                  className="createPlace"
                  onClick={()=>setShowEvents(!showEvents)}
                >
                  {showEvents ? 
                    <>
                      <BsCalendarCheckFill/>
                      <p>Show Places</p>
                    </>
                   : 
                    <>
                      <BsCalendarCheck />
                      <p>Show Events</p>
                    </>
                  }
                </div>
                <label htmlFor="my-modal-4">
                  <div className="createEvent">
                    <BsFillPatchPlusFill />
                    <p>Create Event</p>
                  </div>
                </label>
              </div>
            </div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal" style={{ zIndex: 10001 }}>
              <div className="modal-box relative max-w-screen-md border-2 border-info">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2 input-info"
                >
                  ✕
                </label>
                <RellenoModal
                  thePlaces={thePlaces}
                  setThePlaces={setThePlaces}
                />
              </div>
            </div>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal" style={{ zIndex: 10001 }}>
              <div className="modal-box relative max-w-screen-md border-2 border-info">
                <label
                  htmlFor="my-modal-4"
                  className="btn btn-sm btn-circle absolute right-2 top-2 input-info"
                >
                  ✕
                </label>
                <RellenoModalEvento
                  thePlaces={thePlaces}
                  theEvents={theEvents}
                  setTheEvents={setTheEvents}
                  setThePlaces={setThePlaces}
                />
              </div>
            </div>
          </>
        )}
        <FeedPlaces
          turnShowEvents={showEvents}
          thePlaces={thePlaces}
          getThePlaces={getThePlaces}
          setThePlaces={setThePlaces}
          theEvents={theEvents}
          getTheEvents={getTheEvents}
        />
      </Layout>
    </>
  );
};

export default PaginaPrincipal;
