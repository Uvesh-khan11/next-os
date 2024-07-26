import React, { } from 'react'
import styles from '@/app/styles/collection.module.css';
import ProductItem from '@/components/ProductItem';
import PageHeader from '@/components/PageHeader';
import data from '@/app/assets/data.json'

const page = () => {

  return (
    <>
      <PageHeader subTitle="select your car" title={"our cars"} spanTitle={`Collection`} bgImage={'/images/allCarsBG.jpg'} />
      <div className={styles.collection}>
        <div className="container mt-5">
          <div className="row my-5">
            {data.length == 0 ?
              <div className="text-center">
                <p className='fs-3 text-white'>No Data Available</p>
              </div> : ''}
            {data && data.map((item, index) => {
              return <div key={index} className="col-lg-6 col-md-12 col-12 mb-100">
                <ProductItem data={item} />
              </div>
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default page
