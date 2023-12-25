import { useEffect, useState } from 'react'
import React from 'react'
import EmptyCart from './EmptyCart'
import TotalAmount from './TotalAmount'


const Cart = ({items , cartFunc}) => {
  const [total , setTotal] = useState(0);

  useEffect(() => {
    setTotal(items.reduce((acc , curr) => acc + Number(curr.price) * curr.qty , 0));
  },[items])

  const removeCartItem = (id) => {
    const newItem = items.filter(item => item.id !== id);
     cartFunc(newItem);
  }

  const totalAmount = () => {
    if(items.length > 0 && total > 0){
      return total;
    }
  }

  const handleIncraese = (id) => {
    const newData = [...items];
    const itemIndex = newData.findIndex(item => item.id === id);
   if(itemIndex !== -1){
      newData[itemIndex].qty += 1;
      cartFunc(newData);
   }
  }
  const handleDecrease = (id) => {
    const newData = [...items];
    const itemIndex = newData.findIndex(item => item.id === id); // Find the index of the item
    if (itemIndex !== -1 && newData[itemIndex].qty > 0) {
      newData[itemIndex].qty -= 1; // Decrease the quantity
      cartFunc(newData); // Update the cart with the new data
    }
  }

  return (
    <div className='parent flex  direction gap'>
    <div className='flex gap flex-wrap' style={{marginTop:"10px"}}>
    {items.length > 0 ? items.map((item) => {
      return(
        <div className = 'product flex direction between'  key={item.id}>
            <img src={item.image} alt="" />
            <small>{item.title.length > 15 ? item.title.slice(0, 30)+"..." : item.title}</small>
            <small>{item.price}</small>
            <button type="number"  disabled> Qty : <strong>{item.qty}</strong></button>
            <div className="btns flex gap">
             <button className='btn add-cart-btn' onClick={() => removeCartItem(item.id)}>Remove</button>
             <button className='btn' onClick={() => handleIncraese(item.id)}>Inc</button>
             <button className='btn' onClick={() => handleDecrease(item.id)}>Dec</button>
            </div>
        </div>
      )
    }) : <EmptyCart />}

      </div>
     {/* <TotalAmount items={items}/> */}
       <div className={totalAmount() > 0 ? 'total' : ""}> 
           {totalAmount() > 0 && "Total " + totalAmount()}
       </div>
    </div>
  )
}

export default Cart