import React, { useEffect, useState } from "react";
import { BsWindowSidebar } from "react-icons/bs";
import { useParams } from "react-router-dom";
import DetailEvent from "../ParaDetailEvent/DetailEvent";
import "./DetailPlaces.css";

const DetailsPlaces = ({ place, isOpen, events }) => {
  const [modalEvent, setModalEvent] = useState({});
  const [isOpenEvent, setIsOpenEvent] = useState(false);

  const changeModalEvent=(aEvent)=>{
    setModalEvent(aEvent);
    setIsOpenEvent(!isOpenEvent);
  }

  return (
    <>
      <h3 className="text-lg font-bold">Detalles del Lugar</h3>
      {isOpen && (
        <>
          <div className="m-5  text-center">
            <h2 className="text-lg font-bold">{place.name}</h2>

            <div className="text-center">
              <div className="card-body text-center">
                <div>
                  <img
                    className=" mx-auto shadow-md shadow-info"
                    src={place.images[0].url}
                    height={100}
                    width={300}
                    alt=""
                  />
                </div>

                <div>{place.location}</div>
                <div>{place.description}</div>
                <div>{place.waterType}</div>
                <div style={{pointerEvents: 'none'}}>
                  <div className="rating gap-2 mt-1">
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
            </div>
          </div>

          <h3 className="text-lg font-bold">Eventos</h3>

          <div className="event-detail-list">
            {events && events.map((aEvent) => (
              <div key={aEvent.id} className="event-detail-datos">
                <h1 className="event-detail-title">{aEvent.name}</h1>
                <label onClick={() => changeModalEvent(aEvent)} htmlFor="my-modal-6">
                  
                  {aEvent.images[0] ? 
                  <img
                    src={aEvent.images[0].url}
                    className="event-detail-image"
                  />:<img
                  src={"https://via.placeholder.com/150"}
                  className="event-detail-image"
                />}
                  
                </label>
              </div>
            ))}
            
            {isOpenEvent &&<>
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div id="my-modal-event" className="modal" style={{ zIndex: 10001 }}>
                <div className="modal-box relative border-2 border-info">
                  <label
                    onClick={() => setIsOpenEvent(!isOpenEvent)}
                    htmlFor="my-modal-6"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <DetailEvent
                    aEvent={modalEvent}
                    isOpen={isOpenEvent}
                  />
                </div>
              </div>
              </>
              }
          </div>
        </>
      )}
    </>
  );
};

export default DetailsPlaces;
