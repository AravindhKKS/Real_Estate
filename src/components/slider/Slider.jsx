import React, { useState } from 'react'
import './slider.scss'

const Slider = ({img}) => {
  const [imageIndex , setImageIndex] = useState(null)

  const changeImage = (dir) => {
    console.log(img.length)
if(dir === "left"){
    if(imageIndex === 0 ){
      setImageIndex(3)
    }else{
      setImageIndex(imageIndex - 1)
    }
}else{
  if(imageIndex === img.length - 1){
    setImageIndex(0)
  }else{
    setImageIndex(imageIndex + 1)
  }
}
  }

  return (
    <div className='slider'>
    {imageIndex !== null &&  <div className="fullSlider">
        <div className="arrow">
          <img src="/images/arrow.png" alt="" onClick={ () => changeImage('left')} />
        </div>
        <div className="imgContainer">
          <img src={img[imageIndex]} alt="" />
        </div>
        <div className="arrow">   
           <img src="/images/arrow.png" className='right' alt="" onClick={ () => changeImage('right')} />
       </div>
       <div className="close" onClick={() => setImageIndex(null)}>x</div>
      </div>}
     <div className="bigImage">
      <img src={img[0]} alt="" onClick={() => setImageIndex(0)} />
     </div>
     <div className="smallImage">
      {img.slice(1).map((image, index) =>(
        <img src={image} alt=""  key={index} onClick={() => setImageIndex(index + 1)}/>
      ) )}
           </div>
    </div>
  )
}

export default Slider