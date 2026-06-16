import { useState} from 'react'
import LoadingSpinner from '../assets/loading-spinner.gif'
import { Chatbot } from 'supersimpledev'

export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');
  function saveInputText(event){
    setInputText(event.target.value);
    // console.log(inputText);
  }
  function handleKeyDown(event){
    if(event.key === "Enter"){
      SendMessage();
    }else if(event.key === "Escape"){
      setInputText('');
    }
  }
  async function SendMessage(){
    const newMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender : "user",
        id : crypto.randomUUID()
      }
    ];

    // check if the user input anything in the input box
    // const checkMessage = (inputText.trim()).length;
    // if(checkMessage === 0){
    //   return;
    // }
    
    setChatMessages(newMessage);
    
    setInputText('');
    setChatMessages([
      ...newMessage,
      {
        message: <img 
          className="gif-loading"
          src={LoadingSpinner}
        />,
        sender : "robot",
        id : crypto.randomUUID()
      }
    ]);
    const respond = await Chatbot.getResponseAsync(inputText);
    console.log(respond);

    setChatMessages([
      ...newMessage,
      {
        message: respond,
        sender : "robot",
        id : crypto.randomUUID()
      }
    ]);
  }
  return (
    <div className = "chat-input-container">
      <input 
        placeholder = "Send a message to Chatbot" 
        size = "30" 
        onChange = {saveInputText}
        value = {inputText}
        onKeyDown = {handleKeyDown}
        className = "chat-input"
      />
      <button
        onClick = {SendMessage}
        className = "send-button"
      >Send</button>
    </div>
  );
}
