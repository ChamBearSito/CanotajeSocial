import React, { useState } from 'react'
import { useParams } from 'react-router-dom';



const RellenoModal = ( ) => {

  

  

  const [place, setPlace] = useState({
    name: "",
    image: "https://via.placeholder.com/300",
    description: "",
    location: "",
    rating: 0,
    waterType:"",
    reviews: [],
    events: [],

  })

// const placeIds = events.map((event)=>event.id);


const handleAddPlace = (e) => {
  e.preventDefault();
  console.log(place);
 
};

const onAddPlace = (e) => {
  e.preventDefault();

  const value = e.target.value;
  const element = e.target.id;
  setPlace({ ...place, [element]: value });
  
};




  return (
    <>
    <form onSubmit={handleAddPlace}>
      <h1 className='mb-3'>Agregar Lugar</h1>

      <div className="grid grid-cols-2 gap-5 mb-4">
        <div className='col-span-2  sm:col-span-1'>

          <label >Nombre del Lugar</label>
          <input type="text" className='input input-bordered input-info w-full max-w-xs mt-2' placeholder='Club Nautico' value={place.name} onChange={onAddPlace} id="name"/>
        </div>

        <div className='col-span-2  sm:col-span-1'>

          <label >Ubicación</label>
          <input type="text" className='input input-bordered input-info w-full  mt-2' placeholder='La Paz, Colonia'
          value={place.location} onChange={onAddPlace} id="location" />
        </div>


        <div className='col-span-2  sm:col-span-2'>

          <label >Descripción</label>


          <textarea placeholder='Hermoso Lugar para pasar el rato en familia...' className='input input-bordered input-info mt-2 p-3 w-full  py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ' value={place.description} onChange={onAddPlace} id="description" >

          </textarea>


        </div>

        <div className='col-span-2  sm:col-span-2'>


          <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs"  onChange={onAddPlace} id="image" />



          <select className="select select-primary w-full max-w-fit  mt-3 mx-20 sm:mx-"
           value={place.waterType} onChange={onAddPlace} id="waterType">
            <option disabled selected>Tranquilas/Bravas</option>
            <option>Aguas Tranquilas</option>
            <option>Aguas Bravas</option>


          </select>


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

export default RellenoModal