import React, { useState } from 'react'
import { getAllPlaces } from '../../api'

const EditPlace = () => {

    const Places = getAllPlaces();
    const [losPlaces, setlosPlaces] = useState(Places);

    const { userId, name,/* image,*/ description, location, waterType } = Places;
    const [editName, seteditName] = useState(name);
    //const [editImage, seteditImage] = useState(image);
    const [editDescription, seteditDescription] = useState(description);
    const [editLocation, seteditLocation] = useState(location);
    const [editWater, seteditWater] = useState(waterType);

    const onNameChange = (event) => {
        seteditName(event.target.value);
    };
/*
    const onImageChange = (event) => {
        seteditImage(event.target.value);
    };
*/
    const onDescriptionChange = (event) => {
        seteditDescription(event.target.value);
    };

    const onLocationChange = (event) => {
        seteditLocation(event.target.value);
    };

    const onWaterChange = (event) => {
        seteditWater(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedPlace = { name: editName, /*image: editImage,*/ description: editDescription, location: editLocation, waterType: editWater };
        // llamar al metodo editar empleado del contexto
        updatePlaces(userId, updatedPlace);
    };


    const updatePlaces = (id, updatedPlace) => {
        console.log('updating Places', updatedPlace)
        setlosPlaces(losPlaces.map((places) => places.userId === id ? updatedPlace : places));
    }


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
              value={editName}
              onChange={onNameChange}
              id="name"
            />
          </div>

          <div className="col-span-2  sm:col-span-1">
            <label>Ubicación</label>
            <input
              type="text"
              className="input input-bordered input-info w-full  mt-2"
              placeholder="La Paz, Colonia"
              value={editLocation}
              onChange={onLocationChange}
              id="location"
            />
          </div>

          <div className="col-span-2  sm:col-span-2">
            <label>Descripción</label>

            <textarea
              placeholder="Hermoso Lugar para pasar el rato en familia..."
              className="input input-bordered input-info mt-2 p-3 w-full  py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 "
              value={editDescription}
              onChange={onDescriptionChange}
              id="description"
            ></textarea>
          </div>

          <div className="col-span-2  sm:col-span-2">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            //   onChange={(e) => {
            //     setFileImage(e.target.files[0])
            //   }}
              id="images"
            />

            <select
              className="select select-primary w-full max-w-fit  mt-3 mx-20 sm:mx-"
              value={editWater}
              onChange={onWaterChange}
              id="waterType"
            >
              <option disabled value="Tranquilas/Bravas">Tranquilas/Bravas</option>
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
              htmlFor="my-modal-3"
              id="my-modal-3"
              className="inline-flex btn btn-info w-20 text-end mt-4 rounded-md py-2 px-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <label htmlFor="my-modal-3">Editar</label>
            </button>
          </div>
        </div>
      </form>

        </>
    )
}

export default EditPlace