import React from 'react'
import './cart.scss'
import { Link } from 'react-router-dom'

const Cart = ({item}) => {
  return (
    <div className='cart'>
      <div className="imgContainer">
      <Link to={`/${item.id}`}>
      <img src={item.img} alt="" />
      </Link>
      </div>
      <div className="textContainer">
      <h2 className="title">
         <Link to={`/${item.id}`}>{item.title} </Link>
      </h2>
      <p className='address'>
        <img src="/images/pin.png" alt="" /> 
        <span>{item.address}</span>
        </p>
      <p className='price'>$ {item.price}</p>
      <div className="bottom">
        <div className="features">
          <div className="feature">
          <img src="/images/bed.png" alt="" />
          <span>{item.bedroom} bedroom</span>
          </div>
          <div className="feature">
          <img src="/images/bath.png" alt="" />
          <span>{item.bathroom } bathroom</span>
          </div>
        </div>
        <div className="icons">
<div className="icon">
  <img src="/images/save.png" alt="" />
</div>
<div className="icon">
  <img src="/images/chat.png" alt="" />
</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart