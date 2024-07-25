import React from 'react'
import styles from '../app/styles/testimonial.module.css'

const TestimonialCard = ({data, index}) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.content}>
                    <i className="fa-solid fa-quote-left"></i>
                    {data.car ? <h5><span>Bought:</span> {data.car}</h5> : null }
                    <p>{data.quote}
                    </p>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.curvbtn}>
                        <div className={styles.img}>
                            <span>0{index + 1}.</span>
                        </div>
                        <div className={styles.br_left_top}>
                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                            </svg>
                        </div>
                        <div className={styles.br_right_bottom}>
                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.client}>
                        <h4>{data.customer}</h4>
                        <span>{data.country}</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TestimonialCard
