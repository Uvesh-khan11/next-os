'use client'
import React, { useContext, useState } from 'react'
import styles from '../app/styles/book.module.css'
import data from '../app/assets/data.json';
import data1 from '../app/assets/lubricants.json';
import data2 from '../app/assets/accessories.json';
import { useEffect } from 'react';
import { useRef } from 'react';
import StateContext from '@/context/state/StateContext';

const Inquiry = () => {

    const datas = data.concat(data1).concat(data2);
    const { modelOpen, setModelOpen } = useContext(StateContext)
    const modelName1 = datas.map((item) => { return item.category })

    const uniqueValuesSet = new Set();
    const models = [];
    modelName1.forEach(element => {
        if (!uniqueValuesSet.has(element)) {
            uniqueValuesSet.add(element);
            models.push(element);
        }
    });



    // dropdown code herer 
    const [dropDown, setDropDown] = useState(Array(5).fill(false));
    const dropdownRefs = useRef([]);


    const DropDown = (index) => {
        const updated = dropDown.map((item, i) => (i === index ? !item : false));
        setDropDown(updated);
    };

    const handleClickOutside = (event) => {
        if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
            setDropDown(Array(5).fill(false));
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    const [filterData, setFilterData] = useState({
        category: "",
        name: "",
    });

    const newData = datas.filter(item => item.category == filterData.category)
    const names = newData && newData.map(item => { return item.model || item.name })

    const handleFilter = (field, value) => {
        setFilterData({
            ...filterData,
            [field]: value,
        });
    }

    const modalRef = useRef();

    const handleModelCLickedOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModelOpen(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
            setFilterData({
                category: "",
                name: "",
            })
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleModelCLickedOutside);
        return () => {
            document.removeEventListener('mousedown', handleModelCLickedOutside);
        };
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const { name, email, phone, message } = formData;

            let result = await fetch("https://ostraders.net:5001/api/sendInquiryEmail", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name, email: email, phone: phone, category: filterData.category, category_title: filterData.name, message: message })
            })
            let response = await result.json();
            if (response.success) {
                setResponse("Form Submitted Successfully")
                setTimeout(() => {
                    setModelOpen(!modelOpen)
                }, 2000)
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setFilterData({
                    category: "",
                    name: "",
                })
                console.log("successfully Sended the message");
            } else {
                setResponse("Error uccured")
                console.log("Error occured");
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className={`${styles.model} ${modelOpen ? styles.active : ''}`} ref={modalRef}>
                <div className={styles.model_head}>
                    <h3>Inquiry Form</h3>
                    <i className='fa-solid fa-xmark' style={{ cursor: "pointer" }} onClick={() => setModelOpen(!modelOpen)}></i>
                </div>
                <div className={styles.model_content}>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-6 col-12">
                                <div className="input-field">
                                    <input
                                        type="text"
                                        placeholder='Full Name*'
                                        name='name'
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6 col-12">
                                <div className="input-field">
                                    <input type="text" placeholder='Email*' name='email' onChange={onChange} />
                                </div>
                            </div>
                            <div className="col-sm-6 col-12">
                                <div className="input-field">
                                    <input type="text" placeholder='Phone*' name='phone' onChange={onChange} />
                                </div>
                            </div>
                            <div className="col-sm-6 col-12">
                                <div className="search-field inquiry" onClick={() => DropDown(0)} ref={el => (dropdownRefs.current[0] = el)}>
                                    <p>{filterData.category ? filterData.category : 'Select Category'}</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                    <ul style={{ height: "200px" }} className={`dropdown ${dropDown[0] ? 'active' : ''}`}>
                                        {models.map((item, index) => {
                                            return <li onClick={() => handleFilter("category", item)} key={index}>{item}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-12">
                                <div className="search-field inquiry" onClick={() => DropDown(1)} ref={el => (dropdownRefs.current[1] = el)}>
                                    <p>{filterData.name ? filterData.name : 'Models'}</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                    {!names.length == 0 ? <ul style={{ height: "200px" }} className={`dropdown ${dropDown[1] ? 'active' : ''}`}>
                                        {names && names.map((item, index) => {
                                            return <li onClick={() => handleFilter("name", item)} key={index}>{item}</li>
                                        })}
                                    </ul> : ''}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="input-field">
                                    <textarea placeholder='Message*' rows={3} name='message' onChange={onChange} />
                                </div>
                            </div>
                            <p style={{ color: "green" }}>{response}</p>
                            <button type='submit' className='button w-100'>Send Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Inquiry
