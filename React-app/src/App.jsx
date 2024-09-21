import {useState, useTransition} from 'react'
import { useSpring, animated } from '@react-spring/web'
import './App.css'
import Select from "./Components/Select.jsx";

import on from "./assets/on.svg"
import off from "./assets/off.svg"
import girls1 from "./assets/girls1.png"
import girls2 from "./assets/girls2.png"
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import './mobile.css'
function App() {
const handleClick = (event) => {
  event.currentTarget.classList.toggle("active");
}

  return (
      <>
        <main className='main-page'>
          <div className='header'>
            <button onClick={handleClick} className="button-header"></button>
          </div>

          <div className='conteiner-main'>
            <div className='imgs'>
            <img className='img2' src={girls1} alt='girls1'/>
            <img className='img1' src={girls2} alt='girls1'/>
            </div>
            <div className='main-content'>
              <h3 className='h3-main'>
                Stop spending time on mediocre online stuff!
              </h3>
              <h1 className='h1-main'>Explore our intriguing
                3D game</h1>
              <h3 className='h3-other'>instead and experience unparalleled pleasure like you've never seen
                before.</h3>
              <div className='btn-main'>
                <button className='btn-f'>No,thanks</button>
                <Link to='/select' className='btn-t'>Continue</Link>
              </div>
            </div>
          </div>

        </main>
      </>
  )
}

export default App
