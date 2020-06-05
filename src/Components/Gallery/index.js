import React from 'react';
const Gallery=(props)=>{
    return(
        <div className="our-gallery" id="Gallery_">
            <div className="bg-img-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title grey_bg mb-50 text-center">
                                <h2 className="mb-50">our gallery</h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gallery-menu fix text-center mb-60">
                                <ul>
                                    <li className="active" data-filter="*">all</li>
                                    <li data-filter=".desert">desert</li>
                                    <li data-filter=".coffee">coffee</li>
                                    <li data-filter=".drink">drink</li>
                                    <li data-filter=".catering">catering services</li>
                                </ul>
                            </div>
                            <div className="gallery-item-box row" style={{position: 'relative', height: '502.688px'}}>
                                <div className="col-lg-4 col-md-6 gallery-item desert drink mb-30" style={{position: 'absolute', left: '0px', top: '0px'}}>
                                    <div className="single-item-gallery">
                                        <a href="./assets/1(1).jpg">
                                            <span className="plus"><i className="mdi mdi-plus"></i></span>
                                        </a>
                                        <img src="./assets/1(1).jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 gallery-item coffee catering mb-30" style={{position: 'absolute', left: '380px', top: '0px'}}>
                                    <div className="single-item-gallery">
                                        <a href="./assets/2(2).jpg">
                                            <span className="plus"><i className="mdi mdi-plus"></i></span>
                                        </a>
                                        <img src="./assets/2(2).jpg" alt=""/>
                                    </div>
                                </div> 
                                <div className="col-lg-4 col-md-6 gallery-item desert drink mb-30" style={{position: 'absolute', left: '760px', top: '0px'}}>
                                    <div className="single-item-gallery">
                                        <a href="./assets/3(2).jpg">
                                            <span className="plus"><i className="mdi mdi-plus"></i></span>
                                        </a>	
                                        <img src="./assets/3(2).jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 gallery-item coffee catering mb-30" style={{position: 'absolute', left: '0px', top: '251px'}}>
                                    <div className="single-item-gallery">
                                        <a href="./assets/3(2).jpg">
                                            <span className="plus"><i className="mdi mdi-plus"></i></span>
                                        </a>
                                        <img src="./assets/4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 gallery-item coffee drink catering mb-30" style={{position: 'absolute', left: '380px', top: '251px'}}>
                                    <div className="single-item-gallery">
                                        <a href="./assets/5.jpg">
                                            <span className="plus"><i className="mdi mdi-plus"></i></span>
                                        </a>
                                        <img src="./assets/5.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 gallery-item desert catering mb-30" style={{position: 'absolute', left: '760px', top: '251px'}}>
                                    <div className="single-item-gallery">
                                        <a href="./assets/6.jpg">
                                            <span className="plus"><i className="mdi mdi-plus"></i></span>
                                        </a>
                                        <img src="./assets/6.jpg" alt=""/>
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
export default Gallery;