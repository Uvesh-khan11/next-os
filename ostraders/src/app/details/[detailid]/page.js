'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from '@/app/styles/detail.module.css'
import product from '@/app/styles/product.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import data from '@/app/assets/data.json';
import StateContext from '@/context/state/StateContext';

const Detail = ({params}) => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const id = params.detailid;
  console.log(id);

  const {modelOpen, setModelOpen} = useContext(StateContext)

  let productData
  productData = data.find(item => item.id == id);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  const [accord, setAccord] = useState(Array(data.additional_informations && data.additional_informations.length).fill(false));


  const handleAccord = (index) => {
    const updatedArray = accord.map((item, i) => index === i);
    updatedArray[index] = !accord[index];
    setAccord(updatedArray);
  }

  // To get Images and height of a image
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Preload images to get their dimensions
    const preloadImages = async () => {
      const imagePromises = productData.img.map(async (item) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            resolve({ src: item, width: img.width, height: img.height });
          };
          img.onerror = (error) => {
            reject(error);
          };
          img.src = item;
        });
      });

      try {
        const loadedImages = await Promise.all(imagePromises);
        setImages(loadedImages);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, [productData.img]);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.slider}>
          <div className={styles.title}>
            <span>{productData.category}</span>
            <h1>{productData.model}</h1>
          </div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            modules={[Autoplay, Pagination]}
            className="mySwiper">
            {productData.img.map((item, index) => {
              return <SwiperSlide key={index}>
                <div className={styles.slider_item}>
                  <img src={item} alt="" />
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>

        <div className={`container ${styles.details}`}>
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className={styles.info}>
                <div className={styles.head}>
                  <span>{productData.category}</span>
                  <h2>{productData.model}</h2>
                </div>
                <h4>General Information</h4>
                <p>{productData.description.substring(0, 280)}....</p>
                <h6 className='mt-3 fw-bold'>Dimensions: </h6>
                <ul className='mb-4'>
                  <li><b className='fw-bold' style={{ letterSpacing: ".5px" }}>Length:</b> {productData.dimensions.length}</li>
                  <li><b className='fw-bold' style={{ letterSpacing: ".5px" }}>Width:</b> {productData.dimensions.width}</li>
                  <li><b className='fw-bold' style={{ letterSpacing: ".5px" }}>Height:</b> {productData.dimensions.height}</li>
                </ul>
                <h5 className=' fw-bold' style={{ letterSpacing: ".5px" }}>Features : -</h5>
                <ul>
                  {productData.features.map((item, index) => {
                    return <li key={index}><i className='fa-solid fa-check'></i>{item}</li>
                  })}
                </ul>
                <div className="mt-5 d-flex align-items-center justify-content-between">
                  <h4>Image Gallery</h4>
                  <div className="d-flex align-items-center g-5">
                    <button className={styles.swp_btn} ref={prevRef} ><i className="fa-solid fa-caret-left me-2"></i></button>
                    <button className={styles.swp_btn} ref={nextRef} ><i className="fa-solid fa-caret-right me-2"></i></button>
                  </div>
                </div>
                <div className={styles.gallery}>
                  <Gallery>
                    <Swiper
                      slidesPerView={2}
                      spaceBetween={10}
                      navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                      }}
                      breakpoints={{
                        399: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1440: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        }
                      }}
                      modules={[Navigation]}
                      className="mySwiper">
                      {images.map((image, index) => (
                        <SwiperSlide>
                          <Item
                            key={index}
                            original={image.src}
                            thumbnail={image.src}
                            width={image.width}
                            height={image.height}
                          >
                            {({ ref, open }) => (
                              <img
                                ref={ref}
                                onClick={open}
                                src={image.src}
                                className="img-fluid"
                                style={{ cursor: 'pointer' }}
                              />
                            )}
                          </Item>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Gallery>
                </div>

                <div className={styles.accord}>
                  {productData.additional_informations ? <h4>Additional informations</h4> : ''}


                  {productData.additional_informations && productData.additional_informations.map((item, index) => {
                    return <div className={`${styles.accord_item} ${accord[index] ? styles.active : ''}`} onClick={() => handleAccord(index)}>
                      <div className={styles.accord_head}>
                        <h5><span>{index + 1}.</span>{item.name}</h5>
                        <i className='fa-solid fa-angle-right'></i>
                      </div>
                      <div className={styles.accord_content}>
                        <div className={styles.text}>{item.desc}</div>
                      </div>
                    </div>
                  })}
                </div>

              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className={styles.price}>
                <div className={styles.price_head}>
                  <h3 style={{ letterSpacing: ".5px" }}>Specifications</h3>
                </div>
                <div className={styles.price_info}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={product.icon}>
                        <img src="/images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                      </div>
                      <span>Seats</span>
                    </div>
                    <div>
                      <p>{productData.seats}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={product.icon}>
                        <img src="/images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                      </div>
                      <span>Engine</span>
                    </div>
                    <div>
                      <p>{productData.engine[0]} {!productData.engine[1] ? '' : ','} {productData.engine[1]}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={product.icon}>
                        <img src="/images/transmission.svg" className='img-fluid' alt="" />
                      </div>
                      <span>Transmission</span>
                    </div>
                    <div>
                      <p>{productData.transmission[0]}{!productData.transmission[1] ? '' : ','} {productData.transmission[1]}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={product.icon}>
                        <img src="/images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                      </div>
                      <span>Drive Train</span>
                    </div>
                    <div>
                      <p>{productData.drivetrain}</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={product.icon}>
                        <img src="/images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                      </div>
                      <span>Payload</span>
                    </div>
                    <div>
                      <p>{productData.payload}</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={product.icon}>
                        <img src="/images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                      </div>
                      <span>Tank</span>
                    </div>
                    <div>
                      <p>{productData.fuel_tank}</p>
                    </div>
                  </div>

                  <div className={styles.btns}>
                    <button onClick={() =>setmod(!modelOpen)} className={styles.btn}>Inquiry Now</button>
                    <span>&</span>
                    <a target='_blank' href="https://wa.me/971553914183?text=Hello-OS Traders" className={styles.btn}><i className=' fa-brands fa-whatsapp me-1'></i> WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
