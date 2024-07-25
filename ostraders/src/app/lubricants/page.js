'use client'
import React, { useContext } from 'react'
import PageHeader from '@/components/PageHeader'
import styles from '@/app/styles/about.module.css'
import ProductItem2 from '@/components/ProductItem2'
import data from '@/app/assets/lubricants.json';
import StateContext from '@/context/state/StateContext';


const Lubricant = () => {

    
  
  const {product2Id, setproduct2Id, category, setCategory, modelOpen, setModelOpen} = useContext(StateContext)


    return (
        <>
            <PageHeader subTitle="Superior Fluid Solutions" title={`Our Lubricant`} spanTitle={`Collection`} bgImage="/images/lubricants/lubricant4.jpg" />
            <div className={`container-fluid padd-x ${styles.about}`}>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <span className={`${styles.subTitle} mb-3`}><img src="/images/FRANK OIL 01.png" className='img-fluid w-25' alt="" /></span>
                        <h1>Patented Surface Active <br /><span>Lubrication Technology</span> </h1>
                        <p className={styles.para}>Welcome to Frankoil, home to the world's most powerful lubricants. Our products are designed using patented Surface Active Lubrication Technology to ensure superior performance and protection for all types of engines and machinery.
                        </p>
                    </div>
                    <div className="col-lg-6 col-12 position-relative px-4">
                        <div className="cat-item" style={{ position: "static" }}>
                            <div className="cat-image">
                                <video muted="none" loop="none" playsInline="none" autoPlay="none" preload="none"
                                    data-stop="true">
                                    <source src="./images/Frankol.mp4" type="video/mp4" />
                                </video>
                                <div className="curvbtn">
                                    <div><i className=' fa-solid fa-arrow-right-long' style={{ transform: "rotate(-45deg)" }}></i></div>
                                    <div class="br-left-top">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                        </svg>
                                    </div>
                                    <div class="br-right-bottom">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid padd-x my-5">
                <div className="heading container-fluid d-flex justify-content-center align-items-center flex-column">
                    <span className='span'>Lubricants</span>
                    <h2>Our <span>Products</span></h2>
                </div>
                <div className="row g-0">
                    {data.map((item, index) => {
                        return <div key={index} className="col-lg-4 col-md-6 col-12">
                            <ProductItem2 data={item} setCategory={setCategory} open={modelOpen} setId={setproduct2Id} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Lubricant
