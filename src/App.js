import React, {useState} from 'react';
import Modal from "react-modal";
import { Button} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Wrapper from './Pages/Home';

function App() {
  
  return (
    <div className="App">
       
      <div className="preloader d-none">
        <div className="loading-center">
          <div className="loading-center-absolute">
            <div className="object object_one"></div>
            <div className="object object_two"></div>
            <div className="object object_three"></div>
          </div>
        </div>
      </div>
      <Wrapper/>
    </div>
    
  );
}

export default App;
