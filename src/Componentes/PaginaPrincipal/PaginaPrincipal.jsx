import React, { useContext, useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { LoginContext } from '../../context/Login'
import FeedPlaces from '../FeedPlaces/FeedPlaces'
import './principal.css'
import { BsFillPlusCircleFill } from "react-icons/bs";
import {BsFillPatchPlusFill} from "react-icons/bs"
import RellenoModal from '../ParaSubidaPlace/RellenoModal'
import RellenoModalEvento from '../ParaSubirEvento/RellenoModalEvento'
import { getAllPlaces } from '../../api'

const PaginaPrincipal = () => {
  const { logedUser } = useContext(LoginContext);
  const [thePlaces, setThePlaces] = useState([]);

  const getThePlaces=async()=>{
    const response=await getAllPlaces();
    setThePlaces(response.data.reverse());
  }

  useEffect(()=>{
    getThePlaces();
  },[])

  return (
    <>
      <Layout>
        {logedUser.id &&
          <>
            <div className='toolBar'>
              <div className='toolsIcons'>
                <label htmlFor="my-modal-3">
                  <div className='createPlace'>
                    <BsFillPlusCircleFill />
                    <p>Create Place</p>
                  </div>
                </label>
                <label htmlFor="my-modal-4">
                  <div className='createEvent'>
                    <BsFillPatchPlusFill />
                    <p>Create Event</p>
                  </div>
                </label>
              </div>
            </div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal" style={{zIndex:10001}}>
              <div className="modal-box relative max-w-screen-md border-2 border-info" >
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 input-info">✕</label>
                <RellenoModal thePlaces={thePlaces} setThePlaces={setThePlaces}/>
              </div>
            </div>


            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal" style={{zIndex:10001}}>
              <div className="modal-box relative max-w-screen-md border-2 border-info" >
                <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2 input-info">✕</label>
                <RellenoModalEvento thePlaces={thePlaces} setThePlaces={setThePlaces}/>
              </div>
            </div></>
        }
        <FeedPlaces thePlaces={thePlaces} setThePlaces={setThePlaces}/>
      </Layout>
    </>
  )
}

export default PaginaPrincipal