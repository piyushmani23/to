import React from 'react'
import '../Components/Testimonial.css'
import client from '../assets/client.jpg'
import { ImQuotesLeft } from "react-icons/im";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
// import people from '../Components/data.jsx'
import people from "../Components/reviews.jsx"
import { useState } from 'react';




function Testimonial() {
  const [index, setIndex] = useState(0);
  const { name, job, imgage, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1){
      return 0;
    }
    if (number < 0){
      return people.length - 1;
    }
    return number;
  }


  const nextPerson = () =>{
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  const previousPerson = () =>{
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })

  }


  return (
    <div className='testimonial'>
      <h3>Testimonial</h3>

      <div className="testimonial_card">
      <img src={imgage} alt="" />
      <h3>{name}</h3>
      <p>{text} </p>
      <h2>  <ImQuotesLeft /> </h2>
      <h2> {job} </h2>
      </div>

      <div className="testimonial_button">
        <button onClick={previousPerson}><FaLongArrowAltLeft className='testimonial_left' /> </button>
        <button onClick={nextPerson}> <FaLongArrowAltRight className='testimonial_right'/> </button>
      </div>
      
      </div>
  )
}

export default Testimonial;