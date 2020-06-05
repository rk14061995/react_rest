import React from 'react';
import Header from '../../Components/Header';
import Slider_One from '../../Components/Slider';
import Home_About from '../../Components/About';
import Popular_Dishes from '../../Components/Populardishes';
import Foodmenu from '../../Components/Foodmenu';
import Gallery from '../../Components/Gallery';
import Reservation from '../../Components/Reservation';
import Blog from '../../Components/Blog';
import Team from '../../Components/Team';
import Offer from '../../Components/Offer';
import Footer from '../../Components/Footer';
const Wrapper=(props)=>{
    return(
        <div className="wrapper white-bg">
            <Header/>
            <Slider_One/>
            <Home_About/>
            <Popular_Dishes/>
            <Foodmenu/>
            <Gallery/>
            <Reservation/>
            <Blog/>
            {/* <Team/> */}
            <Offer/>
            <Footer/>
        </div>
    )
}
export default Wrapper;