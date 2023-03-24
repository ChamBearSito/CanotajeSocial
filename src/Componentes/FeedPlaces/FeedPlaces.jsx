import React, { useState, useEffect, useContext } from "react";
import { getAllComments } from "../../api";
import PubLugar from "../Pub_Lugar/pubLugar";
import Event from "../Event/Event";
import DetailsPlaces from "../ParaDetailplace/DetailsPlaces";
import { SearchContext } from "../../context/SearchContext";
import Comment from "../Comment/Comment";
import { LoginContext } from "../../context/Login";

const FeedPlaces = ({
  thePlaces,
  setThePlaces,
  turnShowEvents,
  theEvents,
  getThePlaces,
  getTheEvents,
}) => {
  const [theComments, setTheComments] = useState([]);
  const [commentCharged, setCommentCharged] = useState([]);
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [currentComment, setCurrentComment]=useState();

  const getAllTheComents = async () => {
    const response = await getAllComments();
    setTheComments(response.data);
    return response.data;
  };

  const chargeComments = async(eventId, chargeAll) => {
    let arrayFilter = [];
    let response=[...theComments];
    if (chargeAll == true) {
      response=await getAllTheComents();
    }
    response.map((aComment) => {
      if (aComment.eventId == eventId) {
        const myComment = {
          comment: aComment,
        };
        arrayFilter.push(myComment);
      }
    });
    // seteamos el filtrerComent y lo cargamos con el array
    setCurrentComment(eventId);
    setCommentCharged(arrayFilter);
  };

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

  useEffect(() => {
    getAllTheComents()
      .then()
      .catch((err) => console.log(err));
  }, []);

  //cada vez que cambie e IsOpen se LLama al filtrador
  useEffect(() => {
    filterEventsArray();
  }, [isOpen]);

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
    <div>
      {/* si ThePlces Exite  y turnShowEvents es false entonces por cada place genera la Publicacion */}
      {thePlaces && turnShowEvents == false && (
        <div style={mystyle}>
          {thePlaces.map((aPlace) => (
            <PubLugar
              key={aPlace.id}
              getThePlaces={getThePlaces}
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
          {theEvents.map((aEvent) => 
          (
            <>
              <Event
                key={`${aEvent.id}e`}
                theEvent={aEvent}
                isOpenComment={isOpenComment}
                setIsOpenComment={setIsOpenComment}
                chargeComments={chargeComments}
                getTheEvents={getTheEvents}
              />
            </>
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
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative w-fit border-2 border-info">
              <label
                htmlFor="my-modal-5"
                className="btn btn-sm btn-circle absolute right-2 top-2 input-info"
              >
                ✕
              </label>
              <Comment
                key={currentComment}
                chargeComments={chargeComments}
                eventId={currentComment}
                listComments={commentCharged}
              />
            </div>
          </div>
    </div>
  );
};

export default FeedPlaces;
