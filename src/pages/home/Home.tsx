import {  useState, useRef, useEffect  } from "react";
import ChatItem from '@components/ChatListItem'
import NewChatPanel from '@/panel/NewChat'
import ProfilePanel from '@/panel/Profile'
import './Home.css'



const userData = {
  userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", // user profile image
  userName: "Piyush Kokane",
  userContact: "8806808503",
};


const chatUsers = [
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Piyush Kokane", Text: "Last seen on Monday", Time: "Today", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Dhanush Nehru", Text: "Typing...", Time: "12:15 pm", messageCount: 3 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Sarah Lee", Text: "Sent a photo", Time: "Yesterday", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "John Doe", Text: "Online", Time: "10:30 am", messageCount: 0 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Jane Smith", Text: "Last seen 2 days ago", Time: "09:45 am", messageCount: 5 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Michael Brown", Text: "Sent a video", Time: "Yesterday", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Emily Davis", Text: "Typing...", Time: "11:20 am", messageCount: 4 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "William Johnson", Text: "Hello!", Time: "Today", messageCount: 0 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Olivia Martinez", Text: "Sent a sticker", Time: "09:00 am", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "James Wilson", Text: "Last seen 3 days ago", Time: "Yesterday", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Sophia Taylor", Text: "Online", Time: "08:30 am", messageCount: 0 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Benjamin Anderson", Text: "Sent a photo", Time: "Yesterday", messageCount: 3 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Mia Thomas", Text: "Typing...", Time: "10:15 am", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Alexander Moore", Text: "Hello!", Time: "Today", messageCount: 0 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Charlotte Harris", Text: "Sent a document", Time: "Yesterday", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Daniel Clark", Text: "Last seen 1 hour ago", Time: "Today", messageCount: 5 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Amelia Lewis", Text: "Online", Time: "11:50 am", messageCount: 0 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Ethan Robinson", Text: "Sent a voice note", Time: "Yesterday", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Harper Walker", Text: "Typing...", Time: "10:05 am", messageCount: 3 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Logan Hall", Text: "Hello there!", Time: "Today", messageCount: 0 },
];



function Home() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);
  function toggleTheme(){
    setIsDark(!isDark)
  }

  const [showNewChatPanel, setNewChatPanel] = useState(false);
  function toggleNewChatPanel(){
    setNewChatPanel(!showNewChatPanel)
  }


  const [showProfilePanel, setProfilePanel] = useState(false);
  function toggleProfilePanel(){
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

        <span className="material-symbols-rounded" onClick={toggleTheme}>wb_sunny</span>
        <span className="material-symbols-outlined" onClick={toggleProfilePanel}>more_vert</span>
      </div>


      <div className="chat-list">
        {chatUsers.map((user, index) => (
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
