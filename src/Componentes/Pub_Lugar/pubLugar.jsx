import React from "react";
import '../Pub_Lugar/pubLugar.css';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {BiMessageRounded} from "react-icons/bi";
import ImagePlace from '../../assets/img/rio.jpg';
import { createPath } from "react-router-dom";


const PubLugar = () => {
    
    return (
        <article>
            <section className='place-container'>
                <div className="place-header">
                    <div className="place-header-perfil">
                        <img className='place-photo-perfil' />
                        <span>@nombre</span>
                    </div>
                    <div className="place-header-options">
                        <BiDotsHorizontalRounded />
                    </div>
                </div>
                <div className="place-datos">
                    <h1 className='place-title'>@Nombre-Lugar</h1>
                    <img src={ImagePlace} className='place-image'></img>
                </div>
                <div className="place-footer">
                    <div className='place-profile-comment'>
                        <span>@nombre : @comment</span>
                    </div>
                    <BiMessageRounded/>
                    <div className='place-rating-global'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {/* Lista de Reviews */}
            </section>
        </article>
    );
};

export default PubLugar;