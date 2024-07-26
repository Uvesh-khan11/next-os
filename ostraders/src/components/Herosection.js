'use client'
import { useGSAP } from '@gsap/react'
import React, { useContext, useEffect, useRef } from 'react'
import gsap from "gsap";
import StateContext from '@/context/state/StateContext';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import { Link } from 'react-router-dom';
// import logos from '../assets/logos.json';


const Herosection = () => {
    const {modelOpen, setModelOpen} = useContext(StateContext)

    useGSAP(() => {
        gsap.from(".herosection span, .herosection h1, .herosection p, .herosection .hero-content div", {
            y: 50,
            duration: .5,
            opacity: 0,
            stagger: .3
        })
    })

    return (
        <>
            <div className="herosection">
                <div className="video-section">
                    <video muted="none" loop="none" playsInline="none" autoPlay="none" preload="none"
                        data-stop="true">
                        <source src="/images/Ostraders01.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-content">
                        <h1>Pay Less, Drive Better</h1>
                        <p>Your money is safe with us!</p>
                        <div className="mt-3 d-flex justify-content-center align-items-center flex-wrap">
                            <a target='_blank' href="https://wa.me/971553914183?text=Hello-OS Traders" className='button me-3 transform mb-2'><i className="fa-brands fa-whatsapp me-1"></i> WhatsApp</a>
                            <button className='button btn1 transform  mb-2' onClick={() => setModelOpen(!modelOpen)} >Inquiry Now <i className=' fa-solid fa-arrow-right-long ms-1' style={{transform: "rotate(-45deg)"}}></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Herosection
