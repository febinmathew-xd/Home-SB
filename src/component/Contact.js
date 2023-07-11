import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Contact() {
    return (
        <>

            <section>
                <header>
                    <div className="container">
                        <div className="header-top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="full">
                                        <div className="logo">
                                            <Link to='/'>
                              <h1 style={{color:'red'}}>SPORTS BUDDY</h1>
                           </Link>
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
                                                            <li className="active"><Link to='/'>Home</Link></li>
                                                            <li><Link to='/about'>About</Link></li>
                                                            <li><Link to='/contact'>Contact</Link></li>


                                                        </ul>
                                                    </div>

                                                </nav>
                                                <div className="search-bar">
                                                    <div id="imaginary_container">
                                                        <div className="input-group stylish-input-group">
                                                            <input type="text" className="form-control" placeholder="Search" />
                                                            <span className="input-group-addon" />
                                                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                                            <span />
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



            </section>

            <div className="inner-page-banner">
                <div className="container">
                </div>
            </div>
            <div className="inner-information-text">
                <div className="container">
                    <h3>Contact</h3>
                    <ul className="breadcrumb">
                        <li><Link to='/'>Home</Link></li>
                        <li className="active">Contact</li>
                    </ul>
                </div>
            </div>

            <section id="contant" className="contant main-heading team">
                <div className="row">
                    <div className="container">
                        <div className="contact">
                            <div className="col-md-12">
                                <div className="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.580671926123!2d77.31096031514461!3d28.582351982437654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad59dc9d0b%3A0xe4060212422c0b9a!2sLeopedia+Web+Solutions!5e0!3m2!1sen!2sin!4v1511962485065" width="600" height="450" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-info">
                                    <div className="kode-section-title">
                                        <h3>Contact Info</h3>
                                    </div>
                                    <div className="kode-forminfo">
                                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam aliquip..</p>*/}
                                        <ul className="kode-form-list">
                                            <li>Name
                                                <i className="fa fa-home"></i>
                                                <p><strong>Address:</strong> 4-5 Bonhill Street, Ernakulam, EC2A 4BX, INDIA   </p>
                                            </li>
                                            <li>
                                                <i className="fa fa-phone"></i>
                                                <p><strong>Phone:</strong>  7512345646</p>
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope-o"></i>
                                                <p><strong>Email:</strong>  support@sportbuddy.io</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-us">
                                    <form method="post" className="comments-form" id="contactform">
                                        <ul>
                                            <li><input type="text" id="name" name="name" className="required" placeholder="Name *" /></li>
                                            <li><input type="text" id="email" name="email" className="required email" placeholder="Email *" /></li>
                                            <li><input type="text" name="address" id="address" placeholder="Address:" /></li>
                                            <li><textarea name="message" id="message" placeholder="Add your message"></textarea></li>
                                            <li><input className="thbg-color" type="submit" value="send" /></li>
                                        </ul>
                                        <div className="hidden-me" id="contact_form_responce">
                                            <p></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Contact;