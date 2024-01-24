import Card from './components/Card/Card.jsx';



function Main() {
  const card =
  [
    {
      views:129.758,
      price: 75.8,
      score:4.2,
      button:"Add to cart",
       id: 1,
    },
    {
      views:110.7,
      price: 60,
      score:3,
       id: 2,
    },
    {
      views:105.85,
      price: 40,
      score:2.5,
       id: 3,
    },
  
  ]
  return (
    <>
   <h2>Suggested for you</h2>
     {card.map((item)=>{
     return <Card 
     views={item.views} 
      price={item.price} 
      score={item.score}
      key={item.id} 
      />
      
    })}
      </>
    );
  }
  
  
  export default Main;