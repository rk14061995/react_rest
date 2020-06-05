import React from 'react';
const Blog=(props)=>{
    return(
        <div className="our-blog grey-bg ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-title grey_bg mb-50 text-center">
                            <h2 className="mb-50">Our blog</h2>
                            <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                        </div>
                    </div>
                </div>
                <div className="blog-details">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="blog-thumbnail">
                                    <img src="./assets/10.jpg" alt=""/>
                                </div>
                                <div className="blog-desc">
                                    <div className="publish-date">
                                        <p>13<span>Mar</span></p>
                                    </div>
                                    <div className="blog-title">
                                        <h3><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Lorem Ipsum is simply dummy</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog blog-video">
                                <div className="blog-img">
                                    <div className="blog-thumbnail">
                                        <img src="./assets/2(3).jpg" alt=""/>
                                    </div>
                                    <div className="blog-hover">
                                        <a href="https://www.youtube.com/watch?v=oxPgDogVFnQ"><i className="mdi mdi-play"></i></a>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-lg-block d-md-none d-block">
                            <div className="single-blog">
                                <div className="blog-thumbnail">
                                    <img src="./assets/3(3).jpg" alt=""/>
                                </div>
                                <div className="blog-desc">
                                    <div className="publish-date">
                                        <p>13<span>Mar</span></p>
                                    </div>
                                    <div className="blog-title">
                                        <h3><a href="https://demo.hasthemes.com/resta-preview/resta/index.html#">Lorem Ipsum is simply dummy</a></h3>
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
export default Blog;