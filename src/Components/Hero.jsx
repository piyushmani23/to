import React from 'react'
import '../Components/Hero.css'
import App from '../../src/App'

function Hero() {
  return (
    <div className='main_hero'>
        <App />

        <div className="sections_hero">

            <div className="section_hero">

                <h1>Best Jewellery<br></br>Collection</h1>
                <p>It is a long established fact that a reader will be distracted by the <br></br>readable content of a page when looking at its layout. The point of <br></br>using Lorem</p>
                <button>Shop Now</button>
                
            </div>

        </div>
        
    </div>
  )
}

export default Hero;