import React from 'react'
import { ImageProvider } from '../../context/Estadofoto'
import InfoUsuario from './InfoUsuario'

const UsuarioInformacion = ({closeModal}) => {
  return (
   <ImageProvider>

        <InfoUsuario closeModal={closeModal}/>

   </ImageProvider>
  )
}

export default UsuarioInformacion