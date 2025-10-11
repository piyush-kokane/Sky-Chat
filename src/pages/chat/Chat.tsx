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
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
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
