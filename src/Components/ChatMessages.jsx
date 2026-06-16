import { useEffect, useRef } from 'react'
import ChatbotAppLogo from '../assets/ChatBot.png'
import { ChatMessage } from './ChatMessage';

export function ChatMessages({chatMessages}){

  const chatMessagesRef = useRef(null);

  useEffect(()=>{
    // console.log('updated');
    const containerElem = chatMessagesRef.current;
    if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div 
      className = {
        chatMessages.length === 0 
        ? "chat-messages-container-no-chat"
        : "chat-messages-container"
      }
      ref = {chatMessagesRef}
      >
      {
        chatMessages.length === 0
        ? <div
          className="no-chat-text"
        > 
        <img 
          className="website-logo-start"
          src={ChatbotAppLogo}
        />
        <p>Welcome to the chatbot project! Send a message using the textbox below.</p>
        </div>
        : chatMessages.map((chatMessage)=>{
          return (
              <ChatMessage 
                message = {chatMessage.message} 
                sender = {chatMessage.sender} 
                key = {chatMessage.id}
              />
          );
        })
      }
    
    </div>
  );
}

// export default ChatMessages;
