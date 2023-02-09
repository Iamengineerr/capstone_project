import React from 'react'
import Header from './Header'
import './Start.css'
import Heart from '../../src/assets/heart.png';
import Calories from '../../src/assets/calories.png';
import hero_image from '../../src/assets/hero_image.png';
import hero_image_back from '../../src/assets/hero_image_back.png';
import { motion } from 'framer-motion';

const Start = () => {

  const transition = {typr: 'spring' , duration: 3}

  return (
    <div className="Start">
      <div className="blur start-blur"></div>
        <div className="left-h">

            <Header />

             {/* the best add */}

            <div className="the-best-ad">
              <motion.div
                initial={{left: '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}>
              </motion.div>
              <span>The Best Fitness Club in the Town</span>
            </div>

            {/* hero heading */}

            <div className="hero-text">

              <div>
                <span className='stroke-text'>Shape</span>
                <span>Your</span>
              </div>

              <div>
                <span>Ideal body</span>
              </div>

              <div>
                <span>Build your body and stay healthy and fit with our gym</span>
              </div>

            </div>

            {/* figures */}

            <div className="figures">

              <div>
                <span>+140</span>
                <span>expert coaches</span>
              </div>

              <div>
                <span>+1200</span>
                <span>members joined</span>
              </div>

              <div>
                <span>+50</span>
                <span>fitness program</span>
              </div>
            </div>

            {/*start buttons */}

            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Learn More</buttons>
            </div>

        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>
          <div className="heart-rate">
            <img src={Heart} alt='' />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>

          {/* hero images */}

          <img src={hero_image} alt="" className="hero-images" />
          <img src={hero_image_back} alt="" className="hero-images-back" />

          {/* calories */}

          <div className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
          </div>
        </div>
        </div>
  )
}

export default Start
