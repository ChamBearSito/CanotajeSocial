import React, {useEffect, useState} from "react";
import '../Pub_Lugar/pubLugar.css';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {BiMessageRounded} from "react-icons/bi";
import ImagePlace from '../../assets/img/rio.jpg';
import { createPath } from "react-router-dom";
import {getAUser} from '../../api';

const PubLugar = ({place}) => {
    const [theUser, setTheUser]=useState({})

    const searchTheUser = async (pId) => {
        const response = await getAUser(pId);
        setTheUser(response.data)
    }

    useEffect(()=>{
        if(place.userId==null){
            setTheUser({
                name:'The',
                lastName:'Anonimous'
            })
        }else{
            searchTheUser(place.userId).then().catch((err) => console.log(err))
        }
    },[])
    
    return (
        <article>
            <section className='place-container'>
                <div className="place-header">
                    <div className="place-header-perfil">
                        <img className='place-photo-perfil' />
                        <span>@{theUser.name} {theUser.lastName}</span>
                    </div>
                    <div className="place-header-options">
                        <BiDotsHorizontalRounded />
                    </div>
                </div>
                <div className="place-datos">
                    <h1 className='place-title'>{place.name}</h1>
                    <img src={place.images[0].url} className='place-image'></img>
                </div>
                <div className="place-footer">
                    <div className='place-profile-comment'>
                        <span>@{`${theUser.name} ${theUser.lastName}`} : {place.description}</span>
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