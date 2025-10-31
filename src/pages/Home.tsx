import {  useState, useRef, useEffect  } from "react";
import { logedinAs, users, usersChatList } from "@/dataset/dataset"; 
import { useUser } from "@hooks/UserContext.tsx";
import { useTheme } from "@hooks/useTheme";

import ChatItem from '@components/ChatListItem'
import NewChatPanel from '@/panel/NewChat'
import ProfilePanel from '@/panel/Profile'

import '@pages/styles/Home.css'





function Home() {
  const { userData } = useUser();

  const _chatList = usersChatList[logedinAs];


  // Add 'You' to chat list
  const chatList = [
    {
      userImage: userData?.userImage,
      userName: userData?.userName,
      displayName: userData?.displayName + " (You)",
      Text: "This is me !!!",
      Time: "Now",
      messageCount: 0,
    },
    ..._chatList,
  ];

  const { isDark, toggleTheme } = useTheme();

  const [showNewChatPanel, setNewChatPanel] = useState(false);
  const toggleNewChatPanel = () => setNewChatPanel(!showNewChatPanel)

  const [showProfilePanel, setProfilePanel] = useState(false);
  const toggleProfilePanel = () => setProfilePanel(!showProfilePanel)


  return (
    <div className="home-pg">
      {/* Background */}
      <div className="home-bg" />


      {/* Profile Panel */}
      {showProfilePanel &&
        <ProfilePanel
          onCancelClick={toggleProfilePanel}
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
        <div className="flex w-full"> <h1>Sky</h1> <h2>Chat</h2> </div>

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
            displayName={user.displayName}
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
