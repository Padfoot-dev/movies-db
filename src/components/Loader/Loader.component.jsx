import React from 'react'
import "./loader.style.css"

const Loader = () => {
  return (
     <div className='loader'>
      Loading...
      <i className="fas fa-sync-alt fa-spin"></i>
    </div>
  )
}

export default Loader