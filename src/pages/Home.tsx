import {  useState, useRef, useEffect  } from "react";
import { logedinAs, users, usersChatList } from "@/dataset/dataset"; 
import { useUser } from "@hooks/UserContext.tsx";
import { useTheme } from "@hooks/useTheme";
import { useAuth } from "react-oidc-context";

import ChatItem from '@components/ChatListItem'
import NewChatPanel from '@/panel/NewChat'
import ProfilePanel from '@/panel/Profile'

import '@pages/styles/Home.css'





function Home() {
  const auth = useAuth();

  const { userData } = useUser();

  const [chatList, setChatList] = useState<any[]>([]);


  useEffect(() => {
    if (!auth.isAuthenticated) return;

    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://uqtbl5jiaf.execute-api.us-east-1.amazonaws.com/prod/users"
        );
        const data = await res.json();

        let usersList: any[] = [];
        if (typeof data.body === "string") {
          usersList = JSON.parse(data.body);
        } else if (Array.isArray(data.body)) {
          usersList = data.body;
        }

        // Remove the logged-in user
        usersList = usersList.filter((u) => u.email !== userData?.userName);

        const formattedList = [
          {
            userImage: userData?.userImage,
            userName: userData?.userName,
            displayName: userData?.displayName + " (You)",
            Text: "This is me !!!",
            Time: "Now",
            messageCount: 0,
          },
          ...usersList.map((u) => {
            const email = u.email;
            let userImage = "@assets/default-user.png"; // default image

            if (email === "kaleonkaar@gmail.com")
              userImage = "https://randomuser.me/api/portraits/men/1.jpg";
            else if (email === "onkar.kale@mitwpu.edu.in")
              userImage = "https://randomuser.me/api/portraits/men/2.jpg";
            else if (email === "pjkokane21@gmail.com")
              userImage = "https://randomuser.me/api/portraits/men/3.jpg";
            else if (email === "moreadvait21@gmail.com")
              userImage = "https://randomuser.me/api/portraits/men/4.jpg";

            return {
              userImage: u.userImage || userImage,
              userName: email,
              displayName: email?.split("@")[0],
              Text: email,
              Time: "Now",
              messageCount: 0,
            };
          }),
        ];


        setChatList(formattedList);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };

    fetchUsers();
  }, [auth.isAuthenticated, userData]);


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
