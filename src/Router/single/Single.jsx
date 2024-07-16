import React from 'react'
import Slider from '../../components/slider/Slider'
import Map from '../../components/map/Map'
import { singlePostData, userData } from '../../components/library/dummydata'
import './single.scss'

const Single = () => {
  return (
    <div className='single'>
      <div className="details">
       <div className="wrapper">
        <Slider img={singlePostData.images}/>
        <div className="info">
                 <div className="top">
                       <div className="post">
          <h1>{singlePostData.title}</h1>
                            <div className="address">
                              <img src="/images/pin.png" alt=""  />
                              <span>{singlePostData.address}</span>
                            </div>
                            <div className="price">${singlePostData.price}</div>
                      </div>
                      <div className="user">
                          <img src={userData.img} alt="" />
                          <span>{userData.name}</span>
                      </div>
                 </div>
          <div className="bottom">
            {singlePostData.description}
          </div>
        </div>
       </div>
      </div>
      <div className="features">
       <div className="wrapper">
        <p className="title">General</p>
        <div className="generalContainer">

        <div className="general">
          <img src="/images/utility.png" alt="" />
          <div className="generalText">
            <span>Utilities</span>
            <p>Renter is responsible</p>
          </div>
        </div>
        <div className="general">
          <img src="/images/pet.png" alt="" />
          <div className="generalText">
            <span>Pet Policy</span>
            <p>Pets Allowed</p>
          </div>
        </div>
        <div className="general">
          <img src="/images/fee.png" alt="" />
          <div className="generalText">
            <span>Property Fees</span>
            <p>Must have 3x the rent in total household income </p>
          </div>
        </div>
        </div>
        <p className="title">Size</p>
        <div className='size'>
          <div className="sizeinfo">
            <img src="/images/size.png" alt="" />
            <span>80sqm(861sqft)</span>
          </div>
          <div className="sizeinfo">
            <img src="/images/bed.png" alt="" />
            <span>2 bedroom</span>
          </div>
          <div className="sizeinfo">
            <img src="/images/bath.png" alt="" />
            <span>1 bathroom</span>
          </div>
        </div>
        <p className="title">Places</p>
        <div className="place">
          <div className="placeinfo">
            <img src="/images/school.png" alt="" />
            <div className="placeText">
              <span>School</span>
              <p>250m away</p>
            </div>
            </div>
            <div className="placeinfo">
            <img src="/images/bus.png" alt="" />
            <div className="placeText">
              <span>Bus Stop</span>
              <p>100m away</p>
            </div>
            </div>
            <div className="placeinfo">
            <img src="/images/restaurant.png" alt="" />
            <div className="placeText">
              <span>Restaurant</span>
              <p>200m away</p>
            </div>
          </div>
        </div>
        <p className="title">Location</p>
        <div className="mapContainer">
        <Map items={[singlePostData]}/>
        </div>
        <div className="buttons">
          <button>
            <img src="/images/chat.png" alt="" />
            <span>Send a Message</span>
          </button>

          <button>
            <img src="/images/save.png" alt="" />
            <span>Save the Place</span>
          </button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Single