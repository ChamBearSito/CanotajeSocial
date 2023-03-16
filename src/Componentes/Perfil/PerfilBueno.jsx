import React from 'react'
import { ImageProvider } from '../../context/Estadofoto'
import Perfil from './Perfil'

const PerfilBueno = () => {
  return (
   <ImageProvider>

        <Perfil/>

   </ImageProvider>
  )
}

export default PerfilBueno