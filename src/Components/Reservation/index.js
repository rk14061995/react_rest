import React from 'react';
const Reservation=(props)=>{
    return(
        <div className="reservation ptb-100 white-bg">
            <div className="bg-img-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title white_bg mb-50 text-center">
                                <h2 className="mb-50">Make A Reservation</h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="reserv-section-inner">
                                <div className="bg-img"></div>
                                <div className="reserve-form">
                                    <h3 className="reserv-title mb-60">Reservation Form</h3>
                                    <form action="https://demo.hasthemes.com/resta-preview/resta/index.html#">
                                        <div className="reserve-form-top">
                                            <input type="text" className="form-control" placeholder="FUll name"/>
                                            <input type="text" className="form-control" placeholder="Email address"/>
                                            <input type="text"className="form-control"  placeholder="Mobile number"/>
                                            <div className="date-time">
                                                <select className="form-control">
                                                    <option selected="">Select Date And Time</option>
                                                    <option>26Dec-10.00pm</option>
                                                    <option>2Jan-10.00pm</option>
                                                    <option>17Dec-10.00pm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="reserve-submit mt-40">
                                            <button type="submit">
                                                submit
                                            </button>
                                        </div>
                                    </form> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}
export default Reservation;