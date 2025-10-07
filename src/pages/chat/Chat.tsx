import { useState } from "react";
import './Chat.css'
import fallbackImg from "@assets/default-user.png"; // local fallback image


function Chat() {
  const [imgError, setImgError] = useState(false);

  const userImage = "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg"; // user profile image
  const userName = "Piyush Kokane";
  const userText = "Last seen on monday";
  const userTime = "Today";
  const messageCount = "1";

  return (
    <>
      <div className="header-chats-pg">
        <div className="profile-cmp">
          <img
            className="profile-icon"
            src={imgError ? fallbackImg : userImage}
            alt="User profile"
            onError={() => setImgError(true)}
          />

          <div className="profile-info">
            <div>
              <h1>{userName}</h1>
              <h2>{userTime}</h2>
            </div>
            <div>
              <h3>{userText}</h3>
              <h4>{messageCount}</h4>
            </div>
          </div>
        </div>
      </div>


      <div className="chats-container">
      
      </div>


      <div className="message-container">
        <div className="message-bar">
        
        </div>
          <div className="send-message">
        
          </div>
      </div>
    </>
  );
}

export default Chat
