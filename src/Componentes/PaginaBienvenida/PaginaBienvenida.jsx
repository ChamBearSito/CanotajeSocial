import React from 'react'
import Footer from '../Footer/Footer'
import InfoUsuario from '../InfoUsuario/InfoUsuario'
import UsuarioInformacion from '../InfoUsuario/UsuarioInformacion'

import Feed from './Feed'
import QuienesSomos from './QuienesSomos'
import Testimonio from './Testimonio'


const PaginaPrincipal = () => {
  return (
   <>
   <Feed/>
   <QuienesSomos/>
   <Testimonio/>
   <Footer/>
   
   </>
  )
}

export default PaginaPrincipal