import  './counter.css'
import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    return (
      <>
      <div className='App'>
        <button>Increment</button>
        <span>{count}</span>
        <button>Decrement</button>
      </div>
  
  
      </>
    )
  }
  
  export default Counter

  