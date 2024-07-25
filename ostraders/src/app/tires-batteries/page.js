'use client'
import React, { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import data from '@/app/assets/tires-batteries.json'

const TiresBatteries = () => {

    const [category, setCategory] = useState("Tires");

    const handleCategory = (select) => {
        setCategory(select)
    }

    const datas = data.filter(item => item.category == category)


    return (
        <>
            <PageHeader subTitle="select your Tires and Batteries" title={`Our Tires &`} spanTitle={`Batteries Collection`} bgImage={'/images/tiresBG.jpg'} />

            <div className="container d-flex justify-content-center align-items-center my-5">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="/images/tyres1.jpeg" className='img-fluid' style={{ borderRadius: "30px" }} alt="" />
                    </div>
                    <div className="col-md-6">
                        <img src="/images/Batteries1.jpg" className='img-fluid' style={{ borderRadius: "30px" }} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TiresBatteries
