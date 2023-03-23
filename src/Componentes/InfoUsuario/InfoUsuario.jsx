import React, { useState, useEffect, useContext } from 'react'
import Walter from "../../assets/img/walter.png"
import { ImageContext } from '../../context/Estadofoto';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/Login';

const InfoUsuario = ({closeModal}) => {
  const {updateUsers} = useContext(LoginContext)
  const {logedUser,setLogedUser}=useContext(LoginContext);
  const [updateUser,setUpdateUser]=useState({...logedUser});
  const { image, setImage } = useContext(ImageContext);

  function handleFileSelect(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  const handleInputChange = (e) => {
    console.log(updateUser)
    const value = e.target.value;
    const element = e.target.id;
    setUpdateUser({ ...updateUser, [element]: value })
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    updateUsers(updateUser.username, updateUser);
    alert("Informacion Guardada Correctamente");
    setLogedUser(updateUser);
    closeModal();
  }


 

  return (
    <>

      <div className=" sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">

          <div className="mt-5 md:col-span-3 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">

                  <div className="alert alert-info shadow-lg my-4 ">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Para Continuar debes Completar los Datos para tu Perfil...</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium  leading-6 text-gray-900">
                        Nombre
                      </label>
                      <input
                        required
                        type="text"
                        name="nombre"
                        id="name"
                        value={updateUser.name || ''}
                        onChange={handleInputChange}
                        autoComplete="given-name"
                        className="mt-2 bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Apellido
                      </label>
                      <input
                        required
                        type="text"
                        name="apellido"
                        id="lastname"
                        value={updateUser.lastname || ''}
                        onChange={handleInputChange}
                        autoComplete="family-name"
                        className="mt-2 bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Descripción
                      </label>
                      <textarea required className='mt-2 bg-white p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 
                      ' name="description" id="description" cols="10" rows="10" value={updateUser.description || ''} onChange={handleInputChange}>
                      </textarea>

                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Foto</label>
                        <div className="mt-2  items-center">
                          <span className="">
                            <img className='  w-44 rounded-full shadow shadow-white' src={image} id='fotoperfil' alt="" />
                          </span>
                          <input type="file" id='url' name='url' className="file-input file-input-bordered file-input-info w-full max-w-xs mt-3 pl-0" onChange={handleFileSelect} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="inline-flex btn btn-info w-20 justify-center rounded-md py-2 px-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default InfoUsuario