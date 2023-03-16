import React,{useContext, useEffect} from 'react'
import Layout from '../Layout/Layout'
import { LoginContext } from '../../context/Login'
import FeedPlaces from '../FeedPlaces/FeedPlaces'

const PaginaPrincipal = () => {
  const {logedUser}=useContext(LoginContext);
  useEffect(()=>{
    console.log(logedUser);
  },[])
  return (
  <>
  
  <Layout>
      
      <FeedPlaces/>
    
  </Layout>
  
  </>
  )
}

export default PaginaPrincipal