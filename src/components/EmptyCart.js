import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='empty-cart'>
        <h2>Empty Cart</h2>
        <Link to='/'>
          <p>Add Items Click here</p>
        </Link>
    </div>
  )
}

export default EmptyCart