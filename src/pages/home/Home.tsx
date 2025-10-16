import {  useState, useRef, useEffect  } from "react";
import { useAuth } from "react-oidc-context";
import { useTheme } from "@hooks/useTheme";
import ChatItem from '@components/ChatListItem'
import NewChatPanel from '@/panel/NewChat'
import ProfilePanel from '@/panel/Profile'
import DpDisplay from '@/panel/DpDisplay'
import './Home.css'



 /* ---------------------------------------------------------------------------------------------------- */
/* Logedin User */
const logedinAs = "Onkar";  // "Piyush", "Advait", "Onkar"



 /* ---------------------------------------------------------------------------------------------------- */
/* Interface */

interface UserData {
  userImage: string;
  userName: string;
  userContact: string;
}

interface UsersChatList {
  userImage: string;
  userName: string;
  Text: string;
  Time: string;
  messageCount: number;
}



 /* ---------------------------------------------------------------------------------------------------- */
/* Database */

const users: Record<string, UserData> = {
  Piyush: {
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    userName: "Piyush Kokane",
    userContact: "8806808503",
  },

  Advait: {
    userImage: "https://randomuser.me/api/portraits/men/2.jpg",
    userName: "Advait More",
    userContact: "8806808503",
  },

  Onkar: {
    userImage: "https://randomuser.me/api/portraits/men/3.jpg",
    userName: "Onkar Kale",
    userContact: "8806808503",
  },
};

const usersChatList: Record<string, UsersChatList[]> = {
  Piyush: [
    { userImage: "https://randomuser.me/api/portraits/men/10.jpg", userName: "Dhanush Nehru", Text: "Typing...", Time: "12:15 PM", messageCount: 3 },
    { userImage: "https://randomuser.me/api/portraits/women/20.jpg", userName: "Sarah Lee", Text: "Sent a photo", Time: "Yesterday", messageCount: 2 },
    { userImage: "https://randomuser.me/api/portraits/men/30.jpg", userName: "John Doe", Text: "Online", Time: "10:30 AM", messageCount: 0 },
  ],

  Advait: [
    { userImage: "https://randomuser.me/api/portraits/men/40.jpg", userName: "Michael Scott", Text: "Last seen today", Time: "11:45 AM", messageCount: 1 },
    { userImage: "https://randomuser.me/api/portraits/women/50.jpg", userName: "Pam Beesly", Text: "Sent a file", Time: "Yesterday", messageCount: 4 },
    { userImage: "https://randomuser.me/api/portraits/men/60.jpg", userName: "Jim Halpert", Text: "Online", Time: "09:20 AM", messageCount: 0 },
  ],

  Onkar: [
    { userImage: "https://randomuser.me/api/portraits/men/70.jpg", userName: "Dwight Schrute", Text: "Typing...", Time: "12:00 PM", messageCount: 2 },
    { userImage: "https://randomuser.me/api/portraits/women/80.jpg", userName: "Angela Martin", Text: "Sent a message", Time: "Yesterday", messageCount: 1 },
    { userImage: "https://randomuser.me/api/portraits/men/90.jpg", userName: "Kevin Malone", Text: "Online", Time: "08:45 AM", messageCount: 0 },
  ],
};



 /* ---------------------------------------------------------------------------------------------------- */
/* Data */

const userData: UserData = users[logedinAs];

const _chatList: UsersChatList[] = usersChatList[logedinAs];


// Add 'You' to chat list
const chatList = [
  {
    userImage: userData.userImage,
    userName: userData.userName + " (You)",
    Text: "This is me !!!",
    Time: "Now",
    messageCount: 0,
  },
  ..._chatList,
];








function Home() {
  const auth = useAuth();

  const { isDark, toggleTheme } = useTheme();

  const [showDpPanel, setDpPanel] = useState(false);
  const toggleDpPanel = () => setDpPanel(!showDpPanel)

  const [showNewChatPanel, setNewChatPanel] = useState(false);
  const toggleNewChatPanel = () => setNewChatPanel(!showNewChatPanel)

  const [showProfilePanel, setProfilePanel] = useState(false);
  const toggleProfilePanel = () => setProfilePanel(!showProfilePanel)


  if (auth.isLoading) return <div>Loading...</div>;
  if (!auth.isAuthenticated) return <div>Redirecting...</div>;

  return (
    <div className="home-pg">
      {/* Background */}
      <div className="home-bg" />


      {/* Profile Panel */}
      {showProfilePanel &&
        <ProfilePanel
          userImage={userData?.userImage}
          userName={userData?.userName}
          userContact={auth.user?.profile.email}
          onIconClick={toggleDpPanel}
          onCancelClick={toggleProfilePanel}
        />
      }


      {/* DP Panel */}
      {showDpPanel && 
        <DpDisplay 
          onCancelClick={toggleDpPanel}
          userImage={userData?.userImage}
        />
      }


      {/* New-Chat Panel */}
      {showNewChatPanel && 
        <NewChatPanel
          onCancelClick={toggleNewChatPanel}
        />
      }


      {/* New-Chat Btn */}
      <span className="new-chat material-symbols-rounded" onClick={toggleNewChatPanel}>add_comment</span>
      

      {/* Header */}
      <div className="header">
        <p> <h1>Sky</h1> <h2>Chat</h2> </p>

        <span className="material-symbols-rounded" onClick={toggleTheme}>{isDark ? "wb_sunny" : "moon_stars"}</span>
        <span className="material-symbols-outlined" onClick={toggleProfilePanel}>more_vert</span>
      </div>


      {/* Chats List */}
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

    </div>
  );
}

export default Home
