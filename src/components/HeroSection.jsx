import React from 'react'

function HeroSection() {
  return (
    <div className='hero'>
      <div className='circle'>
        <div className='item'><img src="/images/image1.avif" alt="" /></div>
        <div className='item'><img src="/images/image7.avif" alt="" /></div>
        <div className='item'><img src="/images/image8.avif" alt="" /></div>
        <div className='item'><img src="/images/image6.avif" alt="" /></div>
        <div className='item'><img src="/images/image5.avif" alt="" /></div>
        <div className='item'><img src="/images/image4.avif" alt="" /></div>
        <div className='item'><img src="/images/image3.avif" alt="" /></div>
        <div className='item'><img src="/images/image2.avif" alt="" /></div>
        <div className='transparent-box'>
          <div className='upload-photo'>
            <img src="/images/image9.avif" alt="" />
          </div>
          <p>Upload or drop your assets</p>
        </div>

      </div>
      <div className='bottom-wrap'>
        <div className='hero-left'>
          <span className='upper-text'>Your catalog,</span>
          <span className='lower-text'>instantly re-shot.</span>
        </div>
        <div className='hero-right'>
          <p>©2026</p>
          <p>SCROLL DOWN</p>
        </div>
      </div>

      <div className="column">
        <p>Lifestyle shots</p>
        <p>Ads</p>
        <p>Stories</p>
        <p>Street style</p>
        <p className='remove'>PDPs</p>
      </div>


    </div>
  )
}

export default HeroSection