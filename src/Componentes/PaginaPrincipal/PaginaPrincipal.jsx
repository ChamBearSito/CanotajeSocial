import React,{useContext, useEffect} from 'react'
import Layout from '../Layout/Layout'
import PubLugar from '../Pub_Lugar/pubLugar'
import { LoginContext } from '../../context/Login'

const PaginaPrincipal = () => {
  const {logedUser}=useContext(LoginContext);
  useEffect(()=>{
    console.log(logedUser);
  },[])
  return (
  <>
  
  <Layout>
      
      <PubLugar/>
    
  </Layout>
  
  </>
  )
}

export default PaginaPrincipal