import React from 'react'
import logito from "../../assets/img/CannotExpress.png"

const Footer = () => {
  return (
   <>
   <footer className="footer p-10 bg-base-200 text-base-content text-center">

    <div className='mx-auto'>


  <div>
    <img src={logito} className="w-52" alt="" />
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 

    </div>
 
</footer>
   
   </>
  )
}

export default Footer