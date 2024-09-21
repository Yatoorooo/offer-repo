import React, {Component} from 'react';
import '../App.css'
import './finish.css'
import girl4 from '../assets/girls4.png'
import girl3 from '../assets/girls3.png'
import './mobileF.css'
import '../App.css'

function Finish()  {
    const handleClick = (event) => {
        event.currentTarget.classList.toggle("active");
    }
        return (
            <>

                <section className='finish-page'>

                    <img className= 'imgf1' src={girl3} alt='girl3'></img>
                    <div className='finish-content'>
                        <h1 className='h1-main h1M'>Warning</h1>
                        <h3 className='h3-finish'>You must be at least 18 years old and comfortable with mature topics
                            to play the game.</h3>
                        <div className=' btn-finish'>
                            <button className='btn-t btnF'>
                                Ok, Continue
                            </button>
                        </div>
                    </div>
                    <img className='imgf2' src={girl4} alt='girl4'></img>
                    <div className='header finishH'>
                        <button onClick={handleClick} className="button-header"></button>
                    </div>
                </section>
            </>
        );

}

export default Finish;