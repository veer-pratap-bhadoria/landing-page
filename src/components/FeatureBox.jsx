
import React from 'react'

function FeatureBox(props) {
  return (
    <div className={`feature-box ${props.className}`}>
          <div className="slide-top-text">{props.code}</div>
          <div className="feature-top">
            <div className="feature-top-right"><p>{props.title}</p> <p>{props.titleSecond}</p></div>
            <div className="feature-top-left"><p>{props.number}</p></div>
          </div>

          <div className="feature-second-top">
            <div className="second-top-right">
              <div className="second-top-upper">
                <div className="pointer"></div>
                <p>{props.rightText}</p>
              </div>
              <div className="second-top-lower">
                <div className="feature-tag"><p>{props.upperText}</p></div>
                <div className="feature-tag-one"><p>{props.lowerText}</p> <p>{props.lowerTextSecond}</p></div>
              </div>
            </div>
            <div className="second-top-left">
              <div className='rekha'>
                <div className="pointer"></div>
                <p>{props.leftText}</p>
              </div>
            </div>
          </div>
          <div className="special-bttn">
            <button className='start-bttn-special'> <span>Get Started</span></button>
          </div>
          <div className="feature-bottom">
          <div className="feature-image">
            <img src={props.image} alt="" />
          </div>
          </div>
        </div>

  )
}

export default FeatureBox