import React from 'react'
import style from  "../style/aboutPage.module.css"


const images = [
  {image:"/images/Ed1.png"},
  {image:"/images/Ed1.png"},
  {image:"/images/Ed1.png"},
  {image:"/images/Ed1.png"}
]

const AboutImage = () => {
  return (
    <>
   <div className={style.aboutHero}>

   <div className={style.about}>

      <div className={style.images}>
      {images.map((images, index) =>(

        <div className="aboutImage" key={index}>

          <img src={images.image} alt="" />
          </div>
          ))}
      </div>


   </div>
   </div>
            </>
  )
}

export default AboutImage