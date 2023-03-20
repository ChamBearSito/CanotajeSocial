import React,{createContext, useEffect, useState} from 'react'
import {filterPlaces} from '../api/index'

export const SearchContext=createContext();

const SearchProvider = (props) => {
    const [placesFilter, setPlacesFilter]=useState([]);

    const searchFilters=async(textFilter)=>{
        const response = await filterPlaces(textFilter);
        setPlacesFilter(response.data)
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