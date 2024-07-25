'use client'
import React from 'react'
import PageHeader from '@/components/PageHeader'
import data from '../assets/accessories.json'
import ProductItem2 from '@/components/ProductItem2'
import { useState } from 'react'

const Accesories = () => {

    const [category, setCategory] = useState("Electronic");
    
    const handleCategory = (select) => {
        setCategory(select)
    }

    const datas = data.filter(item => item.category == category)

    return (
        <>
            <PageHeader subTitle="select your choice" title={`Our Accessories`} spanTitle={`Collection`} bgImage="/images/accessori.jpg" />

            <div className="d-flex align-items-center justify-content-center mt-5 mb-3 flex-wrap">
                <button style={{width: "230px"}} className={`button m-2 ${category == "Electronic" ? 'after' : ''}`} onClick={() => {handleCategory("Electronic")}}>Electronics</button>
                <button style={{width: "230px"}} className={`button m-2 ${category == "Interior" ? 'after' : ''}`} onClick={() => {handleCategory("Interior")}}>Interior Accessories</button>
                <button style={{width: "230px"}} className={`button m-2 ${category == "Exterior" ? 'after' : ''}`} onClick={() => {handleCategory("Exterior")}}>Exterior Accessories</button>
            </div>

            <div className="container-fluid padd-x">
                <div className="row">
                    {datas.map((item, index) => {
                        return <div key={index} className="col-lg-4 col-md-6 col-12">
                            <ProductItem2 data={item} category={"Accessories"} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Accesories
