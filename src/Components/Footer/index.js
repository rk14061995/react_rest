import React from 'react';
const Footer=(props)=>{
    return(
        <div className="footer" id="Footer_">
            <div className="footer-top ptb-100 grey-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer">
                                <h3 className="single-footer-title">Contact us</h3>
                                <div className="single-footer-details mt-30">
                                    <p className="addresses">
                                        <strong>Address:</strong> House No 08, Ro ad No 08<br/>Din Bari, Dhaka, Bangladesh
                                    </p>
                                    <p className="email">
                                    <strong> Email:</strong> Username@gmail.com<br/>Damo@gmail.com
                                    </p>
                                    <p className="phon">
                                        <strong>Phone:</strong>(+660 256 24857)<br/>(+660 256 24857)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer">
                                <h3 className="single-footer-title">open hours</h3>
                                <div className="single-footer-details mt-30">
                                    <p>Lorem ipsum dolor sit amet,  tore latthi dimu consectetueiusmodm dost   </p>
                                    <div className="open-list">
                                        <ul>
                                            <li>Monday- Friday. . . . . <span>8 AM - 5PM</span></li>
                                            <li>Sunday. . . . . . . . . . . . <span>12 AM - 5PM</span></li>
                                            <li>Saturday . . . . . . . . . . . . . . . . . . <span>Close</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer instagram">
                                <h3 className="single-footer-title">instagram</h3>
                                <div className="single-footer-details mt-30">
                                <ul>
                                    <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#"><img src="./assets/1(3).jpg" alt=""/></a></li>
                                    <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#"><img src="./assets/2(5).jpg" alt=""/></a></li>
                                    <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#"><img src="./assets/3(4).jpg" alt=""/></a></li>
                                    <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#"><img src="./assets/4(1).jpg" alt=""/></a></li>
                                    <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#"><img src="./assets/5(1).jpg" alt=""/></a></li>
                                    <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#"><img src="./assets/6(1).jpg" alt=""/></a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer newsletter">
                                <h3 className="single-footer-title">Newsletter</h3>
                                <div className="single-footer-details mt-30">
                                    <p>Lorem ipsum dolor sit amet,  tore latthi dimu consectetueiusmodm dost </p>
                                    <div className="newsletter-form">
                                        <form action="https://demo.hasthemes.com/resta-preview/resta/index.html#">
                                            <input type="text" placeholder="Enter your email"/>
                                            <button type="submit">submit</button>
                                        </form>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            <div className="copyright text-center ptb-20 white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <p>Copyright © Resta 2019. All right reserved. Created by <a target="_blank" href="http://bootexperts.com/">HasTech</a></p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Footer;