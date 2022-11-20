import React from 'react';
import "./card.style.css";

const Card = ({movie , handleModal}) => {

  return (
    <div className='card-container' onClick={()=> handleModal(movie["imdbID"])} >
        
        {
          movie["Poster"] !== "N/A" ? <img src={movie["Poster"]} alt="" /> : <small>No images available</small>
        }
        <p className='card-text'>{movie["Title"]}</p>
    </div>
  )
}

export default Card