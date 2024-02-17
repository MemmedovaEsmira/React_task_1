import  './counter.css'
// import { useState } from 'react'

// function Counter() {

//     const [count, setCount] = useState(0)

//     const Increment = () => {
//     setCount(count + 1);
//     };

//     const Decrement = () => {
//       if (count <= 0) {
//       }
//       else{

//         setCount(count-1);
//       }
//     };

//     const Reset = () => {
//       setCount(0);
//       };

//     return (
//       <>
//       <div className='App'>
//         <h2>Counter App</h2>
//         <button onClick={Increment}>+</button>
//         <span>{count}</span>
//         <button onClick={Decrement}>-</button>

//         <button className='reset' onClick={Reset}>Reset</button>
//       </div>
  
  
//       </>
//     )
//   }
  
//   export default Counter;



// import React from 'react'

import React, { Component } from 'react'

 class Counter extends Component {
  state={count:0}

  
  Increment=()=>{
    this.setState((prevstate=>({count:prevstate.count+1})))
  }
  
  Decrement=()=>{
    this.setState((prevstate=>({count:prevstate.count-1})))
  }

  Reset=()=>{
    this.setState((prevstate=>({count:prevstate.count=0})))
  }

  render() {
    const {count}=this.state
    return (
      <>
         <div className='App'>
         <h2>Counter App</h2>
         <button className='Increment' type='button' onClick={this.Increment}>+</button>
         <span className='counter'>{count}</span>
         <button className='Decrement' type='button' onClick={this.Decrement}>-</button>

         <button className='reset' type='button' onClick={this.Reset}>Reset</button>
       </div>
      </>
    )
  }
}

export default Counter;

  