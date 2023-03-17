import React from 'react'
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
    
    </>
  )
}

export default ModalSubida