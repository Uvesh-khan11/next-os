'use client'
import React, { useEffect } from 'react'
import styles from '../app/styles/footer.module.css'
// import styles from '../styles/footer.module.css'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Footer = () => {

    const [modelOpen, setModelOpen] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.from('.company-item', {
            y: 50,
            duration: .5,
            opacity: 0,
            stagger: .3,
            scrollTrigger: {
                trigger: ".sister-companies",
                start: "top 80%",
                end: "bottom bottom",
                scroller: ".smoothContainer",
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                trigger.kill(); // Kill all ScrollTriggers
            });
        };
    }, [])


    const [formData, setformData] = useState({ email: "" })
    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }
    const [response, setResponse] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {


            let result = await fetch("https://ostraders.net:5001/api/subscribe", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.email })
            })
            let response = await result.json();
            if (response.success) {
                setResponse("Email Sent Successfully")
            } else {
                console.log("Error occured");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="parallax" style={{ backgroundImage: "url('/images/hybridBG.jpg')", marginTop: "80px" }}>
                <div className="container d-flex justify-content-center align-items-center flex-column" style={{ zIndex: "2", position: "relative" }}>
                    <span>Buy Now</span>
                    <h2>Interested in Buying?</h2>
                    <p className='mt-0'>Don't hesitate and send us a message.</p>
                    <div className="mt-3 d-flex justify-content-center align-items-center flex-wrap">
                        <a href="" className='button me-3 transform mb-2'><i className="fa-brands fa-whatsapp me-1"></i> WhatsApp</a>
                        <button onClick={() => setModelOpen(!modelOpen)} className='button btn1 transform  mb-2'>Inquiry Now <i className=' fa-solid fa-arrow-right-long ms-1' style={{ transform: "rotate(-45deg)" }}></i></button>
                    </div>
                </div>
            </div>

            <div className="container-fluid padd-x ">
                <div style={{ margin: "40px 0px 10px 0" }} className="heading container-fluid d-flex justify-content-center align-items-center flex-column">
                    <span className='span'>Companies</span>
                    <h2>Sister <span>Companies</span></h2>
                </div>
                <div className="companies sister-companies">
                    <div className="company-item">
                        <h5>Skyline SPRL</h5>
                        <div className="d-flex align-items-start">
                            <i className="fa-solid fa-location-dot mt-2"></i>
                            <p>Bujumbura- Burundi Rue de la Ruzizi No 1</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className=" fa-solid fa-phone"></i>
                            <a href="tel:/+257-76515000">+257 - 765 150 00</a>
                        </div>
                    </div>
                    <div className="company-item">
                        <h5>Gora Trading</h5>
                        <div className="d-flex align-items-start">
                            <i className="fa-solid fa-location-dot mt-2"></i>
                            <p>Kigali -Rwanda Gasabo, Kimironko</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className=" fa-solid fa-phone"></i>
                            <a href="tel:/+250-794095622">+250 - 794 095 622</a>
                            <a href="https://www.instagram.com/gora_trading_ltd/" className="icon"><i className=" fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <div className={styles.contacts}>
                    <div className={styles.contact_item}>
                        <i className="fa-solid fa-phone"></i>
                        <div className="d-flex justify-content-start align-items-start flex-column">
                            <span>Call us</span>
                            <a className='m-0' href='tel:/+971553914183'>+971 55 391 4183</a>
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.contact_item}>
                        <i className="fa-solid fa-envelope"></i>
                        <div className="d-flex justify-content-start align-items-start flex-column">
                            <span>Mail us</span>
                            <a className='m-0' href="mailto:/info@ostraders.net">info@ostraders.net</a>
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.contact_item}>
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="d-flex justify-content-start align-items-start flex-column">
                            <span>Address</span>
                            <a className='m-0'>IFZA, Dubai Silicon Oasis Dubai Digital <br />Park A2 123600, Dubai, UAE</a>
                        </div>
                    </div>
                </div>

                <div className={`row ${styles.footer_section}`}>
                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h3>OS Traders</h3>
                        <p>Your Auto Care Expert</p>
                        <div className="d-flex align-items-center justify-content-start">
                            <a href="https://vt.tiktok.com/ZSF3jKFeH/" target='_blank'><i className={`fa-brands fa-tiktok ${styles.icon}`}></i></a>
                            <a href="https://www.facebook.com/ostradersofficial" target='_blank'><i className={`fa-brands fa-facebook-f ${styles.icon}`}></i></a>
                            <a target='_blank' href="https://www.instagram.com/ostradersofficial?igsh=c3JjNWxocmgzNGQ4"><i className={`fa-brands fa-instagram ${styles.icon}`}></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-md-center align-items-md-center flex-column">
                        <div className=''>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="/about">About</a></li>
                                <li><a href="/collections/cars">Cars</a></li>
                                <li><a href="/lubricants">Lubricants</a></li>
                                <li><a href="/accessories">Accessories</a></li>
                                <li><a href="/tires-batteries">Tires and Batteries</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h4>Subscribe</h4>
                        <p>Subscribe for email updates and stay informed with the latest notifications!</p>
                        <form onSubmit={handleSubmit} className={styles.newsLetter}>
                            <input type="email" placeholder='Email Address' name='email' onInput={formData.emaili} value={formData.email} onChange={handleChange} />
                            <button type='submit'><i className={`fa-solid fa-arrow-up-long ${styles.icon}`}></i></button>
                        </form>
                        <p style={{ color: "green" }}>{response}</p>
                    </div>
                </div>
                <div className={styles.foot}>
                    <p>©2024 <a href="https://www.webify.ai/">webify.ai</a> All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
