import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logito from "../../assets/img/CannotExpress.png"
import walt from "../../assets/img/walter.png"
import { ImageContext } from '../../context/Estadofoto'
import { LoginContext } from '../../context/Login'
import Search from '../Search/Search'

import { getAllEvents } from '../../api'

const Header = () => {
  const { logedUser } = useContext(LoginContext)
  let loged=false;
  if(logedUser.id!=null){
    loged=true;
  }
  const { setLogedUser } = useContext(LoginContext)
  const { image } = useContext(ImageContext);

  const cerrarSesion = ()=>{
    setLogedUser({
      username:'',
      password:'',
      name:'',
      lastname:'',
      description:''
    }
    )
  }
  return (
    <>
      <div className="navbar flex flex-wrap justify-center sm:justify-between  sm:flex-nowrap ">
        <div className="flex flex-grow justify-center sm:justify-between">
          <a className="btn btn-ghost h-auto  normal-case text-xl"><img className='w-36' src={logito} alt="" /></a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control mx-auto">
          <Search/>
          </div>
          {!loged &&
          <button className="btn btn-outline btn-primary">
            <Link to={`/login`} className="justify-between">
                Log In
          </Link></button>}
          {loged &&
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={image} alt="ejje" />
              </div>
            </label>
            <ul tabIndex={0} style={{zIndex:10001}} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to={`/perfil/${logedUser.id}`} className="justify-between">
                  Perfil
                </Link>
              </li>
              
              <li><Link to={`/login`} onClick={cerrarSesion} className="justify-between">
                Cerrar Sesion
              </Link></li>
            </ul>
          </div>
          }
        </div>
      </div>


    </>
  )
}

export default Header