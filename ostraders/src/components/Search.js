'use client'
import React, { useEffect, useRef, useState } from 'react'
import data from '../app/assets/data.json'




const Search = () => {

    const datas = data;

    const uniqueValuesSet = new Set();

    const brand = [];
    const array = datas.map(item => { return item.brand });
    array.forEach(element => {
        if (!uniqueValuesSet.has(element)) {
            uniqueValuesSet.add(element);
            brand.push(element);
        }
    });
    const transmission = []
    const array1 = datas.map(item => { return item.transmission[0] });
    array1.forEach(element => {
        if (!uniqueValuesSet.has(element)) {
            uniqueValuesSet.add(element);
            transmission.push(element);
        }
    });

    const seats = []
    const array2 = datas.map(item => { return item.seats });
    array2.forEach(element => {
        if (!uniqueValuesSet.has(element)) {
            uniqueValuesSet.add(element);
            seats.push(element);
        }
    });

    const fuelType = []
    const array3 = datas.map(item => { return item.engine[0] });
    array3.forEach(element => {
        if (!uniqueValuesSet.has(element)) {
            uniqueValuesSet.add(element);
            fuelType.push(element);
        }
    });
    const drivetrain = [];
    const array4 = datas.map(item => { return item.drivetrain[0] })
    array4.forEach(element => {
        if (!uniqueValuesSet.has(element)) {
            uniqueValuesSet.add(element);
            drivetrain.push(element);
        }
    });

    const [dropDown, setDropDown] = useState(Array(5).fill(false));
    const [filter, setFilter] = useState("Brands");
    const [filterData, setFilterData] = useState({
        Brand: "",
        Transmission: "",
        Seats: "",
        Fuel: "",
        DriveTrain: "",
    });
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



    const Filter = (name) => {
        setFilter(name)
        if (dropDown == true) {
            setDropDown(dropDown)
        } else if (filter === name) {
            DropDown();
        } else {
            DropDown();
        }

    };

    const handleFilter = (field, value) => {
        setFilterData({
            ...filterData,
            [field]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate('/collection/result', { state: filterData });
        window.location.href = `/collections/result?data= ${JSON.stringify(filterData)}`;

    }

    const ClearFilter = () => {
        setFilterData({
            Brand: "",
            Transmission: "",
            Seats: "",
            Fuel: "",
            DriveTrain: "",
        })
    }


    return (
        <>
            <section className="parallax" style={{ backgroundImage: "url('./images/background.jpeg')" }}>
                <div className="container d-flex justify-content-center align-items-center flex-column" style={{ zIndex: "2", position: "relative" }}>
                    <span>Buy Now</span>
                    <h2>Search Your Dream Car</h2>
                    <form className="search-bar" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12 px-0 mb-lg-0 mb-md-3 mb-sm-2 mb-1">
                                <div className="search-field" onClick={() => DropDown(0)} ref={el => (dropdownRefs.current[0] = el)}>
                                    <p>{filterData.Brand ? filterData.Brand : 'Brands'}</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                    <ul className={`dropdown ${dropDown[0] ? 'active' : ''}`}>
                                        {brand.map((item, index) => {
                                            return <li onClick={() => handleFilter("Brand", item)} key={index}>{item}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 col-12 px-0 mb-lg-0 mb-md-3 mb-sm-2 mb-1">
                                <div className="search-field" onClick={() => DropDown(1)} ref={el => (dropdownRefs.current[1] = el)}>
                                    <p>{filterData.Transmission ? filterData.Transmission : 'Transmission'}</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                    <ul className={`dropdown ${dropDown[1] ? 'active' : ''}`}>
                                        {transmission.map((item, index) => {
                                            return <li onClick={() => handleFilter("Transmission", item)} key={index}>{item}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 col-12 px-0 mb-lg-0 mb-md-3 mb-sm-2 mb-1">
                                <div className="search-field" onClick={() => DropDown(2)} ref={el => (dropdownRefs.current[2] = el)}>
                                    <p>{filterData.Seats ? filterData.Seats : 'Seats'}</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                    <ul className={`dropdown ${dropDown[2] ? 'active' : ''}`}>
                                        {seats.map((item, index) => {
                                            return <li onClick={() => handleFilter("Seats", item)} key={index}>{item}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12 px-0 mb-lg-0 mb-md-3 mb-sm-2 mb-1">
                                <div className="search-field" onClick={() => DropDown(3)} ref={el => (dropdownRefs.current[3] = el)}>
                                    <p>{filterData.Fuel ? filterData.Fuel : 'Fuel Type'}</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                    <ul className={`dropdown ${dropDown[3] ? 'active' : ''}`}>
                                        {fuelType.map((item, index) => {
                                            return <li onClick={() => handleFilter("Fuel", item)} key={index}>{item}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12 px-0 mb-lg-0 mb-md-3 mb-sm-2 mb-1">
                                <div className="search-field" onClick={() => DropDown(4)} ref={el => (dropdownRefs.current[4] = el)}>
                                    <p>{filterData.DriveTrain ? filterData.DriveTrain : "Drive Train"}</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                    <ul className={`dropdown ${dropDown[4] ? 'active' : ''}`}>
                                        {drivetrain.map((item, index) => {
                                            return <li onClick={() => handleFilter("DriveTrain", item)} key={index}>{item}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <button className='button'>Search</button>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default Search
