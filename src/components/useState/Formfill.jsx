import React, { useState } from 'react'

function Formfill() {
    const [name, setName] = useState({firstName:"", lastName:""})
    const [submitted, setSubmitted] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(name);
        setName({firstName:"", lastName:""})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={name.firstName}
            onChange={(e)=>setName({...name,firstName:e.target.value})}
        />
        <input
            type='text'
            value={name.lastName}
            onChange={(e)=>setName({...name,lastName:e.target.value})}
        />
        <button type='submit'>Submit</button>
      </form>

      {
        submitted && (
            <div>
                <h2>FirstName: {submitted.firstName}</h2>
                <h2>LastName: {submitted.lastName}</h2>
            </div>
        )
      }
    </div>
  )
}

export default Formfill
