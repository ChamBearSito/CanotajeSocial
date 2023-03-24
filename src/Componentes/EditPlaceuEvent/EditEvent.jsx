import React from 'react'
import { getAllEvents, getAllPlaces } from '../../api';

const EditEvent = () => {
    const thePlaces = getAllPlaces();
    const Events = getAllEvents();
    const [losEvents, setlosEvents] = useState(Events);

    const { userId, name,/* image,*/ description, location, waterType, date } = Places;
    const [editName, seteditName] = useState(name);
    //const [editImage, seteditImage] = useState(image);
    const [editDescription, seteditDescription] = useState(description);
    const [editLocation, seteditLocation] = useState(location);
    const [editWater, seteditWater] = useState(waterType);
    const [editDate, seteditDate] = useState(date)

    const onNameChange = (event) => {
        seteditName(event.target.value);
    };
/*
    const onImageChange = (event) => {
        seteditImage(event.target.value);
    };
*/
    const onDescriptionChange = (event) => {
        seteditDescription(event.target.value);
    };

    const onLocationChange = (event) => {
        seteditLocation(event.target.value);
    };

    const onWaterChange = (event) => {
        seteditWater(event.target.value);
    };
    const onDateChange = (event) => {
        seteditDate(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedEvents = { name: editName, /*image: editImage,*/ description: editDescription, location: editLocation, date:editDate,waterType: editWater };
        // llamar al metodo editar empleado del contexto
        updateEvents(userId, updatedEvents);
    };


    const updateEvents = (id, updatedEvents) => {
        console.log('updating Places', updatedEvents)
        setlosEvents(losEvents.map((events) => events.userId === id ? updatedEvents : events));
    }

     

    return (
        <>
          <form
        onSubmit={handleAddEvent}
      >
        <h1 className="mb-3">Editar Evento</h1>

        <div className="grid grid-cols-2 gap-5 mb-4">
          <div className="col-span-2  sm:col-span-1">
            <label>Nombre del Evento</label>
            <input
              type="text"
              className="input input-bordered input-info w-full max-w-xs mt-2"
              placeholder="Remen Muchachos"
              value={editName} 
              onChange={onNameChange} 
              id='name'
            />
            <div className="mt-7">
              <label>Fecha</label>
              <input
                type="date"
                className="input input-bordered input-info  w-full max-w-xs mt-2"
                id="date"
                value={editDate} 
                onChange={onDateChange}
              />
            </div>
          </div>

          <div className="col-span-2  sm:col-span-1">
            <label>Ubicación</label>
            <input type="text"
              className="input input-bordered input-info w-full  mt-2"
              placeholder="Club Nautico...." list="brow"
              id="placeId"
              onChange={onLocationChange} />
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
                value={editDescription} 
                onChange={onDescriptionChange} 
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
              htmlFor="my-modal-4"
              id="my-modal-3"
              className="inline-flex btn btn-info w-20 text-end mt-4 rounded-md py-2 px-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <label htmlFor="my-modal-4">Editar</label>
            </button>
          </div>
        </div>
      </form>
    
    
    
    </>
  )
}

export default EditEvent