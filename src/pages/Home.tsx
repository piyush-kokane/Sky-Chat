import {  useState, useRef, useEffect  } from "react";
import { debugMode, logedinAs, users, usersChatList } from "@/dataset/dataset"; 
import { useUser } from "@hooks/UserContext.tsx";
import { useTheme } from "@hooks/useTheme";

import ChatItem from '@components/ChatListItem'
import NewChatPanel from '@/panel/NewChat'
import ProfilePanel from '@/panel/Profile'

import '@pages/styles/Home.css'



interface ChatList {
  chatId: string;
  chatImage: string;
  chatName: string;
  text?: string;
  time?: string;
  messageCount?: number;
}

async function fetchChatListFromMongo(username: string): Promise<ChatList[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate server delay
    
    const token = localStorage.getItem("token"); // JWT token
    const res = await fetch("http://localhost:5000/api/chatlist", { // api endpoint
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) throw new Error("Failed to fetch chats");
    const data = await res.json();
    console.log(data);
    return data;
  }
  catch (error) {
    console.error("Error fetching user:", error);
    return [];
  }
}

function Home() {
  const { userData } = useUser();
  const { isDark, toggleTheme } = useTheme();

  const [showNewChatPanel, setNewChatPanel] = useState(false);
  const toggleNewChatPanel = () => setNewChatPanel(!showNewChatPanel)

  const [showProfilePanel, setProfilePanel] = useState(false);
  const toggleProfilePanel = () => setProfilePanel(!showProfilePanel)

  const [chatList, setChatList] = useState<ChatList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = userData?.userName || "piyush_kokane";

    //if (debugMode) {
      setLoading(true);
      fetchChatListFromMongo(username)
        .then((data) => {
          // Add 'You' to chat list
          const youChat = {
            chatId: userData?.userName || "piyush_kokane",
            chatImage: userData?.userImage || "",
            chatName: (userData?.displayName || "") + " (You)",
            text: "This is me !!!",
            time: "Now",
            messageCount: 0,
          };
          setChatList([youChat, ...data]);
        })
        .finally(() => setLoading(false));
    //}
  }, [userData]);





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
            userImage={user.chatImage}
            userName={user.chatId}
            displayName={user.chatName}
            Text={user.text}
            Time={user.time}
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
