import React, { useEffect, useState } from 'react'
import Logo from '../images/imgs/logo-light.png'
import { NavLink } from 'react-router-dom'
import Cart from '../images/svg/cart.svg'
import Search from '../images/svg/search.svg'
import Menu from '../images/svg/menu.svg'
import Close from '../images/svg/close.svg'


const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(true)
    const [closeMenu, setCloseMenu] = useState(false)

    useEffect(()=>{
        window.addEventListener("load", ()=>{
            if(window.scrollY > 0){
                setScroll(true)
            }else{
                setScroll(false)
            }
        })

        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 0){
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    },[])

  return (
    <nav className='navbar' style={{background: scroll ? "rgb(51, 51, 51,.9)":"transparent"}}>
        <div className='container'>
            <div className='nav-container'>
                <div className='logo'>
                    <a href="/">
                        <img src={Logo} alt='logo'/>
                    </a>
                </div>
                <div className='nav-wraper'>
                    <ul className={mobileMenu ? "hide-menu":""}>
                        <li>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/pages"}>PAGES</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/gallery"}>GALLERY</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/blog"}>BLOG</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop"}>SHOP</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contacts"}>CONTACTS</NavLink>
                        </li>
                    </ul>
                    <div className='nav-icons'>
                        <div className='mobile-menu' onClick={()=>{
                            setMobileMenu(false)
                            setCloseMenu(true)
                        }}>
                            <img src={Menu} alt='mobile-menu'/>
                        </div>
                        <div className='close-menu' style={{display: closeMenu ? "block":"none"}} onClick={()=>{
                            setCloseMenu(false)
                            setMobileMenu(true)
                        }}>
                            <img src={Close} alt='close-menu'/>
                        </div>
                        <div className='cart'>
                            <img src={Cart} alt='cart'/>
                            <span>0</span>
                        </div>
                        <div className='search'>
                            <img src={Search} alt='search'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar