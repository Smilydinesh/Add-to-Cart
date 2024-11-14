import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import ProductList from './Components/ProductList'
import CartList from './Components/CartList'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className='bg-gray-400 min-h-screen'>
      <NavBar cartCount={cartItems.length} openCart={openCart} />
      <ProductList cartItems={cartItems} setCartItems={setCartItems} />
      {
        isCartOpen && (
          <CartList cartItems={cartItems} closeCart={closeCart} removeFromCart={removeFromCart}/>
        )
      }
    </div>
  )
}

export default App
