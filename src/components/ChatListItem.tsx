import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fallbackImg from "@assets/default-user.png"; // fallback image
import './styles/ChatListItem.css'


interface ChatListItemProps {
  header: boolean; // style type
  userImage: string;
  userName: string;
  userText: string;
  userTime: string;
  messageCount: number;
  onIconClick?: () => void;
}


function ChatListItem({
  header,
  userImage,
  userName,
  userText,
  userTime,
  messageCount,
  onIconClick,
}: ChatListItemProps) {

  const navigate = useNavigate();

  const [imgError, setImgError] = useState(false);
  

  return (
    <div className={`chat-item ${header ? "style-header" : "style-list"}`}>
      {header &&
        <div className="back" onClick={() => navigate("/home")}>
          <p>❮❮</p>
        </div>
      }

      <img
        className={`chat-icon ${header ? "style-header" : "style-list"}`}
        src={imgError ? fallbackImg : userImage}
        alt="DP"
        onError={() => setImgError(true)}
        onClick={onIconClick}
      />

      <div className="chat-info">
        <div>
          <h1>{userName}</h1>
          {!header && <h2>{userTime}</h2> }
        </div>
        <div>
          <h3>{userText}</h3>
          {(!header && messageCount > 0) && <h4>{(messageCount<=99 ? messageCount : "99+")}</h4> }
        </div>
      </div>
    </div>
  );
}

export default ChatListItem
