import React from 'react'
import './navbar.css';

//import Slider from 'react-slick';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../images/cadv.png';
import img2 from '../images/python.png';
import img3 from '../images/mysql.png';
import img4 from '../images/htmlandcss.png';
import img5 from '../images/nodejs.png';
import img6 from '../images/react.png';
import img7 from '../images/django.png';
import img8 from '../images/mongodb.png';
AOS.init({
    duration:700,
    offset:300,

});

export default function skills() {
  return (
    <section id='skills'>
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-10 mx-auto'>
                          <div className='card1'>
                        <h2 className='title1'>Tools & Technology</h2>
                        <div className="card mb-3" data-AOS="fade-up-right">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={img1} className="img-fluid rounded-start" height='150px' width='200px'  alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">C++ Programming</h5>
                                        <p className="card-text">C++ is a powerful general purpose programming language that gave a base to coding carrier.</p>
                                        <p className="card-text">CAfter learning this programming lanuage, it was much easier to understand the concepts of other advanced programming languages like python and java.</p>
                                        <p className="card-text"><small className="text-muted">Feb 2021</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3"  data-AOS="fade-up-left">
                            <div className="row g-0">
                            <div className="col-md-4">
                                        <img src={img2} className="img-fluid rounded-start" height='150px' width='200px'  alt="..."/>
                                    </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Python Programming Language</h5>
                                        <p className="card-text">Python was earlier commonly used for developing websites but nowdays it has become a staple in data science.</p>
                                        <p className="card-text">Most of the programmers including me like python for its simple syntax that mimics natural language. It has large and active community that contributes to Python's pool of modules and libraries.</p>
                                        <p className="card-text"><small className="text-muted">May 2021</small></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" data-AOS="fade-up-right">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={img3} className="img-fluid rounded-start" height='150px' width='200px'  alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">MySQL Structured Query Language</h5>
                                        <p className="card-text">MySQL is widely used py the programmers for maintaing the Relational Dtabase Managment System(RDBMS). It is an Open source.</p>
                                        <p className="card-text"><small className="text-muted">july 2021</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" data-AOS="fade-up-left">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={img4} className="img-fluid rounded-start" height='150px' width='200px'  alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">HTML & CSS</h5>
                                        <p className="card-text">HTML and CSS are the first and basic steps towards the businness that provides the development and deployment of web content and web applications.</p>
                                        <p className="card-text"><small className="text-muted">August 2021</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" data-AOS="fade-up-right">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={img7} className="img-fluid rounded-start" height='150px' width='200px'  alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">DJango Framework</h5>
                                        <p className="card-text">django is a high-level Python framework that enables rapid development of secure and maintainable Websites.It take care of much of the hassle of web development so we can focus on writing our app.</p>
                                        <p className="card-text"><small className="text-muted">December 2021</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" data-AOS="fade-up-left">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={img5} className="img-fluid rounded-start" height='150px' width='200px'  alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Node.js JS Environment</h5>
                                        <p className="card-text">Node JS is widely used by the programmers to deploy and develop traditional web sites and back-end APIs</p>
                                        <p className="card-text"><small className="text-muted">April 2021</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" data-AOS="fade-up-right">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={img6} className="img-fluid rounded-start" height='150px' width='200px'  alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">React Library</h5>
                                        <p className="card-text">React is an open-source front-end Javascript Library for building beautiful User Interfaces Components with an ease. It has taken the front-end development space by storm, eversince it has launched.</p>
                                        <p className="card-text"><small className="text-muted">April 2021</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" data-AOS="fade-up-left">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={img8} className="img-fluid rounded-start" height='150px' width='200px'  alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">MongoDB Document Oriented Database</h5>
                                        <p className="card-text">MongoDB is a document database that provides coders scalability and flexibility with querying and indexing. MongoDB is prefered over sql beacause it deals with structured as well as unstrucctured data.</p>
                                        <p className="card-text"><small className="text-muted">June 2021</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
    </section>
  )
}
