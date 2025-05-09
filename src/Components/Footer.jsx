import React from 'react'
import '../Components/Footer.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import f1 from '../assets/p1.png'
import f2 from '../assets/p2.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



function Footer() {
  return (
    <div className='main_footer'>

      <div className="sub_footer">

      <div className="news_letter">
        <input type="text"   class="custom-input" placeholder='Enter Your mail id'/>
        <button><FaArrowRight className='right_arrow'/></button>

        <div className="social_icons">
        <button><a href=""> <FaFacebookF className='facebook' /> </a></button>
        <button><a href=""> <FaTwitter  className='twiter' /> </a></button>
        <button><a href=""> <FaLinkedinIn  className='linkedin' /> </a></button>
      </div>

      </div>

      <div className="main_list">

        <div className="menu">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="instagram">
          <h3>Instagram</h3>

          <div className="instagram_content">
            <img src={f1} alt="" />
            <p>long established fact<br></br> that a reader</p>
          </div>


          <div className="instagram_content1">
            <img src={f2} alt="" />
            <p>long established fact<br></br> that a reader</p>
          </div>
        </div>

        <div className="foot_about">
          <h3>About Us</h3>
          <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
        </div>
        <div className="foot_contact">
        <h3>Contact Us</h3>

        <div className="foot_address">

        <div className="foot_list_1">
          <ul>
            <li> <FaLocationDot className='location' /> Location</li>
          </ul>
        </div>
        <div className="foot_list_2">
        <ul>
            <li> <FaPhoneAlt className='phone'/> Call +91-1234567890</li>
          </ul>
        </div>
        <div className="foot_list_3">
        <ul>
            <li><IoMdMail className='mail'/>mail@domain.com</li>
          </ul>
        </div>

        </div>

        </div>


      </div>

      </div>

    </div>
  )
}

export default Footer;