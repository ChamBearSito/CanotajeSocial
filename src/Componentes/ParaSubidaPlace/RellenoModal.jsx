import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { createPlace } from "../../api";
import { LoginContext } from "../../context/Login";

const RellenoModal = ({thePlaces, setThePlaces}) => {
  const [selected, setSelected] = useState("");
  const { logedUser } = useContext(LoginContext);

  const [place, setPlace] = useState({
    userId: logedUser.id,
    name: "",
    images: [{ url: "https://via.placeholder.com/300" }],
    description: "",
    location: "",
    waterType: "",
  });

  const CLOUD_NAME = "ddk8ydo51";
  const UPLOAD_PRESET = "u2skitgq";

  const upload = async (file) => {
    const data2 = new FormData();
    data2.append("file", file);
    data2.append("upload_preset", UPLOAD_PRESET);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: "POST", body: data2 }
    );
    const data3 = await response.json();
    
    setPlace({ ...place, images: [{ url: `${data3.secure_url}` }] }); // reemplazar con un mensaje de éxito o la acción deseada
    console.log(place)
  };
  
  // const placeIds = events.map((event)=>event.id);
  const addPlace = async (pPlace) => {
    const response = await createPlace(pPlace);
    if(response)
      setThePlaces(...thePlaces,pPlace);
  };

  const handleAddPlace = (e) => {
    e.preventDefault();
    addPlace(place)
      .then()
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    console.log("Label 👉️", event.target.selectedOptions[0].label);
    setSelected(event.target.value);
  };

  const onAddPlace = (e) => {
    e.preventDefault();
    if (e.target.id == "waterType") handleChange(e);
    const value = e.target.value;
    const element = e.target.id;
    setPlace({ ...place, [element]: value });
  };

  return (
    <>
      <form onSubmit={handleAddPlace}>
        <h1 className="mb-3">Agregar Lugar</h1>

        <div className="grid grid-cols-2 gap-5 mb-4">
          <div className="col-span-2  sm:col-span-1">
            <label>Nombre del Lugar</label>
            <input
              type="text"
              className="input input-bordered input-info w-full max-w-xs mt-2"
              placeholder="Club Nautico"
              value={place.name}
              onChange={onAddPlace}
              id="name"
            />
          </div>

          <div className="col-span-2  sm:col-span-1">
            <label>Ubicación</label>
            <input
              type="text"
              className="input input-bordered input-info w-full  mt-2"
              placeholder="La Paz, Colonia"
              value={place.location}
              onChange={onAddPlace}
              id="location"
            />
          </div>

          <div className="col-span-2  sm:col-span-2">
            <label>Descripción</label>

            <textarea
              placeholder="Hermoso Lugar para pasar el rato en familia..."
              className="input input-bordered input-info mt-2 p-3 w-full  py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 "
              value={place.description}
              onChange={onAddPlace}
              id="description"
            ></textarea>
          </div>

          <div className="col-span-2  sm:col-span-2">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              onChange={(e) => {
                upload(e.target.files[0]);
              }}
              id="images"
            />

            <select
              className="select select-primary w-full max-w-fit  mt-3 mx-20 sm:mx-"
              value={selected}
              onChange={onAddPlace}
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
              <label htmlFor="my-modal-3">Publicar</label>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RellenoModal;
