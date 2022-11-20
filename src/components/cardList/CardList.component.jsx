import React from 'react'
import Card from '../Card/Card.component'
import "./cardList.style.css";

const CardList = (props) => {
    const { movies , handleModal } = props;
  return (
    <div className='card-list'>
        {
            movies.map( (movie) => <Card key={movie["imdbID"]}  movie={movie} handleModal = {handleModal} />)
        }
    </div>
  )
}

export default CardList