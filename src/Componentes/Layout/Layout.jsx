import React from 'react'
import { ImageProvider } from '../../context/Estadofoto'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
    <>
    <ImageProvider>
    <Header/>
    <main>
        {children}
    </main>
    <Footer/>
    </ImageProvider>
    
    </>
  )
}

export default Layout