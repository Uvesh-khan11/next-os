import React from 'react'
import styles from '@/app/styles/services.module.css';

const ServiceCard = ({data, index}) => {
    return (
        <>
            <a href={`/services/${data.id}`} className={styles.card}>
                <div className={styles.image}>
                    <img src={data.img[0]} className='img-fluid' alt="Sea Fright" />
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
                    <div className={styles.title}>
                        <h4>{data.title}</h4>
                    </div>
                </div>

            </a>
        </>
    )
}

export default ServiceCard
