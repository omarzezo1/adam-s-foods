import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Product1 from "../../images/imgs/product-10.png";
import Product3 from "../../images/imgs/product-3.png";
import Product4 from "../../images/imgs/product-4.png";
import Product5 from "../../images/imgs/product-5.png";
import Product6 from "../../images/imgs/product-6.png";
import Star from "../../images/svg/star.svg";
import Cart from "../../images/svg/cart-product.svg";
import { Link } from "react-router-dom";

import { Navigation } from 'swiper/modules';

const BestProducts = () => {
  return (
    <section className="best-products">
        <div className="section-title"><h2>BEST SELLING PRODUCTS</h2></div>
      <div className="best-products-wraper">
      <Swiper
          className="mySwiper"
          navigation={true} 
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={40}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="product">
                <Link to={"/"}>
                <img src={Product1} alt="product-1"/>
                </Link>
                <div className="product-details">                   
                    <h3><Link to={"/"}>Pro Rule OQ 01</Link></h3>
                    <div className="price">
                        <p className="price-before">$120.99</p>
                        <p className="price-after">$110.99</p>
                    </div>
                    <div className="rating">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                    <div className="add-to-cart">
                      <img src={Cart} className="cart-img" alt="cart-img"/>
                      <span>ADD TO CART</span>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
                <Link to={"/"}>
                <img src={Product3} alt="product-1"/>
                </Link>
                <div className="product-details">
                    <h3><Link to={"/"}>M2 Muscletech Nitro</Link></h3>
                    <div className="price">
                        <p className="price-before">$120.99</p>
                        <p className="price-after">$110.99</p>
                    </div>
                    <div className="rating">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                    <div className="add-to-cart">
                      <img src={Cart} className="cart-img" alt="cart-img"/>
                      <span>ADD TO CART</span>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
                <Link to={"/"}>
                <img src={Product4} alt="product-1"/>
                </Link>
                <div className="product-details">
                    <h3><Link to={"/"}>M2 Muscletech Nitro</Link></h3>                   
                    <div className="price">
                        <p className="price-before">$120.99</p>
                        <p className="price-after">$110.99</p>
                    </div>
                    <div className="rating">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                    <div className="add-to-cart">
                      <img src={Cart} className="cart-img" alt="cart-img"/>
                      <span>ADD TO CART</span>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
                <Link to={"/"}>
                <img src={Product5} alt="product-1"/>
                </Link>
                <div className="product-details">
                    <h3><Link to={"/"}>Amino Energy 4b00</Link></h3>
                    <div className="price">
                        <p className="price-before">$120.99</p>
                        <p className="price-after">$110.99</p>
                    </div>
                    <div className="rating">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                    <div className="add-to-cart">
                      <img src={Cart} className="cart-img" alt="cart-img"/>
                      <span>ADD TO CART</span>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
                <Link to={"/"}>
                <img src={Product6} alt="product-1"/>
                </Link>
                <div className="product-details">
                    <h3> <Link to={"/"}>Pro Rule OQ 01</Link></h3>                   
                    <div className="price">
                        <p className="price-before">$120.99</p>
                        <p className="price-after">$110.99</p>
                    </div>
                    <div className="rating">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                    <div className="add-to-cart">
                      <img src={Cart} className="cart-img" alt="cart-img"/>
                      <span>ADD TO CART</span>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
                <Link to={"/"}>
                <img src={Product5} alt="product-1"/>
                </Link>
                <div className="product-details">                    
                    <h3><Link to={"/"}>Pro Rule OQ 01</Link></h3>                    
                    <div className="price">
                        <p className="price-before">$120.99</p>
                        <p className="price-after">$110.99</p>
                    </div>
                    <div className="rating">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                    <div className="add-to-cart">
                      <img src={Cart} className="cart-img" alt="cart-img"/>
                      <span>ADD TO CART</span>
                    </div>
                </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default BestProducts;
