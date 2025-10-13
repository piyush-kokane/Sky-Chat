import {  useState, useRef, useEffect  } from "react";
import fallbackImg from "@assets/default-user.png"; // fallback image
import sendImg from "@assets/send-btn.svg";
import ChatItem from '@components/ChatListItem'
import MessageItem from '@components/Message'
import './Chat.css'



const userData = {
  userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", // user profile image
  userName: "Piyush Kokane",
  userText: "Last seen on Monday",
  userTime: "Today",
  messageCount: 1,
};

const messages = [
  { received: true, text: "Hello!", time: "7:00 pm" },
  { received: false, text: "Hi! How are you?", time: "7:01 pm" },
  { received: true, text: "I'm good, thanks!", time: "7:02 pm" },
  { received: false, text: "Great 😊", time: "7:03 pm" },
  { received: true, text: "Did you finish the project?", time: "7:04 pm" },
  { received: false, text: "Almost done, just final touches.", time: "7:05 pm" },
  { received: true, text: "Awesome!", time: "7:06 pm" },
  { received: false, text: "Yes, will send it by evening.", time: "7:07 pm" },
  { received: true, text: "Cool, looking forward to it.", time: "7:08 pm" },
  { received: false, text: "Thanks 😎", time: "7:09 pm" },
  { received: true, text: "Are we meeting tomorrow?", time: "7:10 pm" },
  { received: false, text: "Yes, at 10 am?", time: "7:11 pm" },
  { received: true, text: "Perfect!", time: "7:12 pm" },
  { received: false, text: "Do you need me to bring anything?", time: "7:13 pm" },
  { received: true, text: "No, just yourself 😄", time: "7:14 pm" },
  { received: false, text: "Haha, sure!", time: "7:15 pm" },
  { received: true, text: "See you tomorrow then.", time: "7:16 pm" },
  { received: false, text: "See you 👋", time: "7:17 pm" },
  { received: true, text: "Good night!", time: "7:18 pm" },
  { received: false, text: "Good night 😴", time: "7:19 pm" },
];



function Chat() { 
  const [imgError, setImgError] = useState(false);


  const [showDp, setShowDp] = useState(false);
  function toggleDp(){
    showDp
    ? setShowDp(false)
    : setShowDp(true)
  }


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
      <div className="chat-bg" />


      <div className="header">
        <ChatItem
          header={true}
          userImage={userData.userImage}
          userName={userData.userName}
          userText={userData.userText}
          userTime={userData.userTime}
          messageCount={userData.messageCount}
          onIconClick={toggleDp}
        />

        <span className="material-symbols-rounded">wb_sunny</span>
        <span className="material-symbols-outlined">more_vert</span>
      </div>


      {showDp &&
        <div className="dp-display-panel blur-bg-5 fade-in">
          <div className="pop-up">
            <img
              src={imgError ? fallbackImg : userData.userImage}
              alt="DP"
              onError={() => setImgError(true)}
            />
            <span onClick={toggleDp} className="material-symbols-rounded">close</span>
          </div>
        </div>
      }

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
