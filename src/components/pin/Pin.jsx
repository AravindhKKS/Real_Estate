import React from 'react'
import './pin.scss'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import L from 'leaflet';

const Pin = ({item}) => {
    const icon = L.icon({iconUrl:"/images/locationPin.png", iconSize:[20,30]})
  return (
    <div>
    <Marker  position={[item.latitude, item.longitude]} icon={icon}  className="pin">
    <Popup>
      <div className="popContainer">
        <img src={item.img} alt="" />
        <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>{item.price}</b>
        </div>
      </div>
    </Popup>
  </Marker>
    </div>
  )
}

export default Pin