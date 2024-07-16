import React from 'react'
import './list.scss'
import { listData } from '../library/dummydata'
import Cart from '../../components/cart/Cart'

const List = () => {
  return (
    <div className='list'> 
    {listData.map((item) => (
        <Cart item={item} key={item.id}/>
    ))}
    </div>
  )
}

export default List