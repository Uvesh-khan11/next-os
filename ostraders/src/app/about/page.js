import React from 'react'
import PageHeader from '@/components/PageHeader'
import styles from '@/app/styles/about.module.css'
import ServiceCard from '@/components/ServiceCard'
import services from '../assets/service.json';
import test from '@/app/styles/testimonial.module.css'

const About = () => {
  return (
    <>
      <PageHeader subTitle="OS Traders" title="About" spanTitle="Us" bgImage="/images/headerBg.jpeg" />
      <div className={`container-fluid padd-x ${styles.about}`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <span className={styles.subTitle}>OS Traders</span>
            <h1>Revolutionizing the Road <br /><span>with Trust and Innovation</span> </h1>
            <p>A father and daughter dreamt of a revolution on four wheels. With a shared passion for automobiles, they envisioned a company that catered not just to the corporate giants but to every family seeking a reliable and trusted companion on the road. Thus, their journey began in 2018, forging a legacy of service that empowers every driver, be it a family embarking on a weekend getaway or a corporation shaping the future of the city.</p>
            <p>At OS TRADERS FZCO, we are not just in the business of selling cars; we are building strong relationships fueled by trust and expertise.</p>
            <p>We are a BRAND DESTINATION : TOYOTA/ LEXUS/ MERCEDES/ VOLVO/ MAN</p>
            <h6>Our Focus</h6>
            <ul>
              <li><i className='fa-solid fa-check'></i>Sustainable Solutions.</li>
              <li><i className='fa-solid fa-check'></i>Innovation</li>
              <li><i className='fa-solid fa-check'></i>Transparency</li>
            </ul>
            <p>Join us on the road ahead where your money is safe with us! Together, we navigate the world of great solutions with confidence and trust.</p>
          </div>
          <div className="col-lg-6 col-12 position-relative px-4">
            <div className="cat-item" style={{ position: "static" }}>
              <div className="cat-image">
                <img src="/images/OSteering.jpg" className='img-fluid' alt="" />
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

      <div className="container-fluid padd-x">
        <div className="heading d-flex justify-content-center align-items-center flex-column">
          <span className='span'>What we do</span>
          <h2>Our <span>Services</span></h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div className={test.card}>
              <div className={test.content}>
                <h4>Brand new units</h4>
                <p>Modification of units and trucks, Genuine motor parts, Genuine spare parts, Motor oil, Transport to any destination, We are well-placed in the UAE, India, and Africa regions to identify and exploit opportunities.
                </p>
              </div>
              <div className={test.bottom}>
                <div className={test.curvbtn}>
                  <div className={test.img} style={{fontWeight: "bold" }}>.1</div>
                  <div className={test.br_left_top}>
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                    </svg>
                  </div>
                  <div className={test.br_right_bottom}>
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className={test.card}>
              <div className={test.content}>
                <h4>Our offerings include:</h4>
                <p>Only genuine & certified products and services, In-depth knowledge of the industries, Competitive pricing, Fast and prompt services, Reliable and trustworthy services and products</p>
              </div>
              <div className={test.bottom}>
                <div className={test.curvbtn}>
                  <div className={test.img} style={{fontWeight: "bold" }}>.2</div>
                  <div className={test.br_left_top}>
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                    </svg>
                  </div>
                  <div className={test.br_right_bottom}>
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid padd-x">
        <div className="heading d-flex justify-content-center align-items-center flex-column">
          <span className='span'>Process</span>
          <h2>Our <span>Shipping Process</span></h2>
        </div>

        <div className="row">
          {services.map((item, index) => {
            return <div key={index} className="col-lg-4 col-md-6 col-12">
              <ServiceCard key={index} data={item} index={index} />
            </div>
          })}
        </div>

      </div>
    </>

  )
}

export default About
