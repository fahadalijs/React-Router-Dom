import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({src , title , price , discription , id , showBTn = true}) => {
    const navigat = useNavigate()        

    function singleProductPage() {
        navigat(`/singleProduct/${id}`)
    }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img className='w-[150px]'
        src={src}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{discription}...</p>
      <p>{price}</p>
      <div className="card-actions justify-end">
        {showBTn ? <button onClick={singleProductPage} className="btn btn-primary">Show product</button>
        : null
}
      </div>
    </div>
  </div>
  )
}

export default Card