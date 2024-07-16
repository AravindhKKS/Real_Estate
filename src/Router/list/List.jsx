import React from 'react'
import './list.scss'
import Filter from '../../components/filter/Filter'
import Cart from '../../components/cart/Cart'
import {listData} from '../../components/library/dummydata'
import Map from '../../components/map/Map'

const List = () => {
  let data = listData 
  return (
    <div className='list'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
        {data.map((item) => (
          <Cart key={item.id} item={item}/>
        ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default List