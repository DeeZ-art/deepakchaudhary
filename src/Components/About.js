import React from 'react'
import './navbar.css';
import {motion} from 'framer-motion';
//import Slider from 'react-slick';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration:700,
    offset:300,

});




export default function About() {
    
    
    
  return (
    <>
    <section id='about'>
        <div className='container-fluid my-3'>
            <div className='row '>
                <div className='col-10 mx-auto card1' >
                <hr/>
                    <div >
                        <motion.h2 className='title1'  >Introduction</motion.h2>
                        <h5 className='subtitle1 '>UI/UX Designer</h5>
                        <p>I design and develop services for customers of all sizes, specialiazing in creating stylish, modern websites, web services and online stores.</p>
                        <p>Lorem aliquip nisi minim fugiat qui non ipsum labore eiusmod nulla ad. Consectetur magna non consequat ex cupidatat incididunt proident fugiat ullamco dolor exercitation ad. Dolore ut qui sit velit consectetur id occaecat id dolore et aute. Sunt nulla est sit cupidatat ex sit. Nostrud fugiat minim elit esse proident. Magna sit dolor pariatur aliqua adipisicing do ipsum ex incididunt. Exercitation quis duis minim sunt.</p>
                    </div>
                    <hr/>
                    <div className='my-2  '>
                        <h2 className='title1  '>About Me</h2>
                        <h5 className='subtitle1 '>Biography</h5>
                        <p>I am a Freelancer Front-end Developer with over 2 years of experience. I'm from India. I code and create web elements for amazing people around the world. I like work with new people. New people are new experience.</p>
                        <table className="table table-hover">
                            <tbody className='tbl1'>
                                <tr>
                                <th scope="row">NAME</th>
                                <td>Deepak Chaudhary</td>
                                </tr>
                                <tr>
                                <th scope="row">BIRTHDAY</th>
                                <td>29th October 2001</td>
                                </tr>
                                <tr>
                                <th scope="row">AGE</th>
                                <td>21 Years</td>
                                </tr>
                                <tr>
                                <th scope="row">ADDRESS</th>
                                <td>India,Madhya Pradesh</td>
                                </tr>
                                <tr>
                                <th scope="row">PHONE</th>
                                <td>+91-8839054030</td>
                                </tr>
                                <tr>
                                <th scope="row">EMAIL</th>
                                <td>Deez786@gmail.com</td>
                                </tr>
                                <tr>
                                <th scope="row">LINKEDIN</th>
                                <td>DeepakChaudhary</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr/>
                    <div >
                        <h2 className='title1'>Experience</h2>
                        <h5 className='subtitle1 '>Education Skills</h5>
                        <div className="card my-2" data-AOS="fade-right" >
                            <div className="card-body">
                                <h5 className="card-title">PRADEICO GLOBAL PVT LIMITED, INDIA</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Sr Front-end Engineer</h6>
                                <p className="card-text">Tempor elit magna incididunt cupidatat. Incididunt consequat ullamco mollit reprehenderit laboris elit. Tempor proident laborum laborum adipisicing enim quis minim occaecat. Cupidatat nulla tempor pariatur et non reprehenderit proident deserunt velit id cillum..</p>
                            </div>
                        </div>
                        {/* <motion.div className="card my-2" whileHover={{scale:1.05}} >
                            <div className="card-body">
                                <h5 className="card-title">PRADEICO GLOBAL PVT LIMITED, INDIA</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Sr Front-end Engineer</h6>
                                <p className="card-text">Tempor elit magna incididunt cupidatat. Incididunt consequat ullamco mollit reprehenderit laboris elit. Tempor proident laborum laborum adipisicing enim quis minim occaecat. Cupidatat nulla tempor pariatur et non reprehenderit proident deserunt velit id cillum..</p>
                            </div>
                        </motion.div> */}
                        <div className="card my-2" data-AOS="fade-left" >
                            <div className="card-body">
                                <h5 className="card-title">SKILLMAX ACADEMY, SINGAPORE</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Full Stack Developer</h6>
                                <p className="card-text">Tempor elit magna incididunt cupidatat. Incididunt consequat ullamco mollit reprehenderit laboris elit. Tempor proident laborum laborum adipisicing enim quis minim occaecat. Cupidatat nulla tempor pariatur et non reprehenderit proident deserunt velit id cillum..</p>
                            </div>
                        </div>
                        <div className="card my-2"  data-AOS="fade-right">
                            <div className="card-body">
                                <h5 className="card-title">ITS GWALIOR-Web Designing and Digital Marketing Company</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Front end developer</h6>
                                <p className="card-text">Tempor elit magna incididunt cupidatat. Incididunt consequat ullamco mollit reprehenderit laboris elit. Tempor proident laborum laborum adipisicing enim quis minim occaecat. Cupidatat nulla tempor pariatur et non reprehenderit proident deserunt velit id cillum..</p>
                            </div>
                        </div>
                    </div>
                    <hr/>

                </div>
            </div>
        </div>
    </section>
    </>
  )
  
}
