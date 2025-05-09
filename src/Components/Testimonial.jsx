import React from 'react'
import '../Components/Testimonial.css'
import client from '../assets/client.jpg'
import { ImQuotesLeft } from "react-icons/im";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";




function Testimonial() {
  return (
    <div className='testimonial'>
      <h3>Testimonial</h3>

      <div className="testimonial_card">
      <img src={client} alt="" />
      <h3>Samantha Jonas</h3>
      <p>It is a long established fact that a reader will bedistracted by the readable cIt is a long established factthat a reader will be distracted by the readable </p>
      <h2><ImQuotesLeft />
      </h2>
      </div>

      <div className="testimonial_button">
        <button><FaLongArrowAltLeft className='testimonial_left' /> </button>
        <button> <FaLongArrowAltRight className='testimonial_right'/> </button>
      </div>
      
      </div>
  )
}

export default Testimonial;