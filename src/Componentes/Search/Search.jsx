import React,{useContext} from 'react'
import { SearchContext } from '../../context/SearchContext'

const Search = () => {
    const {searchFilters}=useContext(SearchContext);

    const activateFilter=(value)=>{
        searchFilters(value);
    }

    return (
        <>
           <input type="text" placeholder="Search..."
            className="input input-bordered input-info"
            onChange={(e)=>{activateFilter(e.target.value)}} />
        </>
    )
}

export default Search