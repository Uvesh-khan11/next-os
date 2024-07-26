'use client'
import React, { useState } from 'react'
import DetailModel from './DetailModel'
import Inquiry from './Inquiry'

const HeadComponent = () => {
    const [product2Id, setproduct2Id] = useState(1);
    const [category, setCategory] = useState(null);
    const [modelOpen, setModelOpen] = useState(false);
  
    const [modelState, setModelState] = useState(false);
    const [startVideo, setStartVideo] = useState(true);
    return (
        <>
            <DetailModel id={product2Id} category={category} open={modelState} close={setModelState} />
            <Inquiry open={modelOpen} setOpen={setModelOpen} />
        </>
    )
}

export default HeadComponent
