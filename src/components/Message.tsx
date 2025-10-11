import { useState } from "react";
import './styles/Message.css'


interface MessageProps {
  received: boolean;
  text: string,
  time: string,
}



function Message({
  received,
  text,
  time,

}: MessageProps) {


  return (
    <div className={`message-container ${received ? "received" : ""}`}>
      <p className="text">{text}</p>
      <div className="footer">
        <p className="time">{time}</p>
        <p className="tick">✓</p>
      </div>
    </div>
  );
}

export default Message
