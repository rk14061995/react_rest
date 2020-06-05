import React from 'react';
import './style.css';
const Slider_One=(porps)=>{
    return(
        <div className="slider-container">
            <div id="restCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#restCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#restCarousel" data-slide-to="1"></li>
                <li data-target="#restCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="./assets/1.jpg" alt="First slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="./assets/2.jpg" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="./assets/3.jpg" alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#restCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#restCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    );
}
export default Slider_One;