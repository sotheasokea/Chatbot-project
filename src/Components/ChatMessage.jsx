import UserIcon from '../assets/users-icon.png'
import RobotIcon from '../assets/robot-icon.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender, time}) {
  return (
    <div className = {
      sender === "robot"
      ? "chat-message-robot"
      : "chat-message-user"
    }>
      {
        sender === "robot" && (
          <img src = {RobotIcon} className = "chat-message-profile"/>
      )}
      <div className = "chat-message-text">
        {message}
        <p className='time-send-message'>{time}</p>
      </div>
      {
        sender === "user" && (
          <img src = {UserIcon} className = "chat-message-profile"/>
      )}
    </div>
  );
}
