import React from 'react'
import webdesign from '../images/flatdesign.png';
import './navbar.css';
import  {Typewriter} from 'react-simple-typewriter';

import 'react-simple-typewriter/dist/index';
//import {Link} from "react-router-dom";
import {Link} from "react-scroll";
export default function Home() {
    const text= Typewriter({
        words:["Web Developer","Web Designer","Logo Designer",],
        loop:0,
        typeSpeed:70,
        deleteSpeed:50,
        delaySpeed:1000
    })
  return (
    <>
    <section className='d-flex justify-content-center align-items-center' id='home'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column  justify-content-center'>
                            <h4 className='text1'>Welcome to my Portfolio</h4>
                            <h1 className='text2'>Hi! I'm DeeZ <span className='typewriter'>
                                {text}
                                </span></h1>
                                <h4 className='text3 my-2'>I value simple content structure, clean design patterns and thoughtful interactions. I design and code beautifully simple things, and I love what I do.</h4>

                            {/* <h1>Grow your businnes with <br/><strong style={{color:'red'}} className='owner'> Deepak Chaudhary</strong></h1> */}
                            {/* <h1>Grow your businnes with <br/><strong  className='owner'> Deepak Chaudhary</strong></h1>
                            <h2 className='my-3'>We are team of tallented Dveelopers</h2> */}
                            <div className='mt-3'>
                                <Link type="button" to="about" className="btn  rounded-5">Get Started</Link>
                            </div>
                        </div>
                        <div className='col-lg-6 py-5 my-2 order-1 order-lg-2'>
                            <img src={webdesign} className='img-fluid animated' alt='...'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
