import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");

  return (
      <div>
        <div>
          <h1>the text chat goes here {value}</h1>
        </div>
        <div className='input-box'>
          <input
            type='text'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
      </div>
  )
}

export default App
