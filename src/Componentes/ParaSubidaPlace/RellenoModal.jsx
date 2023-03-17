import React from 'react'

const RellenoModal = (props) => {
  // las props es para cuando lo llamemos aparezca evento o publicaion xd
  return (
    <>
      <h1 className='mb-3'>Agregar Lugar</h1>

      <div className="grid grid-cols-2 gap-5 mb-4">
        <div className='col-span-2  sm:col-span-1'>

          <label >Nombre del Lugar</label>
          <input type="text" className='input input-bordered input-info w-full max-w-xs mt-2' placeholder='Club Nautico'/>
        </div>

        <div className='col-span-2  sm:col-span-1'>

          <label >Ubicación</label>
          <input type="text" className='input input-bordered input-info w-full  mt-2' placeholder='La Paz, Colonia' />
        </div>


        <div className='col-span-2  sm:col-span-2'>

          <label >Descripción</label>


          <textarea placeholder='Hermoso Lugar para pasar el rato en familia...' className='input input-bordered input-info mt-2 p-3 w-full  py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ' >

          </textarea>


        </div>

        <div className='col-span-2  sm:col-span-2'>


          <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />



          <select className="select select-primary w-full max-w-fit mx-0 mt-3 sm:mx-28">
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

    </>
  )
}

export default RellenoModal