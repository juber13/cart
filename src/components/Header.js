import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = ({items}) => {
    return (
        <header className=''>
          <div className="container flex between">
            <div className="left">
               <Link to="/">
                 Sopee Shop
               </Link>
            </div>
            <div className="right">
                <Link to="/cart">
                   <FaCartPlus  className='icon '/>
                  </Link>
                  {items.length > 0 ? <span className='cartItemLength flex'>{items.length}</span>: "" } 
            </div>
          </div>
        </header>
    )
}

export default Header