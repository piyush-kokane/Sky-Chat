import { useState } from "react";
import './styles/Message.css'



const message = {
  text: "Hello world",
  time: "7:15 pm",
};

function Message() {


  return (
    <div className="message-container">
      <p className="Text">{message.text}</p>
      <p className="Time">{message.time}</p>
    </div>
  );
}

export default Message
