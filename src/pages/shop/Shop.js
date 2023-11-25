import React from 'react'
import ShopIntro from '../../components/shop/ShopIntro'
import ShopNavbar from '../../components/shop/ShopNavbar'

const Shop = () => {
  return (
    <div className='shop-page'>
        <ShopNavbar/>
        <ShopIntro/>
    </div>
  )
}

export default Shop