'use client'
import React, { useEffect, useState } from 'react'
import PageHeader from '@/components/PageHeader'
import styles from '@/app/styles/contact.module.css'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';


const Contact = () => {


  useGSAP(() => {
    gsap.from(`.${styles.box}`, {
      y: 100,
      duration: .9,
      opacity: 0,
      stagger: 0.3,
    })
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [response, setResponse] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const { name, email, phone, subject, message } = formData;

      let result = await fetch("https://ostraders.net:5001/api/sendContactEmail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, phone: phone, subject: subject, message: message })
      })
      let response = await result.json();
      if (response.success) {
        setResponse("Form Submitted Successfully")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        })
        console.log("successfully Sended the message");
      } else {
        setResponse("Some Error Occurred")
        console.log("Error occured");
      }
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <PageHeader subTitle="Contact Us" title="We're Here to" spanTitle="Serve!" bgImage="./images/headerBg.jpeg" />

      <div class="container">
        <div class="row" style={{ marginTop: "-70px", zIndex: "9999" }}>
          <div class="col-lg-3 col-md-6">
            <div class={styles.box}>
              <span class={styles.icon}>
                <i class="fa-solid fa-envelope"></i>
              </span>
              <h5>Email us</h5>
              <a href='mailto:/info@ostraders.net'>info@ostraders.net</a>
              <div className={styles.big_icon}>
                <i class="fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class={styles.box}>
              <span class={styles.icon}>
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <h5>Our address</h5>
              <p style={{ lineHeight: "130%" }}>IFZA, Dubai Silicon Oasis Dubai Digital Park A2 123600, Dubai, UAE</p>
              <div className={styles.big_icon}>
                <i class="fa-solid fa-location-dot"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class={styles.box}>
              <span class={styles.icon}>
                <i class="fa-regular fa-clock"></i>
              </span>
              <h5>Opening Hours</h5>
              <p>Mon - Sat: 8AM - 7PM</p>
              <div className={styles.big_icon}>
                <i class="fa-regular fa-clock"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class={`${styles.box} ${styles.active}`}>
              <span class={styles.icon}>
                <i class="fa-solid fa-phone"></i>
              </span>
              <h5>Call us</h5>
              <a href="tel:/+971 55 391 4183"><p>+971 55 391 4183</p></a>
              <div className={styles.big_icon}>
                <i class="fa-solid fa-phone"></i>
              </div>
            </div>
          </div>
        </div>

        <div class={`row ${styles.contact_form}`}>
          <div class="col-lg-6">
            <form onSubmit={handleSubmit}>
              <h5>Get in touch</h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-field">
                    <input type="text" placeholder="Your Name *" name='name' onChange={onChange} />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-field">
                    <input type="text" placeholder="Your Email *" name='email' onChange={onChange} />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-field">
                    <input type="phone" placeholder="Your Number *" name='phone' maxLength={14} onChange={onChange} />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-field">
                    <input type="text" placeholder="Subject *" name='subject' onChange={onChange} />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="input-field">
                    <textarea cols="50" rows="8" name='message' onChange={onChange} placeholder="Message*"></textarea>
                  </div>
                </div>
              </div>
              <p style={{ color: "green" }}>{response}</p>
              <button type='submit' className='button'>Send Message</button>
            </form>
          </div>
          <div class="col-lg-6">
            <h5>Location</h5>
            <div class={styles.contact_map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.4985748278878!2d55.375308874221695!3d25.118829634872604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6570d49d452f%3A0x5993cfcf524af8a7!2sIFZA%20DDP%20Building%20A2!5e0!3m2!1sen!2sin!4v1717159601843!5m2!1sen!2sin" width={500} height={500} style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default Contact
