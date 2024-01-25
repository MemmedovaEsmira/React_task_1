import React from 'react'
import './card.css'
import img from "../../assets/Image/img.jpg";
import img2 from "../../assets/Image/img2.jpg";
import img3 from "../../assets/Image/img3.jpg";
import { MdVisibility } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";


const Card = (props) => {
  return (
    <>
    <div className='cards'>
    <div className="card">
    <img src= {props.img} alt="image" />
      <h4 className='card_title'>{props.title}</h4>
      <div className='card_view'>
      <span>{props.text} </span> 
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
      <button className='card_button'>{props.card_button} <FiShoppingBag /></button>
     <h3>$ {props.price}
     </h3>
      </div>
    </div>
    </div>
    </>
  )
}

export default Card;