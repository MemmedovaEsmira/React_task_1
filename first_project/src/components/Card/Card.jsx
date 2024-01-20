import React from 'react'
import './card.css'
// import card_img from "../Image/img.jpg";

const Card = (props) => {
  return (
    <>
    <div className='cards'>
    <div className="card">
     {/* <img src={img} alt="" /> */}
      <h4 className='card_title'>Phyton for Data Science and Machine Learning Bootcamp</h4>
      <div className='card_view'>
      <span>Jose spanortilla</span>    
      <h3>129,758</h3>
      </div>
      <div className='card_view'>
       <h3>4.2</h3>
       <button className='btn'>Most popular</button>
      </div>
      <div className='card_view'>
      <button className='card_button'>Add too cart</button>
      <h3>75,80$</h3>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Card;