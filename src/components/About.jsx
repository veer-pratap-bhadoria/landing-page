import React from 'react'

function About() {
  return (
    <div >
      <div className='what'>
        <div className="wht-left">What can you do</div>
        <div className="wht-right">
          <span>On-brand visuals.</span>
          <span>Made by AI.</span>
        </div>
      </div>

      <div className="stylism">
        <div className="paddler">
          <div className="box-one">
            <div className="style-tag"> AI Fashion Photoshoot</div>
            <div className="sub-box">
              <div className="leftist">
                <img src="/images/image-10.avif" alt="" />
              </div>

              <div className="neutral">
                <img src="/images/arrow.svg" alt="" />
              </div>

              <div className="rightist">
                <img src="/images/image-11.avif" alt="" />
              </div>

              <div className="response-one">
                <div className="photo-one">
                  <img src="/images/fourmula-11.avif" alt="" />
                </div>
                <div className="photo-two">
                  <img src="/images/fourmula-12.avif" alt="" />
                </div>
              </div>

              <div className="response-two">
                <div className="photo-three">
                  <img src="/images/fourmula-13.avif" alt="" />
                </div>
                <div className="photo-four">
                  <img src="/images/fourmula-14.avif" alt="" />
                </div>
              </div>

              <div className="response-three">
                <div className="photo-one">
                  <img src="/images/fourmula-15.avif" alt="" />
                </div>
                <div className="photo-two">
                  <img src="/images/fourmula-16.avif" alt="" />
                </div>
              </div>

            </div>
            <div className="style-bottom">
              <div className="upper-style">
                <p>Studio-quality,</p>
                <p>without the studio.</p>
              </div>
              <div className="lower-style">
                <p>Upload one product and get all the angles, looks and moods</p>
                <p>you need for PDPs and campaigns—without booking a studio.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-stylism">

          <div className="paddler-one">
            <div className="style-tag-two">
              AI Product Shots
            </div>
            <div className="collage-one">
              <div className="photu-one">
                <img src="/images/fourmula-18.avif" alt="" />
              </div>
              <div className="photu-two"><img src="/images/fourmula-17.avif" alt="" />
                <div className="sub-photu-one">
                  <div className="subone"><img src="/images/fourmula-20.avif" alt="" /></div>
                  <div className="subtwo"><img src="/images/fourmula-21.avif" alt="" /></div>
                </div>
              </div>
              <div className="photu-three"><img src="/images/fourmula-22.avif" alt="" /></div>
            </div>

            <div className="style-bottom-one">
              <div className="upper-style-one">
                <p>Your product, new</p>
                <p>scenes on demand.</p>
              </div>
              <div className="lower-style-one">
                <p>Drop a product photo and we build clean</p>
                <p>packshots and styled lifestyle scenes around it.</p>
              </div>
            </div>
          </div>

          <div className="paddler-two">
            <div className="style-tag-two">
              AI video production
            </div>
            <div className="collage-one">
              < div className="photu-one">
                <video src="/images/my-video-1.mp4" autoPlay muted loop></video></div>
              <div className="photu-two">
                <video src="/images/my-video-3.mp4" autoPlay muted loop></video>
              </div>
              <div className="photu-three">
                <video src="/images/my-video-2.mp4" autoPlay muted loop></video>
              </div>
            </div>

            <div className="style-bottom-one">
              <div className="upper-style-one">
                <p>Campaign-ready</p>
                <p>video in minutes.</p>
              </div>
              <div className="lower-style-one">
                <p>Create on-brand clips for Reels, TikTok</p>
                <p>and ads without a shoot.</p>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default About