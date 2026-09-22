import React from 'react'
import FeatureBox from './Featurebox'

function Features() {
  return (
    <>
      <div className='big-text'>
        <div className="big-one"><p>From ideas to assets </p> <p>in four steps</p></div>
        <div className="small-one"><p>Sign up for free and supercharge</p> <p>your creative workflow.</p></div>
      </div>
      <div className='feature-wrapper'>
        <FeatureBox 
        className="fb-1"
        code="PB"
        title="Add products"
        titleSecond="and brands"
        number="01"
        rightText="14+ model presets"
        leftText="Multiple pose options"
        upperText="Store your products,"
        lowerText="shots and band look"
        lowerTextSecond="in one place."
        image="/images/fourmula-23.avif"
        />

        <FeatureBox 
        className="fb-2"
        code="GO"
        title="AI generates"
        titleSecond="options."
        number="02"
        rightText="Concept & scene variations"
        leftText="Multiple visual directions"
        upperText="Use AI to"
        lowerText="create new concepts,"
        lowerTextSecond="scenes and ideas."
        image="/images/fourmula-24.avif"
        />

        <FeatureBox 
        className="fb-3"
        code="CB"
        title="Choose ones"
        titleSecond="the best."
        number="03"
        rightText="Side-by-side comparision"
        leftText="Easy selection and review"
        upperText="Pick the versions"
        lowerText="you like from"
        lowerTextSecond="the generations."
        image="/images/fourmula-25.avif"
        />

        <FeatureBox 
        className="fb-4"
        code="AX"
        title="Ready-made"
        titleSecond="assets and export."
        number="04"
        rightText="Optimized for PDP and ads"
        leftText="One-click export"
        upperText="Export ready-made"
        lowerText="files to your store,"
        lowerTextSecond="ads and social."
        image="/images/fourmula-26.avif"
        />


      </div>
    </>
  )
}

export default Features
