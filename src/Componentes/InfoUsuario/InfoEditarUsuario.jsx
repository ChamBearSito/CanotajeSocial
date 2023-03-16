import React, { useState,useEffect,useContext } from 'react'
import Walter from "../../assets/img/walter.png"
import { ImageContext } from '../../context/Estadofoto';

const InfoEditarUsuario = () => {

    const laInfo= JSON.parse(localStorage.getItem("info"));
    const NombreU = laInfo.nombre;
    const ApellidoU = laInfo.apellido;
    const descripcionU = laInfo.description;

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

        const [Info, setInfo] = useState({
            nombre: "",
            apellido:"",
            description:"",
           
            url:""
        })

       

            const handleInputChange = (e) => {

                const value = e.target.value;
                const element = e.target.id;
                setInfo({...Info,[element]: value})
            }

            const handleSubmit =  (e) =>{

                 e.preventDefault()
                
                localStorage.removeItem("info");
                localStorage.setItem("info",JSON.stringify(Info) );
                alert("Se ha guardado con exito, puedes cerrar el modal");
                
                window.location.reload();


            }


            const cambioImagen = () =>{
                const laInfo= JSON.parse(localStorage.getItem("info"));
                const URLIMAGEN = laInfo.url
                (URLIMAGEN  != "")? 
                document.getElementById("fotoperfil").src={URLIMAGEN}:
                document.getElementById("fotoperfil").src={Walter};
            }

  return (
    <>

     <div className=" sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
         
          <div className="mt-5 md:col-span-3 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium  leading-6 text-gray-900">
                       Nombre
                      </label>
                      <input
                      required
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder={NombreU}
                        
                        
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
                        id="apellido"
                        placeholder={ApellidoU}
                        onChange={handleInputChange}
                        autoComplete="family-name"
                        className="mt-2 bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address"  className="block text-sm font-medium leading-6 text-gray-900">
                      Descripción 
                      </label>
                      <textarea required className='mt-2 bg-white block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 
                      
      

                      ' name="description" id="description" cols="10" rows="10" placeholder={descripcionU}  onChange={handleInputChange}>

                      </textarea>
                     
                    </div>

                   

                    <div className="col-span-6 sm:col-span-3">
                    <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Foto</label>
                    <div className="mt-2  items-center">
                      <span className="">
                      <img className='  w-44 rounded-full shadow shadow-white' src={image} id='fotoperfil'  alt="" />
                      </span>
                      <input type="file"  id='url' name='url'  className="file-input file-input-bordered file-input-info w-full max-w-xs pl-0" onChange={handleFileSelect} />
                    </div>
                  </div>
                    </div>

                 
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    id="my-modal-3"
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

export default InfoEditarUsuario