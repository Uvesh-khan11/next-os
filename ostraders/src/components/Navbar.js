'use client'
import React, { useRef, useState } from 'react'
// import styles from "../styles/navbar.module.css";
import styles from "../app/styles/navbar.module.css"
import Link from 'next/link';

const Navbar = () => {

    const [open, setOpen] = useState(false);


    const menuOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <nav className={`${styles.nav} `}>
                <a href="/" className={styles.logo}>
                    <img src="/images/OS TRADERS.png" alt="OS Traders" />
                </a>
                <div className='d-flex justify-content-center align-items-center'>
                    <ul className={`${styles.nav_main_menu} ${open ? styles.active : ""}`}>
                        <li><a href="/" className={styles.nav_link}>Home</a></li>
                        <li className={styles.dropdown}>
                            <a className={styles.nav_link}><span>Collections</span> <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className={styles.dropdown_content}>
                                <li><a href="/tires-batteries"><span>Tires and Batteries</span></a></li>
                                <li><a href="/spare-parts"><span>Spare parts</span></a></li>
                                <li><a href="/accessories"><span>Accessories</span></a></li>
                                <li><a href="/lubricants"><span>Lubricants</span></a></li>
                                <li className={styles.sub_dropdown}>
                                    <a className={styles.dropdown_link}><span>Cars</span> <i className="fa-solid fa-chevron-down"></i></a>
                                    <ul className={styles.sub_dropdown_content}>
                                        <li><a href="/collections/cars"><span>All Cars</span></a></li>
                                        <li><a href="/collections/cars/commercial"><span> Commercial Cars</span></a></li>
                                        <li><a href="/collections/cars/luxury"><span> Luxury Cars</span></a></li>
                                        <li><a href="/collections/cars/affordable"><span> Affordable Cars</span></a></li>
                                        <li><a href="/collections/cars/hybrid-Ev"><span> Hybrid and Ev</span></a></li>
                                    </ul>
                                </li>
                                <li><a href="/collections/trucks"><span>Trucks</span></a></li>
                            </ul>
                        </li>
                        <li><a href="/MG" className={styles.nav_link}><img src="/images/MG.png" style={{ width: "30px", height: "30px" }} alt="" /> Exclusive</a></li>
                        <li><a href="/about" className={styles.nav_link}>About</a></li>
                        <li><a href="/contact" className={styles.nav_link}>Contact</a></li>
                    </ul>
                    <div className='d-flex align-items-center'>
                        <button className={styles.menu_toggle} onClick={menuOpen}><i className="fa-solid fa-bars"></i></button>
                        <div className={styles.call}>
                            <a href="tel:/+971553914183"><i className="fa-solid fa-phone"></i></a>
                            <div className='d-flex justify-content-start align-items-start flex-column'>
                                <span>Need Help ?</span>
                                <a href="tel:/+971553914183">+971 55 391 4183</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
