import React, { useEffect, useState, useContext } from 'react'

import Foto from "../../assets/img/jesseywal.jpg"
import Logo from "../../assets/img/CannotExpress.png"


import { SlMap } from "react-icons/sl"
import { FaPhotoVideo } from "react-icons/fa"

import { AiOutlineUser } from "react-icons/ai"
import { RiTeamFill } from "react-icons/ri"
import { BsGearWideConnected } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"

import { Link, useParams } from 'react-router-dom'
import { getAUser, getAllPlacesForUser } from '../../api';
import { ImageContext } from '../../context/Estadofoto'
import Footer from '../Footer/Footer'
import UsuarioInformacion from '../InfoUsuario/UsuarioInformacion'
import { LoginContext } from '../../context/Login'

const Perfil = (props) => {
  const [theUser, setTheUser] = useState({});
  const [thePlaces, setThePlaces] = useState([]);
  const [theEvents, setTheEvents] = useState([]);
  const { pId } = useParams();
  const { image, setImage } = useContext(ImageContext);
  const { logedUser, users } = useContext(LoginContext);

  //useEffect para cargar datos del perfil
  useEffect(() => {
    if (logedUser.id == pId) {
      setTheUser(logedUser);
    } else {
      searchTheUser(pId).then().catch((err) => console.log(err));
    }

    chargeThePubs(pId).then().catch((err) => console.log(err))
  }, [])

  const searchTheUser = async (pId) => {
    const response = await getAUser(pId);
    setTheUser(response.data)
  }

  const chargeThePubs = async (pId) => {
    const response = await getAllPlacesForUser(pId);
    setThePlaces(response.data)
  }

  const closeModal = () => {
    document.getElementById('my-modal-3').checked = false;
    turnScrollIn();
  }

  const turnScrollIn = () => {
    const theModal = document.getElementById('my-modal-3');
    if (theModal.checked == true) {
      let y = window.pageYOffset;
      let x = window.pageXOffset;
      window.onscroll = () => { window.scrollTo(x, y) }
    } else {
      window.onscroll = function () { };
    }
  }
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" onChange={turnScrollIn} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative border-2 border-info" >
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <UsuarioInformacion closeModal={closeModal} />
        </div>
      </div>

      <nav className=''>
        <div className='grid grid-cols-12 text-center '>
          <div className='col-span-12  p-5 text-center'>
            <h1 className=' text-xl sm:text-5xl'>
              <img className='mx-auto w-44 sm:w-48' src={Logo} alt="" />
            </h1>
          </div>
          <div className='col-span-12  p-5 gap-1 sm:gap-x-20'>
            <div className='grid grid-cols-6 text-center gap-1 sm:gap-x-20 '>
              <div className='col-span-2  justify-center  py-5'>
                <Link to="/principal">
                  <button className='cursor-pointer hover:scale-110'>
                    <AiOutlineHome className='logos' size={60} fill="white" />
                  </button>
                </Link>
              </div>
              <div className='col-span-2 justify-center py-5'><button className='cursor-pointer hover:scale-110'><AiOutlineUser className='logos' size={60} fill="white" /></button></div>
              <div className='col-span-2 justify-center py-5'><button className='cursor-pointer  hover:scale-110'>
                <label htmlFor="my-modal-3">
                  <BsGearWideConnected className='logos' size={60} fill="white" />
                </label>
              </button></div>
            </div>
          </div>
        </div>
      </nav>

      <div className='grid grid-cols-6'>
        <div className='sm:col-span-6 col-span-6  text-center pt-5 pb-5'>
          <div className='grid grid-cols-2 mx-5'>
            <div className='col-span-2 flex justify-center'>
              <img className=' w-40 h-40 rounded-full shadow shadow-white' src={image} alt="" />
            </div>
            <div className='col-span-2 flex justify-center'>
              <div className='gird grid-cols-2'>
                <div className='col-span-2'> <h2 className='text-2xl pt-4 pb-3 '>{theUser.name} {theUser.lastName}</h2></div>
                <div className='col-span-2'>  <p>{theUser.description}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='grid grid-cols-6 text-center gap-1 sm:gap-x-20'>
          <div className='col-span-2  justify-center  py-5'><button className='cursor-pointer hover:scale-110'><FaPhotoVideo className='logos' size={60} fill="white" /></button></div>
          <div className='col-span-2 justify-center py-5'><button className='cursor-pointer hover:scale-110'><SlMap className='logos' size={60} fill="white" /></button></div>
          <div className='col-span-2 justify-center py-5'><button className='cursor-pointer hover:scale-110'><RiTeamFill className='logos' size={60} fill="white" /></button></div>
        </div>
      </div>
      {/* Publicaciones  */}
      <div className='grid grid-cols-3  gap-5 text-center mx-4 my-4' >
        {thePlaces.map((aPlace)=>(
          <div key={aPlace.id} className='col-span-3 sm:col-span-1 card border-4 border-black cursor-pointer bg-base-100 shadow-xl '>
            <figure><img className='card' src={aPlace.images[1].url} alt="Shoes" /></figure>
          </div>
        ))}

      </div>

      <Footer />
    </>
  )
}

export default Perfil