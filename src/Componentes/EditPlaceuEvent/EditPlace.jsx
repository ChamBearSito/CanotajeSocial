import React, { useState } from "react";
import { updatePlace } from "../../api";
//Necesitamos thePlace y el getThePlaces de la api
const EditPlace = ({ thePlace, getThePlaces }) => {
  //creamos estado el cual le cargamos theplace
  const [editPlace, setEditPlace] = useState({ ...thePlace });

  //subida de form, se llama a la api y si el status del response == 200 llamamos al getThePlaces
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response= await updatePlace(editPlace)
      if(response.status==200){
        getThePlaces()
        alert("Se actualizo!")
      }
      else{
        alert("Hubo un error!")
      }
    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="mb-3">Editar Lugar</h1>

        <div className="grid grid-cols-2 gap-5 mb-4">
          <div className="col-span-2  sm:col-span-1">
            <label>Nombre del Lugar</label>
            <input
              type="text"
              className="input input-bordered input-info w-full max-w-xs mt-2"
              placeholder="Club Nautico"
              value={editPlace.name}
              onChange={(e) =>
                setEditPlace({ ...editPlace, name: `${e.target.value}` })
              }
              id="name"
            />
          </div>

          <div className="col-span-2  sm:col-span-1">
            <label>Ubicación</label>
            <input
              type="text"
              className="input input-bordered input-info w-full  mt-2"
              placeholder="La Paz, Colonia"
              value={editPlace.location}
              onChange={(e) =>
                setEditPlace({ ...editPlace, location: `${e.target.value}` })
              }
              id="location"
            />
          </div>

          <div className="col-span-2  sm:col-span-2">
            <label>Descripción</label>

            <textarea
              placeholder="Hermoso Lugar para pasar el rato en familia..."
              className="input input-bordered input-info mt-2 p-3 w-full  py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 "
              value={editPlace.description}
              onChange={(e) =>
                setEditPlace({ ...editPlace, description: `${e.target.value}` })
              }
              id="description"
            ></textarea>
          </div>

          <div className="col-span-2  sm:col-span-2">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              onChange={(e) =>
                setEditPlace({ ...editPlace, images: `${e.target.files[0]}` })
              }
              id="images"
            />

            <select
              className="select select-primary w-full max-w-fit  mt-3 mx-20 sm:mx-"
              value={editPlace.waterType}
              onChange={(e) =>
                setEditPlace({ ...editPlace, waterType: `${e.target.value}` })
              }
              id="waterType"
            >
              <option disabled value="Tranquilas/Bravas">
                Tranquilas/Bravas
              </option>
              <option value="Aguas Tranquilas">Aguas Tranquilas</option>
              <option value="Aguas Bravas">Aguas Bravas</option>
            </select>
          </div>
        </div>

        <hr className="input-info" />

        <div className="grid-cols-1">
          <div className="col-span-1 sm:text-end text-center">
            <button
              type="submit"
              htmlFor="editar"
              id="editar"
              className="inline-flex btn btn-info w-20 text-end mt-4 rounded-md py-2 px-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <label htmlFor="editar">Editar</label>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditPlace;
