import { useEffect, useState} from 'react'
import ChatbotAppLogo from './assets/ChatBot.png'
import { ChatInput } from './Components/ChatInput'
import { ChatMessage } from './Components/ChatMessage'
import { ChatMessages } from './Components/ChatMessages'
import {Chatbot} from 'supersimpledev'
import './App.css'

function App(){
  const [chatMessages, setChatMessages] = useState([])
  useEffect(()=>{
    Chatbot.addResponses({
      "what time is it": function(){
          return (
            `It is ${new Date().toLocaleDateString()}`
          );
      }, 
      "my name": "Nice to meet you!",
      "Where are you from?": "I am from the internet",
      "what is your name?": "I'm just a chatbot! No name for me yet!",
      "what do you like": "I like helping people and answering questions!",
      "what is your favorite anime?": "One piece🤩",
      "what anime do you like": "One piece 🤩",
      "who build you?": "I was built by SuperSimpleDev, with additional features and design by Mr. Sothea",
      "who made you": "I was built by SuperSimpleDev, with additional features and design by Mr. Sothea",
      "who created you?": "I was built by SuperSimpleDev, with additional features and design by Mr. Sothea",
      "who are you?": "I am a chatbot built by SuperSimpleDev, with additional features and design by Mr. Sothea",
      "favorite anime character": "Monkey D. Luffy",
      "favorite anime": "One piece 🤩",
      "How to learn to build the chatbot like you": "Learn how to build me at SuperSimpleDev's YouTube channel!",
      "how to build you": "Learn how to build me at SuperSimpleDev's YouTube channel!",
      "how old are you": function(){
        const createdDate = new Date("2026-06-16");
        const today = new Date();
        const diffTime = today - createdDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return `I was created on 16 June 2026, so I am ${diffDays} days old!`;
      },
      "your age": function(){
        const createdDate = new Date("2026-06-16");
        const today = new Date();
        const diffTime = today - createdDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return `I was created on 16 June 2026, so I am ${diffDays} days old!`;
      }
    }, []);
  })
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
