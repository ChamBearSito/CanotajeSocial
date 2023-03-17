import React from 'react'
import { getAllEvents } from '../../api'
import RellenoModalEvento from '../ParaSubirEvento/RellenoModalEvento'
import RellenoModal from './RellenoModal'

const ModalSubida = () => {
  return (
    <>

<button className='btn-success mx-auto'>
<label htmlFor="my-modal-3">
ABREME
</label>
</button>


   <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative max-w-screen-md border-2 border-info" >
    <label htmlFor="my-modal-3"  className="btn btn-sm btn-circle absolute right-2 top-2 input-info">✕</label>
  <RellenoModal nombre="Publicación"/>
  </div>
</div>
    



<hr />

<button className='btn-success mx-auto'>
<label htmlFor="my-modal-4">
evento
</label>
</button>


   <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative max-w-screen-md border-2 border-info" >
    <label htmlFor="my-modal-4"  className="btn btn-sm btn-circle absolute right-2 top-2 input-info">✕</label>
  <RellenoModalEvento />
  </div>
</div>
    </>
  )
}

export default ModalSubida