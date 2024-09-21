import { useRef, useState, useEffect, React} from 'react'
import './section.css'
import scroll1 from '../assets/Group1.png'
import  scroll2 from '../assets/Group2.png'
import scroll3 from '../assets/Group3.png'
import './mobileS.css'
import '../App.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
function Select()   {
         let imageConteinerRef = useRef(null);
         const images = [scroll1, scroll2, scroll3]
         const prev = () => imageConteinerRef.current.scrollLeft += 600;
         const next = () => imageConteinerRef.current.scrollLeft -= 600;
    const handleClick = (event) => {
        event.currentTarget.classList.toggle("active");
    }
         return (
            <>
                <section className='select'>

                    <h1 className='h1-s'>
                        Who Would You Choose as Your First Partner, if you play right now?
                        <div className='header'>
                            <button onClick={handleClick} className="button-header"></button>
                        </div>
                    </h1>
                    <div className='slider-menu'>
                        <div className='btn-slider-prev' onClick={next}></div>
                        <div className='content'>

                            <div className='slide-panel' ref={imageConteinerRef}>
                                {images.map(image => {
                                    return (<img src={image}/>)
                                })}
                            </div>


                        </div>
                        <div className='btn-slider-next' onClick={prev}></div>

                    </div>
                    <div className='btn-preview-next'>
                        <Link to='/finish' className='btn-next'>NEXT</Link>
                    </div>
                </section>

            </>
        );

}

export default Select;