
import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function About(){
    return(
        <>


<section id="top">
         <header>
            <div className="container">
               <div className="header-top">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="full">
                           <div className="logo">
                              <Link to ="/"><h1 style={{color:'red'}}>SPORTS BUDDY APPLICATION</h1></Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="right_top_section">
                     
                           <ul className="social-icons pull-left">
                              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                              <li><a className="youtube" href="#"><i className="fa fa-youtube-play"></i></a></li>
                              <li><a className="pinterest" href="#"><i className="fa fa-pinterest-p"></i></a></li>
                           </ul>
                           {/* <!-- end social icon -->
                           <!-- button section --> */}
                           <ul className="login">
                              <li className="login-modal">
                              <Link to="/login">Login</Link>
                              </li>
                              <li>
                                 <div className="cart-option">
                                 <Link to="/register">Register</Link>
                                 </div>
                              </li>
                           </ul>
                           {/* <!-- end button section --> */}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="header-bottom">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="full">
                           <div className="main-menu-section">
                              <div className="menu">
                                 <nav className="navbar navbar-inverse">
                                    <div className="navbar-header">
                                       <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
                                       <span className="sr-only">Toggle navigation</span>
                                       <span className="icon-bar"></span>
                                       <span className="icon-bar"></span>
                                       <span className="icon-bar"></span>
                                       </button>
                                       <a className="navbar-brand" href="#">Menu</a>
                                    </div>
                                    <div className="collapse navbar-collapse js-navbar-collapse">
                                       <ul className="nav navbar-nav">
                                          <li className="active"><Link to="/">Home</Link></li>
                                          <li><Link to="/about">About</Link></li>
                                          <li><Link to="/contact">Contact</Link></li>
                                          <li><Link to="/register">Register</Link></li>
                                          
                                         
                                          
                                         
                                       </ul>
                                    </div>
                              
                                 </nav>
                                 <div className="search-bar">
                                    <div id="imaginary_container">
                                       <div className="input-group stylish-input-group">
                                          <input type="text" className="form-control"  placeholder="Search" />
                                          <span className="input-group-addon">
                                          <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>  
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <div className="inner-page-banner">
            <div className="container">
            </div>
         </div>
      </section>

      <section id="contant" className="contant main-heading" style={{paddingBottom:0,marginBottom:"-1px",position:"relative",zIndex:"1"}}>
         <div className="aboutus">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 col-sm-12">
                     <div className="col-md-7 col-sm-7 col-xs-12">
                        <div className="full">
                           <h3>SPORTY BUDDY HISTORY</h3>
                           <p>SportsBuddy is an app that provides smart-matching location-based services to connects people through sports.
                               It uses popular social networks to gathers users' basic information in order to match users based on exact geographical location, mutual friends, common interests and level of play in a specific sport...
                           </p>
                           <ul className="icon-list">
                            {/*<li><i className="fa fa-angle-right"></i> Voluptate illum dolore ita ipsum</li>
                              <li><i className="fa fa-angle-right"></i> Labore admodum ita multos malis ea nam nam tamen fore amet</li>
                              <li><i className="fa fa-angle-right"></i> Voluptate illum dolore ita ipsum</li></div>*/}
                           </ul>
                        </div>
                     </div>
                     <div className="col-md-5 col-sm-5 col-xs-12">
                        <img className="img-responsive" src="images/img-07.jpg" alt="#" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="dark-section" style={{background:"url(images/walle.jpg)"}}>
            <div className="container">
               <div className="row">
                  <div className="col-md-12 col-sm-12">
                     <div className="heading-main">
                        <h2>Our Testimonials</h2>
                     </div>
                     <div className="testimonial-slider">
                        <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                        
                           <div className="carousel-inner text-center">
                        
                              <div className="item active">
                                 <blockquote>
                                    <div className="row">
                                       <div className="col-sm-10 col-sm-offset-1">
                                          <p>"I've been using Sports Buddy for a few months now and I'm blown away by the community it has created.
                                              I've connected with people who share my love of running and we've formed our own little running group that meets up every weekend. 
                                              The app has helped me become more consistent with my workouts and I'm grateful for that."
 !</p>
                                          <small>Someone famous</small>
                                       </div>
                                    </div>
                                 </blockquote>
                              </div>
                          
                              <div className="item">
                                 <blockquote>
                                    <div className="row">
                                       <div className="col-sm-10 col-sm-offset-1">
                                          <p>1. "I absolutely love the Sports Buddy app! As someone who is always looking to stay active and try new sports, this app has been a game-changer. 
                                             The ability to connect with like-minded individuals and join groups for different sports has been amazing.
                                              I've made new friends and discovered new sports I never even thought to try before. Highly recommend! </p>
                                          <small>Someone famous</small>
                                       </div>
                                    </div>
                                 </blockquote>
                              </div>
                     
                              <div className="item">
                                 <blockquote>
                                    <div className="row">
                                       <div className="col-sm-10 col-sm-offset-1">
                                          <p>"I'm someone who loves to try new sports but has always found it hard to find people to play with. 
                                             That's where Sports Buddy comes in. I can search for groups that play the sports I'm interested in and join them. 
                                             It's been a fantastic way for me to try new things and meet new people."</p>
                                          <small>Someone famous</small>
                                       </div>
                                    </div>
                                 </blockquote>
                              </div>
                           </div>
                
                           <ol className="carousel-indicators">
                              <li data-target="#quote-carousel" data-slide-to="0" className="active"><img className="img-responsive " src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg" alt=""/>
                              </li>
                              <li data-target="#quote-carousel" data-slide-to="1"><img className="img-responsive" src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" alt=""/>
                              </li>
                              <li data-target="#quote-carousel" data-slide-to="2"><img className="img-responsive" src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt=""/>
                              </li>
                           </ol>
                     
                           <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-chevron-left"></i></a>
                           <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-chevron-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      
         <Footer/>
        </>
    )
}

export default About;