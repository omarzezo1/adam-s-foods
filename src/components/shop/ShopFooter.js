import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from '../../images/imgs/shop-logo1.png'
import Facebook from '../../images/svg/facebook.svg'
import Twiter from '../../images/svg/twitter.svg'
import Tiktok from '../../images/svg/tiktok.svg'
import Youtube from '../../images/svg/youtube.svg'

const ShopFooter = () => {
  return (
    <footer className='footer-shop'>
        <div className='footer-container'>
            <div className='inner-footer'>
                <div className='footer-nav'>
                    <ul>
                        <li><Link to="">Products</Link></li>
                        <li><Link to="">Offers</Link></li>
                        <li><Link to="">Contact</Link></li>
                    </ul>
                </div>
                <div className='footer-logo'><img src={FooterLogo} alt='footer-logo'/></div>
                <div className='footer-social'>
                    <a href=''><img src={Facebook} alt=''/></a>
                    <a href=''><img src={Twiter} alt=''/></a>
                    <a href=''><img src={Tiktok} alt=''/></a>
                    <a href=''><img src={Youtube} alt=''/></a>
                </div>

            </div>
            <div className='end-footer'>
                <p className='copyright'>© Copyrights, 2023 ADMOS <a href=''>Develped by Omar Abd Elaziz</a></p>
                <div className='pages'>
                    <Link to={"/"}>Terms of Service</Link>
                    <Link to={"/"}>Privacy Policy</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default ShopFooter