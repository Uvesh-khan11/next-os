'use client'
import React, { useEffect } from 'react'
import styles from '../app/styles/testimonial.module.css'
import TestimonialCard from './TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Autoplay } from 'swiper/modules';
import testimonial from '../app/assets/testimonial.json'

const Testimonial = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.testmonial}`,
                start: "top 80%",
                end: "bottom bottom",
                scroller: ".smoothContainer",
            }
        })

        tl.from(`.${styles.card}`, {
            y: 50,
            duration: .5,
            opacity: 0,
            stagger: .3
        })
        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                trigger.kill(); // Kill all ScrollTriggers
            });
        };
    })


    return (
        <>
            <div className={`container-fluid padd-x ${styles.testmonial}`}>
                <div className="heading container-fluid d-flex justify-content-center align-items-center flex-column">
                    <span className='span'>Testimonial</span>
                    <h2>What our <span>Client Says</span></h2>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {testimonial.map((item, index) => {
                        return <SwiperSlide key={index}>
                            <TestimonialCard data={item} index={index} />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default Testimonial
