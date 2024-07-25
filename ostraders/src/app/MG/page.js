'use client'
import React, { useContext } from 'react'
import styles from '../styles/MG.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import data from '../assets/data.json'
import ProductItem from '@/components/ProductItem';
import StateContext from '@/context/state/StateContext';

const MG = () => {

  const brand = "MG";
  const datas = data.filter(item => item.brand == brand)
  const { setModelOpen, modelOpen } = useContext(StateContext)  

  return (
    <>
      <div className={`${styles.page} padd-x`}>
        <div className={styles.page_content}>
          <span>*Exclusive</span>
          <h1>Our Morris Garage Exclusive Products</h1>
          <div className="mt-3 d-flex justify-content-lg-end justify-content-center align-items-center flex-wrap">
          <button className='button btn1 transform  mb-2' onClick={() => setModelOpen(!modelOpen)} >Inquiry Now <i className=' fa-solid fa-arrow-right-long ms-1' style={{transform: "rotate(-45deg)"}}></i></button>
          </div>
        </div>
      </div>
    

      <div className="container mt-5">
        <div className="row my-5">
          {datas.length == 0 ?
            <div className="text-center">
              <p className='fs-3 text-white'>No Data Available on MG models</p>
            </div> : ''}
          {datas && datas.map((item, index) => {
            return <div key={index} className="col-lg-6 col-md-12 col-12 mb-100">
              <ProductItem data={item} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default MG
