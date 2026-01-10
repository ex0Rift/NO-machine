import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");

  const chat = [
    {text:'blah blah blah', user:true, id:1},
    {text: 'i said some stuff', user:false, id:2}
  ];

  const listChat = chat.map(message =>
    <li
      key={message.id}
      style = {{
        color: message.user ? 'green' : 'blue'
      }}
    >
      {message.text}
    </li>
  );
          

  return (
      <div className='body'>
        <div className='chat-area'>
          <ul className='chat-list'>
            {listChat}
          </ul>
        </div>
        <div className='input-box'>
          <input
            type='text'
            placeholder='Write your message'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button>→</button>
        </div>
      </div>
  )
}

export default App
