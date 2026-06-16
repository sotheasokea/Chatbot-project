import { useState} from 'react'
import ChatbotAppLogo from './assets/ChatBot.png'

import './App.css'
import { ChatInput } from './Components/ChatInput'
import { ChatMessage } from './Components/ChatMessage'
import { ChatMessages } from './Components/ChatMessages'


function App(){
  const [chatMessages, setChatMessages] = useState([])
  return (
    <div className = "app-container">
      <ChatMessages chatMessages = {chatMessages}/>
      <ChatInput
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  );
}

export default App
