import React, { useEffect } from 'react'

const TotalAmount = ({items}) => {
    console.log(items)
    useEffect(() => {
    },[items])

    return (
        <div className='totla' style={{border: "1px solid #ddd" , padding : "1rem"}}>
         <h3>Total Payble</h3>
            {items.reduce((curr , item) => {
                return (item.qty * item.price);
            },1)}
        </div>
    )
}

export default TotalAmount