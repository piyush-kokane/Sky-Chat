import { useState } from "react";
import './styles/Message.css'


interface MessageProps {
  received: boolean;
  text: string,
  time: string,
  position?: "first" | "middle" | "last" | "single";
}



function Message({
  received,
  text,
  time,
  position,

}: MessageProps) {


  return (
    <div className={`message-container ${received ? "received" : "sent"} ${position}`}>
      <p className="text">{text}</p>
      <div className="footer">
        <p className="time">{time}</p>
        <p className="tick">✔</p>
      </div>
    </div>
  );
}

export default Message
