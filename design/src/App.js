import React, { Component } from 'react';
import img from './img/slider_1.jpg'
import img1 from './img/service_bg.jpg'
import img2 from './img/icon_design.png'
import img3 from './img/icon_development.png'
import img4 from './img/icon_marketing.png'
import img5 from './img/testimonial_bg.jpg'
import logo from './img/ash.png'
import './App.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
 
  render() {
    let styles = {
      backgroundImage: `url(${img})`,
      backgroundPosition: 'right bottom'
    };
    let style1 = {
      backgroundImage: `url(${img1})`,
      backgroundPosition: 'center center'
    };
    let style2 = {
      backgroundImage: `url(${img5})`,
      backgroundPosition: 'center center'
    };
    return (
      <div className="App">
        <div id="header" className="header">
          <div className="header-inner">
              <Link to="/" className="logo">   
                <img src={logo} alt="logo"/>
              </Link>  
            <div className="nav-menu singlepage-nav">
              <ul className="nav-menu-inner">
                <li><Link to="">Home</Link></li>
                <li><Link to="">About</Link></li>
                <li><Link to="">Service</Link></li>
                <li><Link to="">Work</Link></li>
                <li><Link to="">Blog</Link></li>
                <li><Link to="">Contact</Link></li>
                <li><Link to="/Path" className="external-link btn-border">Hire Me</Link></li>
              </ul>
            </div> 
          </div>
        </div>   
          <section id="main-slider-section" className="main-slider bg-image ptb-60 clearfix overlay-dark80" style={styles}>
            <div className="mainslider-content ptb-70">
                <div className="mainslider-content-inner">
                  <h2 className="mainslider-title mb-15 pt-85">Hello! I Am</h2>
                  <h1 className="mainslider-subtitle mb-10">Creative Technologist</h1>
                  <p className="mainslider-text">A designer and Front-end Developer</p>
                  <div className="slider-btn mt-35">
                    <a className="btn btn-lg btn-color mlr-10" target="_blank">See My Work</a>
                    <a className="external-link btn btn-lg btn-white mlr-10" target="_blank">Hire Me</a>
                  </div>
                </div>
            </div>
          </section>
          <section id="service-section" className="service section-padding parallex-bg clearfix overlay-dark" style={style1}>
            <div className="container text-center">
              <h1 className="main-title pb-60">SERVICE</h1>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="services p-60">
                    <img src={img2} alt="design" />
                    <h3 className="sub-title mtb-15">Design</h3>
                    <div className="s-overlay">
                      <img src={img2} alt="design" />
                      <h3 className="sub-title mtb-15">Design</h3>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </div>  
                </div>
                <div className="col-md-4">
                  <div className="services p-60">
                    <img src={img3} alt="design" />
                    <h3 className="sub-title mtb-15">Developement</h3>
                    <div className="s-overlay">
                      <img src={img3} alt="design" />
                      <h3 className="sub-title mtb-15">Developement</h3>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </div>  
                </div>
                <div className="col-md-4">
                  <div className="services p-60">
                    <img src={img4} alt="design" />
                    <h3 className="sub-title mtb-15">Marketing</h3>
                    <div className="s-overlay">
                      <img src={img4} alt="design" />
                      <h3 className="sub-title mtb-15">Marketing</h3>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </section>
          <section id="testimonials-section" className="overlay-yellow parallex-bg testimonials section-padding" style={style2}>
            <div className="container text-center">
              <h1 className="main-title pb-60">What My Client Say?</h1>
            </div>
            <div className="container">
              <div className="owl-carousel testimonial-carousel white-bg owl-theme">
                <div className="owl-wrapper-outer autoHeight">
                  <div className="owl-wrapper">
                    <div className="owl-item">
                      <div className="item">
                        <div className="testimonial text-center max-width-700 pt-20">
                          <div className="page-icon-sm">
                            <i className="fa fa-quote-left"></i>
                          </div>
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                          </p>
                          <h6 className="quote-author">Jeff Dunham </h6>
                          <p className="small">CEO of jacklab</p>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-controls clickable">
                  <div className="owl-pagination">
                    <div className="owl-page">
                      <span className=""></span>
                    </div>
                    <div className="owl-page">
                      <span className=""></span>
                    </div>
                    <div className="owl-page">
                      <span className=""></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>   
      </div>
    );
  }
}

export default App;
