import React from 'react'
import styles from '../app/styles/product.module.css'


const ProductItem = (props) => {

    return (
        <>
            <div className={styles.item}>
                <div className={styles.item_img}>
                    <img src={props.data.img[0]} className='img-fluid' alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.details}>
                        <a href=""><h4>{props.data.model}</h4></a>
                        <div className="mt-1 d-flex justify-content-start align-items-center flex-wrap" style={{ gap: "5px" }}>
                            <div className='d-flex align-items-center' style={{ gap: "5px" }}>
                                <div className={styles.icon}>
                                    <img src="/images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                                </div>
                                <span>{props.data.seats} Seats</span>
                            </div>
                            <div className='d-flex align-items-center' style={{ gap: "5px" }}>
                                <div className={styles.icon}>
                                    <img src="/images/transmission.svg" className='img-fluid' alt="" />
                                </div>
                                <span>{props.data.transmission[0]}{!props.data.transmission[1] ? '' : ','} {props.data.transmission[1]} </span>
                            </div>
                            <div className='d-flex align-items-center' style={{ gap: "5px" }}>
                                <div className={styles.icon}>
                                    <img src="/images/dashboard.svg" className='img-fluid' alt="" />
                                </div>
                                <span>{props.data.drivetrain[0]}{!props.data.drivetrain[1] ? '' : ','} {props.data.drivetrain[1]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <a href={`/details/${props.data.id}`} className='button' style={{ padding: "15px 20px", fontSize: ".8rem", height: "fit-content" }}>Details</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductItem
