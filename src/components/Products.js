import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductsList from './ProductList';

const Products = ({cartFunc , cartItem}) => {
    const [products , setProducts] = useState([]);

     const fetchData = async() => {
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
             if(data){
                const updatedData = data.map(item => {
                    return {...item, qty: 1 }
                }); 
                setProducts(updatedData)
             }
        }catch(err){
            console.log(err);

        }
     }
     
     useEffect(() => {
        fetchData();
     },[])

     console.log(products);

  return (
    <div className='products'>
        <div className="product-container flex flex-wrap gap">
            <ProductsList cartFunc={cartFunc}  cartList={cartItem} product={products}/>
        </div>
    </div>
  )
}

export default Products