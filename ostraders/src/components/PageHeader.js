import React from 'react'

const PageHeader = (props) => {
    return (
        <>
            <div className="page-header" style={{ backgroundImage: `url(${props.bgImage})`}}>
                <div className="container d-flex justify-content-center align-items-center flex-column" style={{ zIndex: "2", position: "relative" }}>
                    <span className='text-center'>{props.subTitle}</span>
                    <h2>{props.title} <span>{props.spanTitle}</span></h2>
                </div>
            </div>
        </>
    )
}

export default PageHeader
