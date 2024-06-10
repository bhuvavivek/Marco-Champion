"use client"

import { useState, useEffect } from 'react';
// import styles from "../style/bootcamp.module.css";
const items = ['/images/bootcamp_1.svg', '/images/bootcamp_2.svg', '/images/bootcamp_3.svg', '/images/bootcamp_4.svg', '/images/bootcamp_5.svg', '/images/bootcamp_6.svg'];

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Bootcamp = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <>
    <br/><br/>
    <h1 className='text-light text-center'>TOOLS USED IN BOOTCAMP</h1>
      {/* <Card className='border-0 rounded-0 bg-transparent'>
        <br /><br />
        <div className={styles.boxContainer}>

          {Array.from({ length: items.length * 10000 }).map((_, index) => (
            <div key={index} className={styles.box}>
              <img src={items[index % items.length]} alt={`Bootcamp Tool ${index % items.length}`} />
            </div>
          ))}

        </div>
      </Card> */}
      {
        !isSmallScreen ? (
          <Carousel className='text-center'>
            <Carousel.Item interval={3000}>
              <img src='/images/bootcamp_1.svg' alt='...' className='p-4' />
              <img src='/images/bootcamp_2.svg' alt='...' className='p-4' />
              <img src='/images/bootcamp_3.svg' alt='...' className='p-4' />
              <br /><br />
            </Carousel.Item>

            <Carousel.Item interval={3000} className='p-2'>
              <img src='/images/bootcamp_4.svg' alt='...' className='p-4' />
              <img src='/images/bootcamp_5.svg' alt='...' className='p-4' />
              <img src='/images/bootcamp_6.svg' alt='...' className='p-4' />
              <br /><br />
            </Carousel.Item>
          </Carousel>)
          :
          (
            <Carousel className='text-center'>
              <Carousel.Item interval={3000}>
                <img src='/images/bootcamp_1.svg' alt='...' className='p-4' style={{width:'100%'}} />
                <br/><br/>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img src='/images/bootcamp_2.svg' alt='...' className='p-4' style={{width:"100%"}} />
                <br/><br/>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img src='/images/bootcamp_3.svg' alt='...' className='p-4' style={{width:'100%'}}/>
                <br/><br/>
              </Carousel.Item>
              <Carousel.Item interval={3000} >
                <img src='/images/bootcamp_4.svg' alt='...' className='p-4' style={{width:'100%'}} />
                <br/><br/>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img src='/images/bootcamp_5.svg' alt='...' className='p-4' style={{width:'100%'}} />
                <br/><br/>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img src='/images/bootcamp_6.svg' alt='...' className='p-4' style={{width:'100%'}} />
                <br /><br />
              </Carousel.Item>
            </Carousel>
          )

      }
      <br /><br />
    </>
  )
}

export default Bootcamp