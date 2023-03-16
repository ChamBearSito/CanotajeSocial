import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const DetailsPlaces = ({ place, isOpen }) => {
  
  return (
    <>
    <h3 className="text-lg font-bold">Detalles del Lugar</h3>
    {isOpen && <>


          <div className='m-5  text-center' >

            <h2 className='text-lg font-bold'>{place.name}</h2>

            <div className='text-center'>

              <div className='card-body text-center'>

                <div>
                  <img className=' mx-auto shadow-md shadow-info' src={place.images[0].url} height={100} width={300} alt="" />
                </div>



                <div>
                  {place.location}
                </div>
                <div>
                  {place.description}
                </div>
                <div>
                  {place.waterType}
                </div>
                <div>

                  {/* <Star value={place.rating}/> */}
                  <div className="rating gap-2 mt-1">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
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
          </>}
    </>
  
  )
}

export default DetailsPlaces