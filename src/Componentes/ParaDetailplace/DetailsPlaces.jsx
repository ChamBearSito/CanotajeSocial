import React from 'react'
import { useParams } from 'react-router-dom'
import Star from '../hastaAhora/star/Star';
import fotoejemplo from "../assets/img/rio.jpg"

const DetailsPlaces = ({places}) => {
  
//   let {id} = useParams();
//   const place = places.find((place) => place.id === parseInt(id));

  
  
    return (
   <>
            {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal ">
  <div className="modal-box relative border-2 border-info">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Detalles del Lugar</h3>



    <div className='m-5  text-center' >

<h2 className='text-lg font-bold'>{/* {place.name} */}
                El Lago Ness</h2>

<div  className='text-center'>


    <div className='card-body text-center'>



    <div> 
   <img className=' mx-auto shadow-md shadow-info' src={fotoejemplo} height={100} width={300} alt="" /> 
    {/* <img src={place.image} width={300} height={300}/> */}

</div>

           

            <div>
                {/* {place.location} */}
                Ubicado Cerca del Arroyo del Peru
            </div>
            <div>
                {/* {place.description} */}
                Es un Lugar Muy Bello Para Pasar el Rato y Fumarse uno, podes llegar caminando Rata
            </div>
            <div>
                {/* {place.date} */}
                fecha loca
            </div>
            <div>

                {/* <Star value={place.rating}/> */}
                <div className="rating gap-2 mt-1">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
            </div>




    </div>

</div>








</div>


<h3 className="text-lg font-bold">Eventos</h3>

<div>
{/* <Event events={places.events}/> */}

</div>
  
  </div>
  
</div>



        
   
   </>
  )
}

export default DetailsPlaces