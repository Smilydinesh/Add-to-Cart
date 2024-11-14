import React from 'react'

function NavBar({openCart, cartCount}) {
  return (
    <div className='bg-gray-600 flex justify-between p-4 font-bold text-xl text-white'>
        <h1 className='p-2'>Product List</h1>
        <button onClick={openCart} className='bg-yellow-500 p-2 rounded-full text-black'>Cart : {cartCount}</button>
    </div>
  )
}

export default NavBar