import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@hooks/useTheme";

import sendImg from "@assets/send-btn.svg";
import ChatItem from '@components/ChatListItem'
import MessageItem from '@components/Message'
import DpDisplay from '@/panel/DpDisplay'
import ProfilePanel from '@/panel/Profile'

import './Chat.css'





const messages = [
  { received: true, text: "Hello!", time: "7:00 pm", date: "Today" },
  { received: true, text: "Hello!", time: "7:00 pm", date: "Today" },
  { received: true, text: "Hello!", time: "7:00 pm", date: "Today" },
  { received: false, text: "Hi", time: "7:01 pm", date: "Today" },
  { received: false, text: "Hi! How are you?", time: "7:01 pm", date: "Today" },
  { received: false, text: "Hi! How are you?", time: "7:01 pm", date: "Today" },
  { received: true, text: "I'm good, thanks!", time: "7:02 pm", date: "Today" },
  { received: false, text: "Great 😊", time: "7:03 pm", date: "Today" },
  { received: true, text: "Did you finish the project?", time: "7:04 pm", date: "Yesterday" },
  { received: false, text: "Almost done, just final touches.", time: "7:05 pm", date: "Yesterday" },
  { received: true, text: "Awesome!", time: "7:06 pm", date: "Yesterday" },
];



function Chat() { 
  const location = useLocation();

    const chatUserData = location.state as {
    userImage: string;
    userName: string;
    displayName: string;
    Text: string;
    Time: string;
    messageCount: number;
  };

  
  let lastDate = "";


  const { isDark, toggleTheme } = useTheme();


  const [showDpPanel, setDpPanel] = useState(false);
  const toggleDpPanel = () => setDpPanel(!showDpPanel)
  

  const [showProfilePanel, setProfilePanel] = useState(false);
  const toggleProfilePanel = () => setProfilePanel(!showProfilePanel)


  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // auto-resize textarea height
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [message]);





  return (
    <div className="chats-pg">
      {/* Background */}
      <div className="chat-bg" />


      {/* Profile Panel */}
      {showProfilePanel &&
        <ProfilePanel
          onCancelClick={toggleProfilePanel}
        />
      }


      {/* DP Panel */}
      {showDpPanel && 
        <DpDisplay 
          onCancelClick={toggleDpPanel}
          userImage={chatUserData.userImage}
        />
      }


      {/* Header */}
      <div className="header">
        <ChatItem
          header={true}
          userImage={chatUserData.userImage}
          userName={chatUserData.userName}
          displayName={chatUserData.displayName}
          Text={chatUserData.Text}
          Time={chatUserData.Time}
          messageCount={chatUserData.messageCount}
          onIconClick={toggleDpPanel}
        />

        <span className="material-symbols-rounded" onClick={toggleTheme}>{isDark ? "wb_sunny" : "moon_stars"}</span>
        <span className="material-symbols-outlined" onClick={toggleProfilePanel}>more_vert</span>
      </div>


      {/* Chats */}
      {/* 
      <div className="chat-container">
        {messages.map((msg, i) => {
          const prev = messages[i - 1];
          const next = messages[i + 1];
          const isFirst = !prev || prev.received !== msg.received;
          const isLast = !next || next.received !== msg.received;

          const showDate = msg.date !== lastDate;
          lastDate = msg.date;
          
          return (
            <div key={i}>
              {showDate && <div className="date-separator">{msg.date}</div>}

              <MessageItem
                received={msg.received}
                text={msg.text}
                time={msg.time}
              />
            </div>
          );
        })}
      </div>
       */}

      <div className="chat-container">
        {messages.map((msg, i) => {
          const prev = messages[i - 1];
          const next = messages[i + 1];
          const isFirst = !prev || prev.received !== msg.received;
          const isLast = !next || next.received !== msg.received;

          return (
            <MessageItem
              key={i}
              received={msg.received}
              text={msg.text}
              time={msg.time}
              position={isFirst && isLast ? "single" : isFirst ? "first" : isLast ? "last" : "middle"}
            />
          );
        })}
      </div>


      {/* Message Bar */}
      <div className="message-bar-container">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
          rows={1}
        />
        <img className="send-message" src={sendImg} />
      </div>

    </div>
  );
}

export default Chat
