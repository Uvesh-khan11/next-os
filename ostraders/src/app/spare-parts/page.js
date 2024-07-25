import React from 'react'
import PageHeader from '@/components/PageHeader'
import about from '@/app/styles/about.module.css'
import styles from '@/app/styles/parts.module.css'

const Parts = () => {
    return (
        <>
            <PageHeader subTitle="select your Parts" title={`Our Spare`} spanTitle={`Parts Collection`} bgImage={'/images/partsBG.jpg'} />

            <div className={`container-fluid padd-x ${about.about}`}>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <h1>Premium Spare Parts<br /> <span>for Every Vehicle</span></h1>
                        <p className={about.para}>Discover OS Traders, your trusted source for premium spare parts across all major brands. Since our inception in 2018, we've dedicated ourselves to delivering top-tier automotive solutions. Count on us for genuine parts that ensure your vehicle runs flawlessly. Experience excellence with every purchase and drive worry-free.</p>
                    </div>
                    <div className="col-lg-6 col-12 position-relative px-4">
                        <div className="cat-item" style={{ position: "static" }}>
                            <div className="cat-image">
                                <img src="/images/parts1.jpg" className='img-fluid' alt="" />
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
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className={styles.head}>
                            <h5>Japanese</h5>
                        </div>
                        <div className="d-flex align-items-start">
                            <ul className={styles.list}>
                                <li>Vehicles</li>
                                <li>Toyota</li>
                                <li>Lexus</li>
                                <li>Mitsubishi</li>
                                <li>Nissan</li>
                                <li>Mazda</li>
                                <li>Honda</li>
                                <li>Suzuki</li>
                            </ul>
                            <ul className={styles.list}>
                                <li>Trucks & Buses</li>
                                <li>Isuzu</li>
                                <li>Hino</li>
                                <li>Nissan UD</li>
                                <li>MAN</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className={styles.head}>
                            <h5>European</h5>
                        </div>
                        <div className="d-flex align-items-start">
                            <ul className={styles.list}>
                                <li>Vehicles</li>
                                <li>MG</li>
                                <li>Renault</li>
                                <li>Peugeot</li>
                                <li>Volkswagen</li>
                                <li>Audi</li>
                                <li>Skoda</li>
                                <li>Mercedes</li>
                            </ul>
                            <ul className={styles.list}>
                                <li>Trucks & Buses</li>
                                <li>Renault</li>
                                <li>Volvo</li>
                                <li>Scania</li>
                                <li>IVECO</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className={styles.head}>
                            <h5>Korean</h5>
                        </div>
                        <div className="d-flex align-items-start">
                            <ul className={styles.list}>
                                <li>Vehicles</li>
                                <li>Hyundai</li>
                                <li>KIA</li>
                            </ul>
                            <ul className={styles.list}>
                                <li>Heavy Equipment</li>
                                <li>Hyundai</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5 d-flex justify-content-start flex-column align-items-center">
                        <div className={styles.head}>
                            <h5>American</h5>
                        </div>
                        <div className="d-flex align-items-start">
                            <ul className={styles.list} style={{ width: "100%" }}>
                                <li>Vehicles</li>
                                <li>Hyundai</li>
                                <li>KIA</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 col-6 mb-5 d-flex justify-content-start flex-column align-items-center">
                        <div className={styles.head} >
                            <h5>Indian</h5>
                        </div>
                        <div className="d-flex align-items-start">
                            <ul className={styles.list} style={{ width: "100%" }}>
                                <li>Buses</li>
                                <li>TATA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Parts
