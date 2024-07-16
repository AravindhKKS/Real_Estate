import React from 'react'
import './filter.scss'


const Filter = () => {
  return (
    <div className='filter'>
        <h1>Search results for <b>India</b></h1>
        <div className="top">
        <div className="items">
            <label htmlFor="location">Location</label>
            <input type="text" id='location' name='location' placeholder='City Location'/>
        </div>
        </div>
        <div className="bottom">
        <div className="items">
            <label htmlFor="type">Type</label>
        <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
        </select>
        </div>
        <div className="items">
        <label htmlFor="property">Property</label>
        <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
        </select>
        </div>
        <div className="items">
        <label htmlFor="minPrice">Min Price</label>
        <input type="number" min={0} id='minPrice' name='minPrice' placeholder='Min Price'/>
        </div>
        <div className="items">
            <label htmlFor="maxPrice">Max Price</label>
            <input type="number" min={0}  id='maxPrice' name='maxPrice' placeholder='Max Price'/>
        </div>
        <div className="items">
            <label htmlFor="bedroom">Bedroom</label>
            <input type="number" min={0}  id='bedroom' name='bedroom' placeholder='Any'/>
        </div>
        <button>
            <img src="/images/search.png" alt="" />
        </button>
        </div>
    </div>
  )
}

export default Filter