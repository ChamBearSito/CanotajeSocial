import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { createPlace } from "../../api";
import { LoginContext } from "../../context/Login";

const RellenoModal = ({thePlaces, setThePlaces}) => {
  //Este es el relleno del modal de subida de places
  const [selected, setSelected] = useState("");
  //selected era solo para controlar lo que seleccionaba
  // el dropdown de watertype
  const { logedUser } = useContext(LoginContext);
  //traemos logedUser del contexto
  const [fileImage,setFileImage]=useState();
  //una variable para guardar el file seleccionado
  //en el input file

  //definimos place predefinida para ocupar datos que van a estar
  //aunque este no se cree
  const [place, setPlace] = useState({
    userId: logedUser.id,
    name: "",
    images: [{ url: "https://via.placeholder.com/300" }],
    description: "",
    location: "",
    waterType: "",
  });

  //metodo para guardar imagenes con la api de clodinary
  const CLOUD_NAME = "ddk8ydo51";
  //nombre de la nube que te dan en la api
  const UPLOAD_PRESET = "u2skitgq";
  //el codigo de acceso para subir archivos 

  const upload = async (place) => {
    const data2 = new FormData();
    data2.append("file", fileImage);
    data2.append("upload_preset", UPLOAD_PRESET);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: "POST", body: data2 }
    );
    const data3 = await response.json();
    let placeActualized={ ...place, images: [{ url: `${data3.secure_url}` }] }
    addPlace(placeActualized)
  };
  
  // metodo para agregar un place
  const addPlace = async (pPlace) => {
    const response = await createPlace(pPlace);
    if(response.status==201){
      const placesActualized=[response.data,...thePlaces]
      //esto es para que se actualize en tiempo real
      setThePlaces(placesActualized);
      alert('Se agrego!')
    }else{
      alert('Hubo un error!')
    }
    //esto es para devolver los datos a vacios y no queden
    //guardados en el modal
    setPlace({
      userId: logedUser.id,
      name: "",
      images: [{ url: "https://via.placeholder.com/300" }],
      description: "",
      location: "",
      waterType: "",
    })
  };

  //cuando se submitea llama a la funcion upload
  const handleAddPlace = (e) => {
    e.preventDefault();
    upload(place);
  };

  const handleChange = (event) => {
    console.log("Label 👉️", event.target.selectedOptions[0].label);
    setSelected(event.target.value);
  };

  //metodo para cambiar los valores de la place a crear
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
                setFileImage(e.target.files[0])
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
