const Products = ({product , cartFunc , cartList}) => {
    const addToCart = (id) => {
        const isAlreadyThere = cartList.some(item => {
            if(item.id === id) return true;
            else return false;
        });
        if(!isAlreadyThere){
            cartFunc([...cartList , product.find(item => item.id === id)]);
        }
    }   
    return (
        <>
         {product.map(item => {
            return(
             <div className = 'product flex direction between'  key={item.id}>
                <img src={item.image} alt=""/>
                <small>{item.title.length > 15 ? item.title.slice(0, 30)+"..." : item.title}</small>
                <span> $ <strong>{Math.floor(item.price)}</strong></span>
                <button className='btn add-cart-btn' onClick={() => addToCart(item.id)}>Add To Cart</button>
              </div>
            )
          })
      }
     </>

    )
}

export default Products