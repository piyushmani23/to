import React from 'react'
import '../Components/Latest_product.css'
import Products from '../Components/Products.jsx'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'

function Latest_product() {
  return (
    <div className='main_products'>
        <h1>Latest Products</h1>

        <div className="products">

            <div className="sub_products">
                <Products button="New" imgs={p1}  brand= "Nickalus"card_content="$43"/>
                <Products button="New" imgs={p2}  brand= "Nickalus"card_content="$43"/>
                <Products button="New" imgs={p3}  brand= "Nickalus"card_content="$43"/>
                <Products button="New" imgs={p4}  brand= "Nickalus"card_content="$43"/>

                <Products button="New" imgs={p5}  brand= "Nickalus"card_content="$43"/>
                <Products button="New" imgs={p6}  brand= "Nickalus"card_content="$43"/>
                <Products button="New" imgs={p6}  brand= "Nickalus"card_content="$43"/>
                {/* <Products button="New" imgs={p7}  brand= "Nickalus"card_content="$43"/> */}
                <Products button="New" imgs={p8}  brand= "Nickalus"card_content="$43"/>
            </div>

            
            <button className='bts'>View All Product</button>
        </div>
      
    </div>
  )
}

export default Latest_product