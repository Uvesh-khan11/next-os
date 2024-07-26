import React, { } from 'react'
import styles from '@/app/styles/collection.module.css';
import ProductItem from '@/components/ProductItem';
import PageHeader from '@/components/PageHeader';
import data from '@/app/assets/data.json'

const page = () => {

   const category = "Hybrid and Ev"
   let datas = data.filter(item => item.category == category)


  return (
    <>
      <PageHeader subTitle="select your car" title={`${category}`} spanTitle={`Collection`} bgImage={"/images/hybridBG.jpg"} />
      <div className={styles.collection}>
        <div className="container mt-5">
          <div className="row my-5">
            {datas.length == 0 ?
              <div className="text-center">
                <p className='fs-3 text-white'>No Data Available</p>
              </div> : ''}
            {datas && datas.map((item, index) => {
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
