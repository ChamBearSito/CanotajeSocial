import { createEvent } from "../../api";
import React, { useContext, useEffect, useState } from "react";
import { getAllPlaces } from "../../api";
import { LoginContext } from "../../context/Login";

const RellenoModalEvento = ({setTheEvents,theEvents}) => {
  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await getAllPlaces();
      setThePlaces(response.data);
    };

    fetchPlaces().then().catch((err)=>console.log(err));
  }, []);

  const {logedUser}=useContext(LoginContext);
  const [fileImage,setFileImage]=useState();

  const [thePlaces,setThePlaces]=useState([]);
  const [event, setEvent] = useState({
    userId:logedUser.id,
    placeId: 0,
    name: "",
    images: [{url:"https://via.placeholder.com/300"}],
    description: "",
    date: "2023-05-27",
  });

  const addEvent = async (pEvent) => {
    const response = await createEvent(pEvent);
    if(response.status==201){
      const EventsResfresh=[response.data,...theEvents]
      setTheEvents(EventsResfresh);
      alert("Is susscesfully!");
    }else{
      alert('Hubo un error!')
    }
    setEvent({
      userId:logedUser.id,
      placeId: 0,
      name: "",
      images: [{url:"https://via.placeholder.com/300"}],
      description: "",
      date: "2023-05-27",
    })
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    upload(event)
  };

  const onAddEvent = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const element = e.target.id;
    setEvent({ ...event, [element]: value });
  };

  const CLOUD_NAME = "ddk8ydo51";
  const UPLOAD_PRESET = "u2skitgq";

  const upload = async (event) => {
    const data2 = new FormData();
    data2.append("file", fileImage);
    data2.append("upload_preset", UPLOAD_PRESET);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: "POST", body: data2 }
    );
    const data3 = await response.json();
    let eventActualized={ ...event, images: [{ url: `${data3.secure_url}` }] }   
    addEvent(eventActualized)
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form
        onSubmit={handleAddEvent}
      >
        <h1 className="mb-3">Agregar Evento</h1>

        <div className="grid grid-cols-2 gap-5 mb-4">
          <div className="col-span-2  sm:col-span-1">
            <label>Nombre del Evento</label>
            <input
              type="text"
              className="input input-bordered input-info w-full max-w-xs mt-2"
              placeholder="Remen Muchachos"
              value={event.name} 
              onChange={onAddEvent} 
              id='name'
            />
            <div className="mt-7">
              <label>Fecha</label>
              <input
                type="date"
                className="input input-bordered input-info  w-full max-w-xs mt-2"
                id="date"
                value={event.date} 
                onChange={onAddEvent}
              />
            </div>
          </div>

          <div className="col-span-2  sm:col-span-1">
            <label>Ubicación</label>
            <input type="text"
              className="input input-bordered input-info w-full  mt-2"
              placeholder="Club Nautico...." list="brow"
              id="placeId"
              onChange={onAddEvent} />
            <datalist id="brow">
              {thePlaces && thePlaces.map((aPlace)=>(
                <option key={aPlace.id} value={aPlace.id} >{aPlace.name} | {aPlace.location}</option>
              ))}
            </datalist>
            <div className="mt-6">
              <label>Descripción</label>

              <textarea
                placeholder="La Nueva Fiesta del Canotaje esta a la vuelta de la Boya, acompañanos..."
                className="input input-bordered input-info mt-2 p-3 w-full  py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset h-40 sm:text-sm sm:leading-6 "
                value={event.description} 
                onChange={onAddEvent} 
                id="description"
              ></textarea>
            </div>
          </div>

          <div className="col-span-2  sm:col-span-2">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs" 
              id="image"
              onChange={(e)=>{setFileImage(e.target.files[0])}}
            />
          </div>
        </div>

        <hr className="input-info" />

        <div className="grid-cols-1">
          <div className="col-span-1 sm:text-end text-center">
            <button
              type="submit"
              htmlFor="my-modal-4"
              id="my-modal-3"
              className="inline-flex btn btn-info w-20 text-end mt-4 rounded-md py-2 px-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <label htmlFor="my-modal-4">Publicar</label>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RellenoModalEvento;
