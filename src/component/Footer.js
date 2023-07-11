import React from "react";
function Footer(){
    return(
        <>

<footer id="footer" 
      Name="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="full">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        {/* <a href="#"><img src="images/footer-logo.png" alt="#" /></a> */}
                                    </div>
                                    <p>Most of our events have hard and easy route choices as we are always keen to encourage new riders.</p>
                                    <ul className="social-icons style-4 pull-left">
                                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a className="youtube" href="#"><i className="fa fa-youtube-play"></i></a></li>
                                        <li><a className="pinterest" href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="full">
                                <div className="footer-widget">
                                    <h3>Menu</h3>
                                    <ul className="footer-menu">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Our Team</a></li>
                                        <li><a href="#">Latest News</a></li>
                                        <li><a href="#">Recent Matchs</a></li>
                                        <li><a href="#">Our Blog</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="full">
                                <div className="footer-widget">
                                    <h3>Contact us</h3>
                                    <ul className="address-list">
                                        {/*<li><i className="fa fa-map-marker"></i> Lorem Ipsum is simply dummy text of the printing..</li>*/}
                                        <li><i className="fa fa-Address"></i> 4-5 Bonhill Street, Ernakulam, EC2A 4BX, INDIA</li>
                                        <li><i className="fa fa-phone"></i> 7512345646</li>
                                        <li><i style={{ fontSize:'20px',top:'5px' }} className="fa fa-envelope"></i>support@sportbuddy.io</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="full">
                                <div className="contact-footer" height="300" width="300">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120615.72236587871!2d73.07890527988283!3d19.140910987164396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1527759905404" width="400" height="350" frameborder="0" style={{ border:0 }}  ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p>Copyright © 2023</p>
                    </div>
                </div>

            
            </footer>
        </>
    )
}
export default Footer;