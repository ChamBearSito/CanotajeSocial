import React,{createContext, useEffect, useState} from 'react'
import {filterPlaces} from '../api/index'

export const SearchContext=createContext();

const SearchProvider = (props) => {
  //Creamos estado para filtrar los Places 
    const [placesFilter, setPlacesFilter]=useState([]);


    // Recibimos el textFiltrer y luego llamamos a la Api y se lo mandamos por parametro 
    const searchFilters=async(textFilter)=>{
        const response = await filterPlaces(textFilter);
        setPlacesFilter(response.data.reverse())
    }

    return (
        <>
          <SearchContext.Provider value={{placesFilter, searchFilters}}>
            {props.children}
          </SearchContext.Provider>

        </>
    )
}

export default SearchProvider