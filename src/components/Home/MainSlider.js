import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import BG1 from "../../images/imgs/bg1.jpg";
import BG2 from "../../images/imgs/bg2.jpg";
import BG3 from "../../images/imgs/bg3.jpg";

import { Pagination } from "swiper/modules";

const MainSlider = () => {
  return (
    <section className="intro">
      <div className="social-media-links">
        <div className="social">
          <a href="" target="blanck">
            <span>IN</span>
            <p>INSTAGRAM</p>
          </a>
        </div>
        <div className="social">
          <a href="" target="blanck">
            <span>TW</span>
            <p>TWITTER</p>
          </a>
        </div>
        <div className="social">
          <a href="" target="blanck">
            <span>FB</span>
            <p>FACEBOOK</p>
          </a>
        </div>
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={BG1} alt="bg-1" />
          <div className="overlay">
            <div className="container">
              <div className="info-wraper">
                <h3>luxury agency</h3>
                <p>
                  Designed for you
                  <br />
                  Faster, easier and
                  <br />
                  Safer
                  <span>than ever</span>
                </p>
              </div>
              <div className="work-with">
                <Link to="">WORK WITH US</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={BG2} alt="bg-1" />
          <div className="overlay">
            <div className="container">
              <div className="info-wraper">
                <h3>luxury agency</h3>
                <p>
                  Designed for you
                  <br />
                  Faster, easier and
                  <br />
                  Safer
                  <span>than ever</span>
                </p>
              </div>
              <div className="work-with">
                <Link to="">WORK WITH US</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={BG3} alt="bg-1" />
          <div className="overlay">
            <div className="container">
              <div className="info-wraper">
                <h3>luxury agency</h3>
                <p>
                  Designed for you
                  <br />
                  Faster, easier and
                  <br />
                  Safer
                  <span>than ever</span>
                </p>
              </div>
              <div className="work-with">
                <Link to="">WORK WITH US</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainSlider;
