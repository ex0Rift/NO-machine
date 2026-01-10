import { useState } from 'react'
import './App.css'



function App() {
  type chat = {text: string; user: boolean; id: number;};

  const [value, setValue] = useState("");

  const [chat, setChat] = useState<chat[]>([

  ]);

  const listChat = chat.map(message =>
    <li
      key={message.id}
      style = {{
        color: message.user ? '#ffffff' : '#b6b6b6ff'
      }}
    > 
      {message.user ? 'You : ' : 'Bot : '}
      {message.text}
    </li>
  );

function SendMessage(input:string){
  const newItem = {text:input,user:true,id:Object.keys(chat).length+1};

  setChat([...chat,newItem]);

  setValue("");
}
          

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
            onKeyDown={(e) => {if (e.key === "Enter"){SendMessage(value)}}}
            onChange={e => setValue(e.target.value)}
          />
          <button onClick={() => SendMessage(value)}>→</button>
        </div>
      </div>
  )
}

export default App
