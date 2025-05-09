import React from 'react'
import '../Components/Blog.css'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'

function Blog() {
  return (
    <div className='main_blog'>
        <h1>Latest From Blogs</h1>
        <div className="parent_blog">

        <div className="sub_blog">

            <div className="left_blog">

                <div className="img1">
                <img src={b1} alt="" />
                </div>

                <div className="bcontent">
                <h4>Molestiae ad reiciendis dignissimos</h4>
                <p>alteration in some form, by injected humour, or randomised words<br></br> which don't look even slightly believable.</p>
                <button>Read More</button>
                </div>

            </div>



            <div className="right_blog">

                
            <div className="img2">
                <img src={b2} alt="" />
                </div>

                <div className="bcontent">
                <h4>Molestiae ad reiciendis dignissimos</h4>
                <p>alteration in some form, by injected humour, or randomised words<br></br> which don't look even slightly believable.</p>
                <button>Read More</button>
                </div>
            </div>

        </div>
        </div>
        
        </div>
  )
}

export default Blog