import React, { useState } from 'react'

function PreviousCount() {
    const initialCount = 0;
    const [count, setCount] = useState(0)

    const IncrementFive = () => {
        for(let i = 0; i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }

  return (
    <div>
      <h2>{count}</h2>
      <button type='button' onClick={()=>setCount(count + 1)}>Increment</button>
      <button type='button' onClick={()=>setCount(count + 1)}>Decrement</button>
      <button type='button' onClick={()=>setCount(initialCount)}>Reset</button>
      <button type='button' onClick={IncrementFive}>IncrementFive</button>
    </div>
  )
}

export default PreviousCount
