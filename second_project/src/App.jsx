import Card from './components/Card/Card';



function Main() {
  const card =
  [
    {
     title:'Enhance your potential',
     card_btn:"Start learning with us ",
       id: 1,
    },
    
  
  ]
  return (
    <>
   
     {card.map((item)=>{
     return <Card 
     title={item.title} 
     card_btn={item.card_btn}
      key={item.id} 
      />
      
    })}
      </>
    );
  }
  
  
  export default Main;
