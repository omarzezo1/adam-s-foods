import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ShopLogo from '../../images/imgs/shop-logo.png'
import Search from '../../images/svg/search.svg'
import User from '../../images/svg/user.svg'
import Menu from '../../images/svg/menu-shop.svg'

const ShopNavbar = () => {
    const [navScroll, setNavScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setNavScroll(true)
            }else{
                setNavScroll(false)
            }
        })
    },[])

  return (
    <nav className={`${navScroll ? "shop-navbar onscroll":"shop-navbar"}`}>
        <div className='container'>
            <div className='shop-navbar-container'>
                <ul className='nav-links'>
                    <li><NavLink to="/shop">Home</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/offers">Best Offers</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
                <div className='shop-logo'>
                    <img src={ShopLogo} alt='shop-logo'/>
                </div>
                <div className='icons-container'>
                    <div className='search'><img src={Search} alt='user'/></div>
                    <div className='login-register'>
                        <img src={User} alt='search'/>
                        <span>My Account</span>
                    </div>
                    <div className='menu'><img src={Menu} alt='menu'/></div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default ShopNavbar