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
    {/* <div className='footer-wrapper'>
        {Array.from({length: 100}, (_, index)=>(
            <div key={index} className='footer-dots'></div>
        ))}
    </div> */}
    </>
  )
}

export default Footer