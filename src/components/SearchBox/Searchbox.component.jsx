import React from 'react'
import "./search-box.style.css";
const SearchBox = (props) => {
    const {onChangeHandler , handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
    <input className='search-box' placeholder='Search Movies' type="search" onChange={(event)=>onChangeHandler(event.target.value)}  />
    </form>
  )
}

export default SearchBox