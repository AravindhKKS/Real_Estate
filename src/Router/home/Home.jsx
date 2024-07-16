import React from 'react'
import './home.scss'
import Search from '../../components/search/Search'

const Home = () => {
  return (
    <div className='home'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>Find Real Estate & Get Your Dream Place </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat earum blanditiis ex provident magni, explicabo sapiente beatae quod culpa vel est dignissimos voluptatem ratione nobis repellat ipsam molestias commodi officiis consequuntur.</p>
       <Search/>
       <div className="boxes">
        <div className="box">
          <h1>16+</h1>
          <h2>Years of Experience</h2>
        </div>
        <div className="box">
          <h1>200</h1>
          <h2>Award Gained</h2>
        </div>
        <div className="box">
          <h1>1200+</h1>
          <h2>Property Ready</h2>
        </div>
       </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/images/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Home

