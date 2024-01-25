import Card from './components/Card/Card.jsx';
import img from "./assets/Image/img.jpg"
import img2 from "./assets/Image/img2.jpg"
import img3 from "./assets/Image/img3.jpg"

function Main() {
  const card =
  [
    { 
      img: img,
      title:'Phyton for Data Science and Machine Learning Bootcamp',
      text:"Jose Portilla",
      views:129.758,
      price: 75.8,
      score:4.2,
      card_button:"Add to cart",
       id: 1,
    },
    {
      img: img2,
      title:'Lorem ipsum dolor sit amet consectetur adipisicing.',
      text:" Lorem, ipsum dolor.",
      views:110.7,
      price: 60,
      score:3,
      card_button:"Add to cart",
       id: 2,
    },
    {
      img: img3,
      title:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, doloribus?',
      text:"Lorem ipsum dolor sit amet.",
      views:105.85,
      price: 40,
      score:2.5,
      card_button:"Add to cart",
       id: 3,
    },
  
  ]
  return (
    <>
   <h2>Suggested for you</h2>
     {card.map((item)=>{
     return <Card 
     img={item.img}
     title={item.title}
     text={item.text}
     views={item.views} 
      price={item.price} 
      score={item.score}
      card_button={item.card_button}
      key={item.id} 
      />
      
    })}
      </>
    );
  }
  
  
  export default Main;