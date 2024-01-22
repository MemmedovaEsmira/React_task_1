import Card from './components/Card/Card';


// function App() {

//   return (
//     <div>
//     <h2 className='APP'>Suggested for you</h2>
// <Card/>
// <Card/>
// <Card/>
//   </div>
//   )
// }

// export default App;



function Main() {
  const card =
  [
    {
      views:129.758,
      price: 75.8,
      score:4.2,
       id: 1,
    },
    {
      views:110.7,
      price: 60,
      score:3,
       id: 1,
    },
    {
      views:105.85,
      price: 40,
      score:2.5,
       id: 1,
    },
  
  ]
  return (
    <>
   
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