import React,{useState} from "react";
import { updateEvent } from "../../api";

const EditEvent = ({ thePlaces,theEvent, getTheEvents,setIsOpenEditEvent,isOpenEditEvent }) => {

  const [editEvent, setEditEvent] = useState({ ...theEvent });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response= await updateEvent(editEvent)
      if(response.status==200){
        getTheEvents()
        alert("Se actualizo!")
      }
      else{
        alert("Hubo un error!")
      }
    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="mb-3">Editar Evento</h1>

        <div className="grid grid-cols-2 gap-5 mb-4">
          <div className="col-span-2  sm:col-span-1">
            <label>Nombre del Evento</label>
            <input
              type="text"
              className="input input-bordered input-info w-full max-w-xs mt-2"
              placeholder="Remen Muchachos"
              value={editEvent.name}
              onChange={(e) =>
                setEditEvent({ ...editEvent, name: `${e.target.value}` })}
              id="name"
            />
            <div className="mt-7">
              <label>Fecha</label>
              <input
                type="date"
                className="input input-bordered input-info  w-full max-w-xs mt-2"
                id="date"
                value={editEvent.date}
                onChange={(e) =>
                  setEditEvent({ ...editEvent, date: `${e.target.value}` })}
              />
            </div>
          </div>

          <div className="col-span-2  sm:col-span-1">
            <label>Ubicación</label>
            <input
              type="text"
              className="input input-bordered input-info w-full  mt-2"
              placeholder="Club Nautico...."
              list="brow"
              value={editEvent.placeId}
              id="placeId"
              onChange={(e) =>
                setEditEvent({ ...editEvent, placeId: `${e.target.value}` })}
            />
            <datalist id="brow">
              {thePlaces &&
                thePlaces.map((aPlace) => (
                  <option key={aPlace.id} value={aPlace.id}>
                    {aPlace.name} | {aPlace.location}
                  </option>
                ))}
            </datalist>
            <div className="mt-6">
              <label>Descripción</label>

              <textarea
                placeholder="La Nueva Fiesta del Canotaje esta a la vuelta de la Boya, acompañanos..."
                className="input input-bordered input-info mt-2 p-3 w-full  py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset h-40 sm:text-sm sm:leading-6 "
                value={editEvent.description}
                onChange={(e) =>
                  setEditEvent({ ...editEvent, description: `${e.target.value}` })}
                id="description"
              ></textarea>
            </div>
          </div>

          <div className="col-span-2  sm:col-span-2">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              id="image"
              //   onChange={(e)=>{setFileImage(e.target.files[0])}}
            />
          </div>
        </div>

        <hr className="input-info" />

        <div className="grid-cols-1">
          <div className="col-span-1 sm:text-end text-center">
            <button
              type="submit"
              htmlFor="editarEvent"
              id="editarEvent"
              className="inline-flex btn btn-info w-20 text-end mt-4 rounded-md py-2 px-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <label htmlFor="editarEvent"
              onClick={() => {
                setEditEvent(theEvent)
                setIsOpenEditEvent(!isOpenEditEvent)}}>Editar</label>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditEvent;
