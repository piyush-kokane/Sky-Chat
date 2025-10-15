import {  useState, useRef, useEffect  } from "react";
import { useTheme } from "@hooks/useTheme";
import ChatItem from '@components/ChatListItem'
import NewChatPanel from '@/panel/NewChat'
import ProfilePanel from '@/panel/Profile'
import './Home.css'



const userData = {
  userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", // user profile image
  userName: "Piyush Kokane",
  userContact: "8806808503",
};


const chatList_Piyush = [
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Piyush Kokane", Text: "Last seen on Monday", Time: "Today", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Dhanush Nehru", Text: "Typing...", Time: "12:15 pm", messageCount: 3 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Sarah Lee", Text: "Sent a photo", Time: "Yesterday", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "John Doe", Text: "Online", Time: "10:30 am", messageCount: 0 },
 ]

const chatList_Advait = [
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Piyush Kokane", Text: "Last seen on Monday", Time: "Today", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Dhanush Nehru", Text: "Typing...", Time: "12:15 pm", messageCount: 3 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Sarah Lee", Text: "Sent a photo", Time: "Yesterday", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "John Doe", Text: "Online", Time: "10:30 am", messageCount: 0 },
]

const chatList_Onkar = [
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Piyush Kokane", Text: "Last seen on Monday", Time: "Today", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Dhanush Nehru", Text: "Typing...", Time: "12:15 pm", messageCount: 3 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Sarah Lee", Text: "Sent a photo", Time: "Yesterday", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "John Doe", Text: "Online", Time: "10:30 am", messageCount: 0 },
]

 const chatList = chatList_Piyush;



function Home() {
  const { isDark, toggleTheme } = useTheme();


  const [showNewChatPanel, setNewChatPanel] = useState(false);
  const toggleNewChatPanel = () => {
    setNewChatPanel(!showNewChatPanel)
  }


  const [showProfilePanel, setProfilePanel] = useState(false);
  const toggleProfilePanel = () => {
    setProfilePanel(!showProfilePanel)
  }


  return (
    <div className="home-pg">
      <div className="home-bg" />

      {showProfilePanel &&
        <ProfilePanel
          userImage={userData.userImage}
          userName={userData.userName}
          userContact={userData.userContact}
          onCancelClick={toggleProfilePanel}
        />
      }


      <div className="header">
        <p> <h1>Sky</h1> <h2>Chat</h2> </p>

        <span className="material-symbols-rounded" onClick={toggleTheme}>{isDark ? "wb_sunny" : "moon_stars"}</span>
        <span className="material-symbols-outlined" onClick={toggleProfilePanel}>more_vert</span>
      </div>


      <div className="chat-list">
        {chatList.map((user, index) => (
          <ChatItem
            key={index}
            header={false}
            userImage={user.userImage}
            userName={user.userName}
            Text={user.Text}
            Time={user.Time}
            messageCount={user.messageCount}
          />
        ))}

        <div className="footer">
          <span className="material-symbols-outlined">lock</span>
          <p>Your personal messages are</p>
          <p>end-to-end encrypted</p>
        </div>

      </div>


      <span className="new-chat material-symbols-rounded" onClick={toggleNewChatPanel}>add_comment</span>
      
      {showNewChatPanel && <NewChatPanel onCancelClick={toggleNewChatPanel}/>}

    </div>
  );
}

export default Home
