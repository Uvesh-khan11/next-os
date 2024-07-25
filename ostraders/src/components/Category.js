'use client'
import React, { useEffect, } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


const Category = () => {




    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".categories",
                start: "top top",
                end: "+=460%", // Change bottom to end
                scroller: ".smoothContainer",
                pin: true,
                scrub: true,
            }
        });

        t2.to(".cat-1", {
            y: -100,
            opacity: 0,
            duration: 2,
            delay: 4
        });

        t2.from(".cat-2", {
            y: 100,
            opacity: 0,
            duration: 1,
            display: "none",
        });

        t2.to(".cat-2", {
            y: -100,
            opacity: 0,
            duration: 2,
            delay: 4,
            display: "none",
        });

        t2.from(".cat-3", {
            y: 100,
            opacity: 0,
            duration: 1,
            display: "none",
        });

        t2.to(".cat-3", {
            y: -100,
            opacity: 0,
            duration: 2,
            delay: 4
        });

        t2.from(".cat-4", {
            y: 100,
            opacity: 0,
            duration: 1,
            display: "none",
        });

        t2.to(".cat-4", {
            y: -100,
            opacity: 0,
            duration: 2,
            delay: 4,
            display: "none",
        });

        t2.from(".cat-5", {
            y: 100,
            opacity: 0,
            duration: 1,
            display: "none",
        });

        t2.to(".cat-5", {
            y: -100,
            opacity: 0,
            duration: 2,
            delay: 4,
            display: "none",
        });

        t2.from(".cat-6", {
            y: 100,
            opacity: 0,
            duration: 1,
            display: "none",
        });

        t2.to(".cat-6", {
            y: -100,
            opacity: 0,
            duration: 2,
            delay: 4,
            display: "none",
        });

        t2.from(".cat-7", {
            y: 100,
            opacity: 0,
            duration: 1,
            display: "none",
        });

        t2.to(".cat-7", {
            y: -100,
            opacity: 0,
            duration: 2,
            delay: 4,
            display: "none",
        });

        t2.from(".cat-8", {
            y: 100,
            opacity: 0,
            duration: 1,
            display: "none",
        });

        t2.to(".cat-8", {
            y: -100,
            opacity: 0,
            duration: 2,
            delay: 4,
            display: "none",
        });

        t2.from(".cat-9", {
            y: 100,
            opacity: 0,
            duration: 1,
            display: "none",
        });

        // Clean up ScrollTrigger when component unmounts
        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                trigger.kill(); // Kill all ScrollTriggers
            });
        };
    }, []); // Empty dependency array ensures this effect runs only once


    return (
        <>
            <div className="contianer-fluid categories padd-x">
                <div className="row justify-content-between content-list">
                    <div className=" content-left">
                        <div className="cat-head">
                            <h2>Our <br /> <span>categories</span></h2>
                            <p>At OS Traders, we offer a wide range of vehicles and services to meet all your needs. We also provide various services, including spare parts from multiple brands, accessories, tires, batteries, and lubricants.</p>
                        </div>
                    </div>
                    <div className="content-right  pt-xl-0 pt-xl-3 pt-md-3">
                        <div className="cat-list">
                            <a href="/collections/cars/commercial" className="cat-item cat-1">
                                <div className="cat-image">
                                    <img src="./images/comercial.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>Commercial Cars</h4>
                                    </div>
                                    <div className="info">
                                        <h3>Commercial Cars</h3>
                                        <span>Car Types</span>
                                    </div>
                                    <div className="curvbtn">
                                        <div><i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i></div>
                                        <div className="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div className="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="/collections/cars/luxury" className="cat-item cat-2">
                                <div className="cat-image" style={{ alignItems: "end" }}>
                                    <img src="./images/luxury.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>Luxury Cars</h4>
                                    </div>
                                    <div className="info">
                                        <h3>Luxury Cars</h3>
                                        <span>Car Types</span>
                                    </div>
                                    <div className="curvbtn">
                                        <div><i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i></div>
                                        <div className="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div className="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>


                            <a href="/collections/cars/affordable" className="cat-item cat-3">
                                <div className="cat-image" style={{ alignItems: "end" }}>
                                    <img src="./images/afforadable.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>Affordabale Cars</h4>
                                    </div>
                                    <div className="info">
                                        <h3>Affordabale Cars</h3>
                                        <span>Car Types</span>
                                    </div>
                                    <div className="curvbtn">
                                        <div><i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i></div>
                                        <div className="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div className="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="/collections/cars/hybrid-Ev" className="cat-item cat-4">
                                <div className="cat-image">
                                    <img src="./images/Hybrid.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>Hybrid and EV</h4>
                                    </div>
                                    <div className="info">
                                        <h3>Hybrid and EV</h3>
                                        <span>Car Types</span>
                                    </div>
                                    <div className="curvbtn">
                                        <div><i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i></div>
                                        <div className="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div className="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="/collections/trucks" className="cat-item cat-5">
                                <div className="cat-image">
                                    <img src="./images/trucks.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>Trucks</h4>
                                    </div>
                                    <div className="info">
                                        <h3>Trucks</h3>
                                        <span>Car Types</span>
                                    </div>
                                    <div className="curvbtn">
                                        <div><i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i></div>
                                        <div className="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div className="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="/MG" className="cat-item cat-6">
                                <div className="cat-image">
                                    <img src="./images/MG_HS.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>MG Models</h4>
                                    </div>
                                    <div className="info">
                                        <h3>MG Models</h3>
                                        <span>Car Types</span>
                                    </div>
                                    <div className="curvbtn">
                                        <div><i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i></div>
                                        <div className="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div className="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="/accessories" className="cat-item cat-7">
                                <div className="cat-image">
                                    <img src="./images/accessories.jpg" className='img-fluid' alt="" />
                                    <div className="title w-100">
                                        <h4>Accessories</h4>
                                    </div>
                                    <div className="info">
                                        <h3>Accessories</h3>
                                        <span>accessories</span>
                                    </div>
                                    <div className="curvbtn">
                                        <div><i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i></div>
                                        <div className="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div className="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="/spare-parts" className="cat-item cat-8">
                                <div className="cat-image">
                                    <img src="./images/spare parts.jpg" className='img-fluid' alt="" />
                                    <div className="title w-100">
                                        <h4>Spare Parts</h4>
                                    </div>
                                    <div className="info">
                                        <h3>Spare Parts</h3>
                                        <span>parts</span>
                                    </div>
                                    <div className="curvbtn">
                                        <div><i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i></div>
                                        <div className="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div className="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>


                            <a href="/lubricants" className="cat-item cat-9">
                                <div className="cat-image">
                                    <img src="./images/car oils.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>Lubricants</h4>
                                    </div>
                                    <div className="info">
                                        <h3>Lubricants</h3>
                                        <span>Fluids</span>
                                    </div>
                                    <div className="curvbtn">
                                        <div><i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i></div>
                                        <div className="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div className="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
