import React from 'react'
import '../Components/About.css'
import about1 from '../assets/about-img.jpg'

function About() {
  return (
    <div className='about'>
        <div className="about_left">
            <img src={about1} alt="" />
        </div>

        <div className="about_right">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.</p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default About