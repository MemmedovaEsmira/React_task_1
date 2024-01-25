import Card from './components/Card/Card';



function Main() {
  const card =
  [
    {
     title:'Enhance your potential',
     text:"We make learning engaging & effective, so that  you are ready to achieve your goals",
     card_btn:"Start learning with us ",
       id: 1,
    },
    
  
  ]
  return (
    <>
   
     {card.map((item)=>{
     return <Card 
     title={item.title} 
     text={item.text} 
     card_btn={item.card_btn}
      key={item.id} 
      />
      
    })}
      </>
    );
  }
  
  
  export default Main;
