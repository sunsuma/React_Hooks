import { useState } from 'react'

function HooksCounter() {
    // destructure
    const [count, setCount] = useState(0)

    function handler1(){
        setCount(count + 1)
    }
    function handler2(){
        setCount(count>0? count - 1 : 0)
    }
    function handler3(){
        setCount(0)
    }
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={handler1}>Increment</button>
        <button onClick={handler2}>Decrement</button>
        <button onClick={handler3}>Reset</button>
      </div>
    </div>
  )
}

export default HooksCounter
