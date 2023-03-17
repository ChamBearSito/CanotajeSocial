import React, { useEffect, useState } from 'react'
import { getAllEvents } from '../../api';

const RellenoModalEvento = () => {

  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //       const response = await getAllEvents();
  //       console.log("response", response.data);
  //       setEvents(response.data);
  //       }

  //   fetchEvents().then(() => console.log("fethed events"));
  //   console.log("El events",events);
  // }, []);

  // const [place, setPlace] = useState({
  //   name: "",
  //   image: "https://via.placeholder.com/300",
  //   description: "",
  //   location: "",
  //   rating: 0,
  //   reviews: [],
  //   events: [],
  // });

  // const [event, setEvent] = useState({
  //   placeId: 0,
  //   name: "",
  //   image: "https://via.placeholder.com/300",
  //   description: "",
  //   location: "",
  //   date: "2023-05-27",
  //   waterType:"",
  //   rating: 0,
  //   comments: [],
  //   reviews: [],
  // });

  // const placeIds = events.map((event) => event.id);

  // const handleAddPlace = (e) => {
  //   e.preventDefault();
  //   console.log(event);
  // };

  // const handleAddEvent = (e) => {
  //   e.preventDefault();
  //   console.log(event);
  // };

  // const onAddPlace = (e) => {
  //   e.preventDefault();
  //   console.log(event);
  //   const value = e.target.value;
  //   const element = e.target.id;
  //   setPlace({ ...place, [element]: value });
  // };

  // const onAddEvent = (e) => {
  //   e.preventDefault();
  //   console.log(event);
  //   const value = e.target.value;
  //   const element = e.target.id;
  //   setEvent({ ...place, [element]: value });
  // };

  return (
   <>
   

   <form
    // onSubmit={handleAddEvent}
    >
   <h1 className='mb-3'>Agregar Evento</h1>

      <div className="grid grid-cols-2 gap-5 mb-4">
        <div className='col-span-2  sm:col-span-1'>

        <label>Id de Evento</label>
        <select className="select select-primary w-full max-w-xs">
  <option disabled selected>Id</option>
  <option >1</option>
  <option >2</option>
  <option >3</option>
  <option >4</option>
{/* {
  placeIds.map((id) => (
    <option value={id}>{id}</option>
  ))
} */}
</select>
        
          <label >Nombre del Evento</label>
          <input type="text" className='input input-bordered input-info w-full max-w-xs mt-2' placeholder='Remen Muchachos'
          
          // value={event.name} onChange={onAddEvent} id='name'
          />
        </div>

        <div className='col-span-2  sm:col-span-1'>

          <label >Ubicación</label>
          <input type="text" className='input input-bordered input-info w-full  mt-2' placeholder='Club Nautico....'
          // value={event.location} onChange={onAddEvent} id="location"
          
          />

          {/* Fecha */}
          <input type="date" className='input input-bordered input-info  w-full mt-6' id='date'
          // value={event.date} onChange={onAddEvent}
           />


        </div>


        <div className='col-span-2  sm:col-span-2'>

          <label >Descripción</label>


          <textarea placeholder='La Nueva Fiesta del Canotaje esta a la vuelta de la Boya, acompañanos...' className='input input-bordered input-info mt-2 p-3 w-full  py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ' 
          // value={event.description} onChange={onAddEvent} id="description"
          > 

          </textarea>


        </div>

        <div className='col-span-2  sm:col-span-2'>


          <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          //  value={event.image} onChange={onAddEvent} id="image"
          />



         


        </div>








      </div>

      <hr className='input-info' />

      <div className="grid-cols-1">

        <div className='col-span-1 sm:text-end text-center'>

          <button
            type="submit"
            htmlFor="my-modal-3"
            id="my-modal-3"
            className="inline-flex btn btn-info w-20 text-end mt-4 rounded-md py-2 px-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <label htmlFor="my-modal-3">

              Publicar
            </label>
          </button>
        </div>
      </div>

      </form>
   </>
  )
}

export default RellenoModalEvento