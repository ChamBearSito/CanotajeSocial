import React from 'react'

const RellenoModalEvento = () => {
  return (
   <>
   
   <h1 className='mb-3'>Agregar Evento</h1>

      <div className="grid grid-cols-2 gap-5 mb-4">
        <div className='col-span-2  sm:col-span-1'>

        <label>Id de Evento</label>
        <select className="select select-primary w-full max-w-xs">
  <option disabled selected>Id</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
</select>
        
          <label >Nombre del Evento</label>
          <input type="text" className='input input-bordered input-info w-full max-w-xs mt-2' placeholder='Remen Muchachos' />
        </div>

        <div className='col-span-2  sm:col-span-1'>

          <label >Ubicación</label>
          <input type="text" className='input input-bordered input-info w-full  mt-2' placeholder='Club Nautico....'/>


          <input type="date" className='input input-bordered input-info  w-full mt-6' />


        </div>


        <div className='col-span-2  sm:col-span-2'>

          <label >Descripción</label>


          <textarea placeholder='La Nueva Fiesta del Canotaje esta a la vuelta de la Boya, acompañanos...' className='input input-bordered input-info mt-2 p-3 w-full  py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ' >

          </textarea>


        </div>

        <div className='col-span-2  sm:col-span-2'>


          <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />



         


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

   
   </>
  )
}

export default RellenoModalEvento