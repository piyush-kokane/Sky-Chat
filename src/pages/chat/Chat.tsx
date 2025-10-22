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
  { received: true, text: "Hey! How are you?", time: "7:00 pm", date: "Mon" },
  { received: true, text: "Did you get my email?", time: "7:01 pm", date: "Mon" },
  { received: false, text: "Hi! I'm good, thanks! Just saw it.", time: "7:02 pm", date: "Mon" },
  { received: false, text: "I will reply in a bit.", time: "7:03 pm", date: "Mon" },
  { received: true, text: "No worries 😄", time: "7:04 pm", date: "Mon" },
  { received: false, text: "Also, did you finish the report?", time: "7:05 pm", date: "Tue" },
  { received: true, text: "Yes, I did. Sending it now.", time: "7:06 pm", date: "Tue" },
  { received: true, text: "Check your inbox.", time: "7:06 pm", date: "Tue" },
  { received: true, text: "Let me know if there are any issues.", time: "7:07 pm", date: "Tue" },
  { received: false, text: "Got it, thanks!", time: "7:08 pm", date: "Tue" },
  { received: false, text: "I'll review it tonight.", time: "7:09 pm", date: "Tue" },
  { received: true, text: "Perfect 👍", time: "7:10 pm", date: "Wed" },
  { received: false, text: "By the way, are we meeting tomorrow?", time: "7:11 pm", date: "Wed" },
  { received: true, text: "Yes, at 10 AM in the office.", time: "7:12 pm", date: "Wed" },
  { received: true, text: "Don't forget to bring the documents.", time: "7:13 pm", date: "Wed" },
  { received: false, text: "Sure, will do.", time: "7:14 pm", date: "Thu" },
  { received: true, text: "See you then!", time: "7:15 pm", date: "Thu" },
  { received: false, text: "See you 👋", time: "7:16 pm", date: "Thu" },
  { received: true, text: "Good night!", time: "7:17 pm", date: "Fri" },
  { received: false, text: "Good night 😴", time: "7:18 pm", date: "Fri" },
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

          // Determine position
          const isFirst = !prev || prev.received !== msg.received;
          const isLast = !next || next.received !== msg.received;

          // Parse time to Date object for comparison
          const parseTime = (timeStr: string) => {
            const [h, m] = timeStr.split(":");
            const isPM = timeStr.toLowerCase().includes("pm");
            let hour = parseInt(h);
            if (isPM && hour < 12) hour += 12;
            if (!isPM && hour === 12) hour = 0;
            return new Date(0, 0, 0, hour, parseInt(m));
          };

          // Determine if footer should show
          let showFooter = true;
          if (next && next.received === msg.received) {
            const currentTime = parseTime(msg.time);
            const nextTime = parseTime(next.time);
            const diff = (nextTime.getTime() - currentTime.getTime()) / 1000 / 60; // difference in minutes
            if (diff < 10) showFooter = false; // 10 minutes threshold
          }

          return (
            <MessageItem
              key={i}
              received={msg.received}
              showFooter={showFooter}
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