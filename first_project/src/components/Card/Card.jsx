import React from 'react'
import './card.css'
import card_img from "../../assets/Image/img.jpg";
import { MdVisibility } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";


const Card = (props) => {
  return (
    <>
    <div className='cards'>
    <div className="card">
    <img src={card_img} alt="image" />
      <h4 className='card_title'>Phyton for Data Science and Machine Learning Bootcamp</h4>
      <div className='card_view'>
      <span>Jose Portilla</span> 
      <h3>
      <MdVisibility />  
      {props.views} 
        </h3>
      </div>
      <div className='card_view'>
       <h3> {props.score}
       <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
       </h3>
       <button className='btn'>Most popular</button>
      </div>
      <div className='card_view'>
      <button className='card_button'>Add too cart <FiShoppingBag /></button>
     <h3>$ {props.price}
     </h3>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Card;