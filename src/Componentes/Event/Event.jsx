import React, { useState } from 'react'
import fotoano from "../../assets/img/perfil1.jpg"
import rio from "../../assets/img/rio.jpg"
import { AiOutlineMenu } from "react-icons/ai"
import Star from '../Star/Star'
import { FaRegComment } from "react-icons/fa"
import { BsFillBookmarkStarFill } from "react-icons/bs"
import { AiOutlineStar } from "react-icons/ai"
import Comment from '../Comment/Comment'
import Review from '../Review/Review'

const Event = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    return (
        <>
            <div className=" p-4 ">
                <div className="bg-white card rounded-xl max-w-md border-2 border-info">
                    <div className="flex items-center px-4 py-3">
                        <img className="h-16 w-16 rounded-full" src={fotoano} />
                        <div className="ml-3 ">
                            <span className="text-sm font-semibold antialiased block leading-tight">@Nombre Usuario</span>
                            <span className="text-gray-600 text-xs block">Ubicacion </span>
                        </div>
                        <div className=' ml-5 sm:ml-44'>

                            {/* Para Favotiros */}
                        <button className='cursor-pointer'>
                            <BsFillBookmarkStarFill fill='gold' size={30}/>
                        </button>
                        </div>
                        
                    </div>
                   
                    <hr />
                    <div className='text-center'>
                        <h1>Nombre de Evento</h1>
                    </div>
                    <img src={rio} />
                    <div className="flex flex-wrap items-center justify-between mx-4 mt-3 mb-2">



                        {/* LA DESCRIPCION */}
                        <div>
                            {/* El encabezado del acordeón */}
                            <button
                                className="flex  w-full px-4 py-2  font-bold  input input-bordered btn  mt-4 input-info"
                                onClick={() => setIsOpen(!isOpen)}
                            > Descripción


                            </button>
                            {/* El contenido del acordeón */}
                            {isOpen && (
                                <div className="px-4 py-2 text-gray-700 bg-white">
                                    Es un bello Lago para Pasar el rato xd
                                </div>
                            )}
                        </div>

                        {/* FIN DESCRIPCION */}

                        {/* Fecha */}
                        <div>
                            {/* El encabezado del acordeón */}
                            <button
                                className="flex  w-full px-4 py-2  font-bold  input input-bordered btn mt-4 input-info"
                                onClick={() => setIsOpen2(!isOpen2)}
                            > Fecha


                            </button>
                            {/* El contenido del acordeón */}
                            {isOpen2 && (
                                <div className="px-4 py-2 text-gray-700 bg-white">
                                    El bello dia 29
                                </div>
                            )}
                        </div>
                        {/* FIN Fecha */}





                        {/* Comentarios */}
                        <div>
                            {/* El encabezado del acordeón */}
                            <button
                                className="flex  w-full px-4 py-2  font-bold  input input-bordered btn  input-info mt-4"
                                onClick={() => setIsOpen3(!isOpen3)}
                            > Comentarios


                            </button>
                            {/* El contenido del acordeón */}
                            {isOpen3 && (
                                <div className="px-4 py-2 text-gray-700 bg-white">
                                    Lista de Comentarios
                                </div>
                            )}
                        </div>
                        {/* FIN Comentarios */}

                    </div>

                    <div className='flex flex-wrap items-center justify-between mx-4 mt-3 mb-2'>

                        <div>
                             {/* Review */}
                        
                            {/* El encabezado del acordeón */}
                            <button
                                className="flex  w-full px-4 py-2  font-bold  input input-bordered btn  input-info mt-4"
                                onClick={() => setIsOpen4(!isOpen4)}
                            > Rewiew........


                            </button>
                            {/* El contenido del acordeón */}
                            {isOpen4 && (
                                <div className="px-4 py-2 text-gray-700 bg-white">
                                    Lista de Reviews
                                </div>
                            )}
                        
                        {/* FIN Review */}

                        </div>



                        <div className='mx-auto '>

                            <label htmlFor="my-modal-6" className='cursor-pointer'>
                                <AiOutlineStar fill='back' size={40} />
                            </label>
                        </div>

                        <div className='mx-auto '>

                            <label htmlFor="my-modal-5" className='cursor-pointer'>
                                <FaRegComment fill='black' size={40} />
                            </label>
                        </div>
                    </div>

                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative w-fit border-2 border-info" >
                            <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2 input-info">✕</label>
                            <Comment />
                        </div>






                    </div>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative w-fit border-2 border-info" >
                            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2 input-info">✕</label>
                            <Review />
                        </div>






                    </div>







                </div>
            </div>


        </>
    )
}

export default Event