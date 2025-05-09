import React from 'react'
import '../Components/Products.css'
import p1 from '../assets/p1.png'

function Products(props) {
  return (
    <div className='main_card'>
        <div className="card">
            <div className="btn">
               <button>{props.button}</button>
                </div>
            <img src={props.imgs} alt="" />
            <div className="card_content">
                <h4>{props.brand}</h4>
                <h4>Price <span>{props.card_content}</span> </h4>
            </div>
            </div> 

    </div>
  )
}

export default Products