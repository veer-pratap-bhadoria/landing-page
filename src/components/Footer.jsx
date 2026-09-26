import React from 'react'
import Faqs from './Faqs'

function Footer() {
  return (
    <>
    <div className="faq-section">
      <div className="faq-left">
        <p>FAQs</p>
      </div>
      <div className="faq-right">
        <div className="faq-head"><p>Not AI-gen answers.</p> <p>Real ones here.</p></div>

        <Faqs 
        question="What can AI FOURMULA create for my brand?"
        plus="+"
        />

        <Faqs 
        question="What do I need to start?"
        plus="+"
        />

        <Faqs 
        question="Will the visuals match our brand look?"
        plus="+"
        />

        <Faqs 
        question="Do I own the assets you generate?"
        plus="+"
        />

        <Faqs 
        question="How fast do I get results?"
        plus="+"
        />

        <Faqs 
        question="Does this replace my creative team?"
        plus="+"
        />
      </div>
      
    </div>

    <div className="paddler-two">
    <div className="footer-wrapper">
      <div className="footwrap-one">
        <div className="sub-footwrap-one">
          <div className='nav-logo-wrapper-two'>
     <img src="/images/logo.svg" alt="" />
</div>
<p>Fourmula</p>
        </div>

        <div className="sub-footwrap-two">
          <div className="small-first">
      <div className="small-one-f"><p>PDP's</p> <p>Videos</p></div>
      <div className='small-one-f'><p>Privacy Policy</p> <p>Terms of Service</p><span>Cookie Policy</span></div>
          </div>
          <div className="small-first">
      <div className="small-one-f"><p>Products</p> <p>Our features</p></div>
      <div className="small-one-f"><span>Instagram</span></div>
          </div>
        </div>
      </div>

      <div className="footwrap-two">
        {Array.from({length: 1000}, (_, index)=>(
          <div key={index} className='footer-dots'></div>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer