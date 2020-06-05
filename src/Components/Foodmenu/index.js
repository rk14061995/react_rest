import React from 'react';
import './style.css';
const Foodmenu=(props)=>{
    return(
        <div className="food-menu white-bg ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-title mb-50 text-center white_bg">
                            <h2 className="mb-50">Our Food Menu</h2>
                            <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                        </div>
                    </div>
                </div>
                <div className="food-item-tab home-page row">
                    <div className="col-lg-12">
                        <div className="foode-item-box fix mb-60">
                            <ul className="nav foode-item_nav" role="tablist">
                                <li role="presentation"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#tab1" aria-controls="tab1" data-toggle="tab">All item</a></li>
                                <li role="presentation"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#tab2" aria-controls="tab2" data-toggle="tab">breakfast</a></li>
                                <li role="presentation"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#tab3" aria-controls="tab3" data-toggle="tab">lunch</a></li>
                                <li role="presentation"><a className="active" aria-controls="tab4" href="https://demo.hasthemes.com/resta-preview/resta/index.html#tab4" data-toggle="tab">dinner</a></li>
                                <li role="presentation"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#tab5" aria-controls="tab5" data-toggle="tab">drink</a></li>
                                <li role="presentation"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#tab6" aria-controls="tab6" data-toggle="tab">party</a></li>
                                <li role="presentation"><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#tab7" aria-controls="tab7" data-toggle="tab">coffee</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="food-item-desc">
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane" id="tab1">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_left">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/01.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/2(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/3(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/4.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_right">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/5.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/6.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/7.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/8.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="tab2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_left">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/4.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/3(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/2(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/01.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_right">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/8.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/7.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/5.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/6.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="tab3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_left">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/01.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/2(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/3(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/4.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_right">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/5.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/6.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/7.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/8.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane active" id="tab4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_left">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/01.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/2(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/3(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/4.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_right">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/5.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/6.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/7.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/8.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="tab5">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_left">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/01.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/4.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/2(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/3(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_right">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/8.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/7.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/6.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/5.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="tab6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_left">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/01.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/2(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/3(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/4.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_right">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/5.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/6.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/7.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/8.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="tab7">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_left">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/4.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/01.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/2(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/3(1).png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="fooder-menu-description float_right">
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/8.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/5.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item mb-30">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/7.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div className="single-food-item">
                                                    <div className="single-food-inner">
                                                        <div className="food-img">
                                                            <img src="./assets/6.png" alt=""/>
                                                        </div>
                                                        <div className="single-food-item-desc">
                                                            <div className="single-food-item-title">
                                                                <h2><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Fried Potatoes With Garlic</a></h2>
                                                                <p>Mushroom / Garlic / Veggies</p>
                                                            </div>
                                                            <div className="single-food-price">
                                                                <p>$100</p>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Foodmenu;