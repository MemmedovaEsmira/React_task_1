import React from 'react'
import './card.css'
import card_img from "../../assets/image/images.jpeg";
import { BsArrowRight } from "react-icons/bs";

const Card = (props) => {
  return (
    <>
   
    <div className="card">
    <img src={card_img} alt="image" />
   <div className='card_info'>
<h1 className='title'>{props.title}</h1>
<span className='text'> {props.text}</span>
<button className='card_btn'> {props.card_btn} 
<BsArrowRight />
</button>
   </div>
      
    </div>
    
   
    </>
  )
}

export default Card;