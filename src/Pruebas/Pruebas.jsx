import React from 'react'
import EditPlace from '../Componentes/EditPlaceuEvent/EditPlace'

const Pruebas = () => {
  return (
    <>
      <li><button> 
                          
                          
                          <label htmlFor="my-modal-3">
                           Editar
                          </label>
                          
                          </button></li>

                          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
     <div className="modal">
       <div className="modal-box relative max-w-screen-md border-2 border-info">
         <label
           htmlFor="my-modal-3"
           className="btn btn-sm btn-circle absolute right-2 top-2 input-info"
         >
           ✕
         </label>
        <EditPlace/>
       </div>
     </div>
    
    </>
  )
}

export default Pruebas