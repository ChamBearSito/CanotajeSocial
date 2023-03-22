import React, { useState, useEffect, useContext } from "react";
import { getAllPlaces, getAllEvents } from "../../api";
import PubLugar from "../Pub_Lugar/pubLugar";
import Event from '../Event/Event'
import { getAPlace } from "../../api";
import DetailsPlaces from "../ParaDetailplace/DetailsPlaces";
import { SearchContext } from "../../context/SearchContext";

const FeedPlaces = ({
  thePlaces,
  setThePlaces,
  turnShowEvents,
  theEvents,
  setTheEvents,
}) => {

  // Recibimos PlacesFiltrer de su Contexto
  const { placesFilter } = useContext(SearchContext);

  // Creamos Estado inicializandolo como Objeto
  const [modalPlace, setModalPlace] = useState({});
  //estado Para Abrir
  const [isOpen, setIsOpen] = useState(false);

  //Creamos Filtro inicializandolo como Array para guardar eventos
  const [filterEvents, setFilterEvents] = useState([]);


  //creamos un array para guardar los eventos filtrados,recorremos theEvents  y si aEvent.place.Id es igual a
  // el modalPlace.id entonces que ese evento se guarde en el array, luego seteamos ese array al filtrer Events
  const filterEventsArray = () => {
    let eventFilterArray = [];
    theEvents.map((aEvent) => {
      if (aEvent.placeId == modalPlace.id) {
        eventFilterArray.push(aEvent);
      }
    });
    setFilterEvents(eventFilterArray);
  };
//cada vez que cambie e IsOpen se LLama al filtrador
  useEffect(() => {
    filterEventsArray();
  }, [isOpen]);

  useEffect(() => {}, []);
//cada vez que cambie el PlacesFiltrer se setea Nuevamente el The places y le enviamos el placesFiltrer
  useEffect(() => {
    setThePlaces(placesFilter);
  }, [placesFilter]);

  const mystyle = {
    display: "Flex",
    justifyContent: "Center",
    gap: "5px",
    flexWrap: "Wrap",
    padding: "10px",
  };
  return (
    <>
    {/* si ThePlces Exite  y turnShowEvents es false entonces por cada place genera la Publicacion */}
      {thePlaces && turnShowEvents == false && (
        <div style={mystyle}>
          {thePlaces.map((aPlace) => (
            <PubLugar
              key={aPlace.id}
              place={aPlace}
              isOpen={isOpen}
              setModalPlace={setModalPlace}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      )}
       {/* si ThePlces Exite  y turnShowEvents es true entonces por cada evento muestre el evento */}
      {theEvents && turnShowEvents == true && (
        <div style={mystyle}>
          {theEvents.map((aEvent) => (
            <Event
              key={aEvent.id}
              theEvent={aEvent}
            />
          ))}
        </div>
      )}

      {isOpen && (
        <>
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal" style={{ zIndex: 10001 }}>
            <div className="modal-box relative border-2 border-info">
              <label
                onClick={() => setIsOpen(!isOpen)}
                htmlFor="my-modal-5"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <DetailsPlaces
                events={filterEvents}
                place={modalPlace}
                isOpen={isOpen}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FeedPlaces;
