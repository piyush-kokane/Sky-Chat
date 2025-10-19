import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fallbackImg from "@assets/default-user.png"; // fallback image
import './styles/ChatListItem.css'


interface ChatListItemProps {
  header: boolean; // style type
  userImage?: string;
  userName?: string;
  displayName?: string;
  Text?: string;
  Time?: string;
  messageCount?: number;
  onIconClick?: () => void;
}


function ChatListItem({
  header,
  userImage,
  userName,
  displayName,
  Text,
  Time,
  messageCount = 0,
  onIconClick,
}: ChatListItemProps) {

  const navigate = useNavigate();

  const [imgError, setImgError] = useState(false);
  
  const handleClick = () => {
    if (!header) {
      navigate(`/chat/${userName}`, {
        state: {
          userImage,
          userName,
          displayName,
          Text,
          Time,
          messageCount,
        },
      });
    }
  };

  return (
    <div 
      className={`chat-item ${header ? "style-header" : "style-list"}`}
      onClick={handleClick}
    >

      {header &&
        <div className="back" onClick={() => navigate("/home")}>
          <p>❮❮</p>
        </div>
      }

      
      <div
        className={`chat-icon ${header ? "style-header" : "style-list"}`}
        onClick={onIconClick}
      >
        <img
          src={(imgError || !userImage) ? fallbackImg : userImage}
          alt="DP"
          onError={() => setImgError(true)}
        />

        <span className="material-symbols-rounded">delete</span>
      </div>


      <div className="chat-info">
        <div>
          <h1>{displayName}</h1>
          {!header && <h2>{Time}</h2> }
        </div>
        <div>
          <h3>{Text}</h3>
          {(!header && messageCount > 0) && <h4>{(messageCount<=99 ? messageCount : "99+")}</h4> }
        </div>
      </div>
      
    </div>
  );
}

export default ChatListItem
