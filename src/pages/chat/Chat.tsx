import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@hooks/useTheme";
import { messages } from "@/dataset/Users";

import sendImg from "@assets/send-btn.svg";
import ChatItem from '@components/ChatListItem'
import MessageItem from '@components/Message'
import DpDisplay from '@/panel/DpDisplay'
import ProfilePanel from '@/panel/Profile'

import './Chat.css'





// Format date label: Today, Yesterday, Monday, or original date
function formatChatDate(dateStr: string) {
  const [day, month, year] = dateStr.split("/").map(Number);
  const msgDate = new Date(year, month - 1, day);
  const today = new Date();

  // Remove time for accurate date comparison
  const clean = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const diffTime = clean(today).getTime() - clean(msgDate).getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";

  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Within the last 7 days
  if (diffDays < 7 && diffDays > 1) {
    return weekDays[msgDate.getDay()];
  }

  // Otherwise, show full date
  return dateStr;
}



// Parse time to Date object for comparison
function parseTime(timeStr: string) {
  const [h, m] = timeStr.split(":");
  const isPM = timeStr.toLowerCase().includes("pm");
  let hour = parseInt(h);
  if (isPM && hour < 12) hour += 12;
  if (!isPM && hour === 12) hour = 0;
  return new Date(0, 0, 0, hour, parseInt(m));
};



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
      <div className="chat-container">
        {messages.map((msg, i) => {
          const prev = messages[i - 1];
          const next = messages[i + 1];

          // Determine position
          const isFirst = !prev || prev.received !== msg.received;
          const isLast = !next || next.received !== msg.received;

          // Determine if date should show
          const showDate = msg.date !== lastDate;
          lastDate = msg.date;
          
          // Determine if footer should show
          let showFooter = true;
          if (next && next.received === msg.received) {
            const currentTime = parseTime(msg.time);
            const nextTime = parseTime(next.time);
            const diff = (nextTime.getTime() - currentTime.getTime()) / 1000 / 60; // difference in minutes
            if (diff < 10) showFooter = false; // 10 minutes threshold
          }

          return (
            <div className="flex flex-col" key={i}>
              {showDate && <div className="date-separator">{formatChatDate(msg.date)}</div>}

              <MessageItem
                received={msg.received}
                showFooter={showFooter}
                text={msg.text}
                time={msg.time}
                position={isFirst && isLast ? "single" : isFirst ? "first" : isLast ? "last" : "middle"}
              />
            </div>
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