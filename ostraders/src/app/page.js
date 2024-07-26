'use client'
import React, { useEffect } from 'react'
import Herosection from '../components/Herosection';
import Category from '../components/Category';
import Search from '../components/Search';
import Testimonial from '../components/Testimonial';
import logo from '../app/assets/logos.json';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import Banner from '../components/Banner';
import ProductSlider from '@/components/ProductSlider';

const Home = (props) => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-brand",
        start: "top 80%",
        end: "bottom bottom",
        scroller: ".smoothContainer",
      }
    })


    tl.from(".about-brand .brand", {
      innerHTML: 30, // Target value
      duration: 3,    // Duration of the animation in seconds
      snap: { innerHTML: 1 },    // Snap to whole numbers
      ease: 'none',              // No easing
      onUpdate: function () {
        document.querySelector(".about-brand .brand").innerHTML = Math.round(document.querySelector(".about-brand .brand").innerHTML); // Update the innerHTML with rounded value
      }
    })
    tl.from(".about-brand .customer", {
      innerHTML: 150, // Target value
      duration: 3,    // Duration of the animation in seconds
      snap: { innerHTML: 1 },    // Snap to whole numbers
      ease: 'none',              // No easing
      onUpdate: function () {
        document.querySelector(".about-brand .customer").innerHTML = Math.round(document.querySelector(".about-brand .customer").innerHTML); // Update the innerHTML with rounded value
      }
    }, '-=1')
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill(); // Kill all ScrollTriggers
      });
    };
  })

  return (
    <>
      <Herosection />
      <Category />
      <Banner />  
      <Search />
      <ProductSlider />
      <Testimonial />
      <div className="container-fluid padd-x about-brand mt-4">
        <div className="row">
          <div className="col-md-6 col-12">
            <h3 ><b className='brand'>30</b><span>+</span></h3>
            <p>Discover vehicles, parts, and accessories from over 30 top brands.</p>
          </div>
          <div className="col-md-6 col-12">
            <h3><b className='customer'>150</b><span>+</span></h3>
            <p>Proudly serving more than 150 satisfied customers in Burundi, Rwanda, Congo, Tanzania, and Uganda.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid padd-x">
        <div style={{ margin: "40px 0px 10px 0" }} className="heading container-fluid d-flex justify-content-center align-items-center flex-column">
          <span className='span'>brands</span>
          <h2>Our <span>Brands</span></h2>
        </div>
        <div className='logos mt-3'>
          {logo.map((item, index) => {
            return <div className='logo-img'><img key={index} src={item.url} alt={item.name} /> </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Home;
