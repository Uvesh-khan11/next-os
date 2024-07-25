'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from '../app/styles/model.module.css'
import data from '../app/assets/lubricants.json'
import accessories from '../app/assets/accessories.json';
import detail from '../app/styles/detail.module.css'
import StateContext from '@/context/state/StateContext';

const DetailModel = (props) => {

    const { product2Id, setproduct2Id, category, setCategory, detailModel, setDetailModel } = useContext(StateContext)


    let datas;
    console.log(category);
    if (category == "Electronic" || category == "Interior" || category == "Exterior") {
        datas = accessories.find(item => item.id == product2Id)
        console.log(datas);
    } else {
        datas = data.find(item => item.id == product2Id)
    }

    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setDetailModel(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const [accord, setAccord] = useState(Array(datas.additional && datas.additional.length).fill(false));


    const handleAccord = (index) => {
        const updatedArray = accord.map((item, i) => index === i);
        updatedArray[index] = !accord[index];
        setAccord(updatedArray);
    }


    return (
        <>
            <div className={`${styles.backdrop} ${detailModel ? styles.active : ''}`}></div>
            <div className={`${styles.model} ${detailModel ? styles.active : ''}`} ref={modalRef}>
                <div className={styles.model_head}>
                    <i className='fa-solid fa-xmark' style={{ cursor: "pointer" }} onClick={() => { setDetailModel(false) }}></i>
                </div>
                {category == "Electronic" || category == "Interior" || category == "Exterior" ?
                    <div className={styles.content}>
                        <div className="row">
                            <div className="col-md-4 col-12 text-center mb-3">
                                <img src={datas.img[0]} className='img-fluid' alt="" />
                            </div>
                            <div className="col-md-8 col-12">
                                <h3>{datas && datas.name}</h3>
                                <ul>
                                    {datas.specifications && datas.specifications.map((item, index) => {
                                        return <li key={index} style={{ gap: "0px", marginBottom: "15px" }} className='d-flex flex-column justify-content-start align-items-start'>
                                            <b className='fw-bold' style={{ fontSize: "1.1em", letterSpacing: ".5px", textTransform: "capitalize" }}>{item.name}:</b>
                                            {item.desc}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="col-12 my-4">
                                <div className={detail.accord}>
                                    {datas.additional ? <h4 className=' fw-bold' style={{ letterSpacing: "1px" }}>Additional Information : -</h4> : ''}
                                    {datas.additional && datas.additional.map((item, index) => {
                                        return <div className={`${detail.accord_item} ${detail.model} ${accord[index] ? detail.active : ''}`} onClick={() => handleAccord(index)}>
                                            <div className={`${detail.accord_head} ${detail.model_head}`}>
                                                <h5><span>{index + 1}.</span>{item.name}</h5>
                                                <i className='fa-solid fa-angle-right'></i>
                                            </div>
                                            <div className={detail.accord_content}>
                                                <div className={detail.text}>{item.desc}</div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div className={styles.content}>
                        <div className="row">

                            <div className="col-12">
                                <h3>{datas && datas.name}</h3>
                                <p>{datas && datas.description}</p>
                                <h6 className=' fw-bold' style={{ letterSpacing: "1px" }}>Grades : -</h6>
                                {datas && datas.grades.map((item, index) => {
                                    return <span key={index}>{item}</span>
                                })}
                            </div>
                            <div className="col-12 my-2">
                                <h4 className=' fw-bold' style={{ letterSpacing: "1px" }}>Benefits : -</h4>
                                <ul>
                                    {datas && datas.benefits.map((item, index) => {
                                        return <li key={index}><i className='fa-solid fa-check'></i>{item}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default DetailModel
