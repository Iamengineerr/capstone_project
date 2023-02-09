import React from 'react';
import {plansData} from '../../src/data/plansData';
import whiteTick from '../../src/assets/whiteTick.png';
import './Plans.css';

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="plans plans-blur-1"></div>
        <div className="plans plans-blur-2"></div>
        <div className="program-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>

        <div className="plans">
            {plansData.map((plans, i) => (
                <div className="plan" key = {i}>
                    {plans.icon}

                    <span>{plans.name}</span>
                    <span>$ {plans.price}</span>

                    <div className="features">
                        {plans.features.map((features, i) => (
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{features}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>See more details </span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Plans;
