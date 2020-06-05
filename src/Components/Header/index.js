import React,{ Component,useState } from 'react';
import { Button, ButtonToolbar, Modal, Form, Col,Row,Container } from 'react-bootstrap';
// import './style.css';
export default class Header extends Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    handleModal(){
        console.log("dddddddddd");
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        return(
            <div className="header sticky-header">
                {/* <Button onClick={()=>this.handleModal()}>Click Me</Button> */}
                
                <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>
                    <Modal.Title>Customer login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <Form>
                            <Container>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <code>
                                            <label>Email Id:</label>
                                         </code>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <code>
                                            <input type="text"  className="form-control"/>
                                         </code>
                                    </Col>
                                </Row>

                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <code>
                                            <label>Password :</label>
                                         </code>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <code>
                                            <input type="password" className="form-control"/>
                                         </code>
                                    </Col>
                                </Row>

                            </Container>
                       </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>this.handleModal()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>this.handleModal()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="logo">
                                <a href="https://demo.hasthemes.com/resta-preview/resta/index.html">
                                    <img src="./assets/logo.png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-6">
                            <div className="mgea-full-width">
                                <div className="header-right">
                                    <div className="header-menu d-none d-lg-block">
                                        <div className="menu">
                                            <ul>
                                                <li><a href="#">Home</a>
                                                    {/* <ul className="dropdown_menu">
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html">home page one</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-2.html">home page two</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-3.html">home page three</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-4.html">home page four</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-box.html">home page five</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-box-fixed.html">home page six</a></li>
                                                    </ul> */}
                                                </li>
                                                <li><a href="#About_" >About</a></li>
                                                <li><a href="javascript:void(0)" onClick={()=>this.handleModal()}>Log In</a></li>
                                                {/* <li><a href="https://demo.hasthemes.com/resta-preview/resta/about-us.html">Sign Up</a></li> */}
                                                <li className="mega-parent"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Elements</a>
                                                    <ul className="mgea-menu">
                                                        <li className="mega-sub"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Column one</a>
                                                            <ul className="mega-sub-item">
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-accordion.html">Accordion</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-tab.html">Tab</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-table.html">table</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-progressbar.html">progressbar</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-alerts.html">Alerts</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-sub"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Column two</a>
                                                            <ul className="mega-sub-item">
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-audio.html">Audio</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-video.html">Video</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-gallery.html">gallery one</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/gallery.html">Gallery two</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-typhography.html">typhogrpahy</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-sub"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Column Three</a>
                                                            <ul className="mega-sub-item">
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-testimonail.html">Testimonial</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-brand.html">brand</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-team.html">Team</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-button.html">Button</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-map.html">map</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-sub"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Column one</a>
                                                            <ul className="mega-sub-item">
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-food-item-1.html">Food menu item 1</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-food-item-2.html">Food menu item 2</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-contact.html">Contact form</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-food-product.html">Food product</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-no-sticky.html">No sticky</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Feature</a>
                                                    <ul className="dropdown_menu">
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/404.html">404</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/coming-soon_page.html">Coming Soon</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/contact-us.html">contact us</a></li>
                                                        <li className="dropdown-mega"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html">home page</a>
                                                            <ul className="dropdown-submenu">
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-2.html">Animated text</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-3.html">Video background</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-4.html">Parallax verison</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-box.html">Box layout</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-box-fixed.html">Box layout fixed</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/blog.html">Blog page</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/blog-details.html">Blog details</a></li>
                                                        <li className="dropdown-mega"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Extra elements</a>
                                                            <ul className="dropdown-submenu">
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-accordion.html">Accordion</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-tab.html">Tab</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-progressbar.html">progress bar</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-table.html">Table</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-audio.html">Audio</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-video.html">video</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-alerts.html">Alerts</a></li>
                                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-typhography.html">Typhography</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/food-menu.html">Food menu</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/gallery.html">gallery</a></li>
                                                    </ul>
                                                </li> */}
                                                <li><a href="#Gallery_">Gallery</a></li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">pricing</a></li>
                                                {/* <li><a href="https://demo.hasthemes.com/resta-preview/resta/blog.html">blog</a></li> */}
                                                <li><a href="#Footer_">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="search">
                                        <div className="search-inner">
                                            <a href="https://demo.hasthemes.com/resta-preview/resta/index.html#"><i className="mdi mdi-magnify"></i></a>
                                        </div>
                                    </div>	
                                </div>
                                <div className="search-inside d-none">
                                    <a href="https://demo.hasthemes.com/resta-preview/resta/index.html#" className="search-close"><i className="mdi mdi-close"></i></a>
                                    <div className="search-overlay"></div>
                                    <div className="searchbar-inner">
                                        <div className="search">
                                            <form action="https://demo.hasthemes.com/resta-preview/resta/index.html#">
                                                <input type="search" placeholder="Search here" /><button type="submit"><i className="mdi mdi-magnify"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu start --> */}
                <div className="mobile-menu-area d-block d-lg-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav id="dropdown d-block"> 
                                    <ul>
                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Home</a>
                                            <ul className="dropdown_menu">
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html">home page one</a></li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-2.html">home page two</a></li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-3.html">home page three</a></li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-4.html">home page four</a></li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-box.html">home page five</a></li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-box-fixed.html">home page six</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/about-us.html">about</a></li>
                                        <li className="mega-parent"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Elements</a>
                                            <ul className="mgea-menu">
                                                <li className="mega-sub"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Column one</a>
                                                    <ul className="mega-sub-item">
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-accordion.html">Accordion</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-tab.html">Tab</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-table.html">table</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-progressbar.html">progressbar</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-alerts.html">Alerts</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-sub"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Column two</a>
                                                    <ul className="mega-sub-item">
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-audio.html">Audio</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-video.html">Video</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-gallery.html">gallery one</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/gallery.html">Gallery two</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-typhography.html">typhogrpahy</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-sub"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Column Three</a>
                                                    <ul className="mega-sub-item">
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-testimonail.html">Testimonial</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-brand.html">brand</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-team.html">Team</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-button.html">Button</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-map.html">map</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-sub"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Column one</a>
                                                    <ul className="mega-sub-item">
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-food-item-1.html">Food menu item 1</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-food-item-2.html">Food menu item 2</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-contact.html">Contact form</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-food-product.html">Food product</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-no-sticky.html">No sticky</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Feature</a>
                                            <ul className="dropdown_menu">
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/404.html">404</a></li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/coming-soon_page.html">Coming Soon</a></li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/contact-us.html">contact us</a></li>
                                                <li className="dropdown-mega"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html">home page</a>
                                                    <ul className="dropdown-submenu">
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-2.html">Animated text</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-3.html">Video background</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-4.html">Parallax verison</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-box.html">Box layout</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index-box-fixed.html">Box layout fixed</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/blog.html">Blog page</a></li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/blog-details.html">Blog details</a></li>
                                                <li className="dropdown-mega"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Extra elements</a>
                                                    <ul className="dropdown-submenu">
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-accordion.html">Accordion</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-tab.html">Tab</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-progressbar.html">progress bar</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-table.html">Table</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-audio.html">Audio</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-video.html">video</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-alerts.html">Alerts</a></li>
                                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/elements-typhography.html">Typhography</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/food-menu.html">Food menu</a></li>
                                                <li><a href="https://demo.hasthemes.com/resta-preview/resta/gallery.html">gallery</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/gallery.html">gallery</a></li>
                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">pricing</a></li>
                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/blog.html">blog</a></li>
                                        <li><a href="https://demo.hasthemes.com/resta-preview/resta/contact-us.html">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu end --> */}
            </div>
        )
    }
}
