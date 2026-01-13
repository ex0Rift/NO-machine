import { useEffect, useState } from 'react'
import './App.css'

function App() {
  type chat = {text: string; user: boolean; id: number;};

  const [value, setValue] = useState("");
  const [chat, setChat] = useState<chat[]>([

  ]);

  //creates the map for the chat list for displaying messages on the screen
  const listChat = chat.map(message =>
    <li
      key={message.id}
      style = {{
        //colour depending on which user
        color: message.user ? '#ffffff' : '#b6b6b6ff'
      }}
    > 
      {message.user ? 'You : ' : 'Jim : '}
      {message.text}
    </li>
  );

  //this component makes the text scroll in the div when there is too much to display in the screen
  useEffect(() => {
    const container = document.querySelector('.chat-area');
    if (container) container.scrollTop = container.scrollHeight;
  }, [chat]);

//this function happens every time a message is sent
function SendMessage(input:string){
  if (input === "")return;//if empty does nothing

  //adds the useres text to the list
  const newItem = {text:input,user:true,id:Object.keys(chat).length+1};
  setChat([...chat,newItem]);
  
  //fetch from the NO-AS-A-SERVICE API for a response
  fetch("https://naas.isalman.dev/no")
    .then(r => r.json())
    .then(response => {
      //adds response to the chat list
      const newItem_bot = {text:response.reason,user:false,id:Object.keys(chat).length+2};
      setChat(prevChat => [...prevChat,newItem_bot]);
    });
  //empites the user input box
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
