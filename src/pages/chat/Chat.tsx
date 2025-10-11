import { useState } from "react";
import ChatItem from '@components/ChatListItem'
import MessageItem from '@components/Message'
import './Chat.css'



const userData = {
  userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", // user profile image
  userName: "Piyush Kokane",
  userText: "Last seen on Monday",
  userTime: "Today",
  messageCount: "1",
};

const messages = [
  { received: true, text: "Hello worldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworld", time: "7:15 pm" },
  { received: false, text: "Hi! How are you?", time: "7:16 pm" },
  { received: true, text: "I am good, thanks!", time: "7:17 pm" },
  { received: false, text: "Great 😊", time: "7:18 pm" },
];

function Chat() {


  return (
    <div className="chats-pg">
      <div className="chat-bg" />


      <div className="header">
        <ChatItem
          header={true}
          userImage={userData.userImage}
          userName={userData.userName}
          userText={userData.userText}
          userTime={userData.userTime}
          messageCount={userData.messageCount}
        />

        <p>☀︎</p>
        <p>︙</p>
      </div>
      

      <div className="chat-container">
        {messages.map((message, index) => (
          <MessageItem
            key={index}
            received={message.received}
            text={message.text}
            time={message.time}
          />
        ))}
      </div>


      <div className="message-bar-container">
        <div className="message-bar">
        
        </div>
        <div className="send-message">
      
        </div>
      </div>
      
      
    </div>
  );
}

export default Chat
