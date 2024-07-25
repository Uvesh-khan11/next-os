'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Banner = () => {
    return (
        <>
            <div className="container-fluid mb-3 px-3">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        // when window width is >= 1024px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper">
                    <SwiperSlide className='bannerItem' >
                        <img src="/images/banner1.jpeg" className='img-fluid d-md-block d-none object-fit-cover w-100' style={{borderRadius: "30px"}} alt="" />
                        <img src="/images/bannerMobile1.jpeg" className='img-fluid d-md-none d-block object-fit-cover w-100' style={{borderRadius: "30px"}} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='bannerItem'>
                        <img src="/images/banner2.jpeg" className='img-fluid d-md-block d-none object-fit-cover w-100' style={{borderRadius: "30px"}} alt="" />
                        <img src="/images/bannerMobile2.jpeg" className='img-fluid d-md-none d-block object-fit-cover w-100' style={{borderRadius: "30px"}} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='bannerItem'>
                        <img src="/images/banner3.jpeg" className='img-fluid d-md-block d-none object-fit-cover w-100' style={{borderRadius: "30px"}} alt="" />
                        <img src="/images/bannerMobile3.jpeg" className='img-fluid d-md-none d-block object-fit-cover w-100' style={{borderRadius: "30px"}} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Banner
