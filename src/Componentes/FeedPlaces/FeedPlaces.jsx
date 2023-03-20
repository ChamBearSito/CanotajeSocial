import React, { useState, useEffect, useContext } from "react";
import { getAllPlaces, getAllEvents } from "../../api";
import PubLugar from "../Pub_Lugar/pubLugar";
import { getAPlace } from "../../api";
import DetailsPlaces from "../ParaDetailplace/DetailsPlaces";
import { SearchContext } from "../../context/SearchContext";

const FeedPlaces = ({thePlaces, setThePlaces}) => {
  const { placesFilter } = useContext(SearchContext);

  const [modalPlace, setModalPlace] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [theEvents, setTheEvents] = useState([]);
 
  const [filterEvents, setFilterEvents] = useState([]);

  const filterEventsArray = () => {
    let eventFilterArray = [];
    theEvents.map((aEvent) => {
      if (aEvent.placeId == modalPlace.id) {
        eventFilterArray.push(aEvent);
      }
    });
    setFilterEvents(eventFilterArray);
  };

  useEffect(() => {
    filterEventsArray();
  }, [isOpen]);

  const getEvents = async () => {
    const response = await getAllEvents();
    setTheEvents(response.data);
  };

  useEffect(() => {
    
    getEvents()
      .then()
      .catch((err) => console.log(err));
  }, []);

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
    {thePlaces &&
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
      }
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
