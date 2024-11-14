import React, {useState, useEffect} from 'react'

function ProductList({cartItems, setCartItems}) {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        console.log(products);
    }, []);

    const addToCart = (product) => {
        if(cartItems.find((item) => item.id === product.id)) {
            alert('Product is already in Cart');
        }    
        else {
            setCartItems([...cartItems, product]);
        }    
    };

  return (
    <div className='product'>
        {products.map((product) => (
            <div key = {product.id} className='border border-gray-400 p-4 rounded-lg shadow-lg bg-white'>
                <img src={product.image} alt={product.title} className='h-40 mx-auto mb-4' />
                <h2 className='text-lg font-semibold text-gray-700 p-2'>{product.title}</h2>
                <p className='text-blue-800 p-2 text-lg text-bold'>${product.price}</p>
                <button onClick={() => addToCart(product)} className='bg-green-500 text-white w-full p-2 my-2 rounded-full hover:bg-green-700'>Add to Cart</button>
            </div>
        ))}
    </div>
  )
}

export default ProductList