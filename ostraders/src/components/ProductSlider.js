'use client'
import React, { useEffect, useRef } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import styles from '../styles/product.module.css'
import ProductItem from "./ProductItem";
import 'owl.carousel';
import data from '../app/assets/data.json';

const ProductSlider = () => {
    const owlRef = useRef(null); // Reference to the OwlCarousel component

    const options = {
        center: true,
        loop: true,
        margin: 20,
        nav: false, // Disable default navigation
        dots: false,
        autoplay: true, // Enable automatic sliding
        autoplayTimeout: 4000, // Set the delay between slides in milliseconds (3 seconds in this case)
        autoplayHoverPause: true, // Pause on hover
        responsive: {
            0: {
                items: 1 // Display 1 item on small screens
            },
            999: {
                items: 1// Display 2 items on medium screens
            },
            999: {
                items: 2 // Display 3 items on large screens
            }
        }
    };

    const goToPrevSlide = () => {
        if (owlRef.current) {
            owlRef.current.prev(); // Go to the previous slide
        }
    };

    const goToNextSlide = () => {
        if (owlRef.current) {
            owlRef.current.next(); // Go to the next slide
        }
    };

    return (
        <>
            <div className="header mt-4">
                <div className="container d-flex justify-content-center align-items-center flex-column">
                    <span>select your car</span>
                    <h2>Our Luxury <span>Car Collections</span></h2>
                </div>
            </div>
            <div className="container-fluid p-0 my-3 position-relative productSlider">
                <OwlCarousel
                    ref={owlRef}
                    className='owl-theme'
                    {...options}
                >

                    {data.map((item, index) => {
                        return <div key={index} className="item">
                            <ProductItem data={item} />
                        </div>
                    })}
                </OwlCarousel>
                {/* Custom navigation buttons */}
                <div className="customBtn custom-prev" onClick={goToPrevSlide}>
                    <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="customBtn custom-next" onClick={goToNextSlide}>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </>
    );
};

export default ProductSlider;
