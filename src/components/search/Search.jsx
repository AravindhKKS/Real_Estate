import React, { useState } from 'react'
import './search.scss'

const Search = () => {
  const types = ["buy",'rent']
  const [select,setSelect] = useState({
    type:"buy",
    location:'',
    minPrice:0,
    maxPrice:0
  })
const handleClick = (val) => {
  setSelect((pre) => ({...pre, type:val}))
}

  return (
    <div className='search'>
      <div className='types'>
       {types.map((type) => (
      <button onClick={() => handleClick(type)} className={select.type === type ? 'active' : ""} key={type} >{type}</button>
       ))}
      </div>
      <form action="" className="form">
        <input type="text" name='location' placeholder='City Location'  />
        <input type="number" name='minPrice' placeholder='Min Price' min={0} max={1000000} />
        <input type="number"  name='maxPrice' placeholder='Max Price' min={0} max={1000000}/>
        <button className='searchButton'>
          <img src="/images/search.png" alt="" />
          </button>  
      </form>
    </div>
  )
}

export default Search