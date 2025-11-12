import { useState, useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { useTheme } from "@hooks/useTheme";

import ChatItem from "@components/ChatListItem";
import MessageItem from "@components/Message";
import DpDisplay from "@/panel/DpDisplay";
import ProfilePanel from "@/panel/Profile";

import sendImg from "@assets/send-btn.svg";
import "@pages/styles/Chat.css";

/* ----------------------------------------------------------- */
/* Helper: Format timestamp into 12hr time */
function formatTime(dateStr: string) {
  const d = new Date(dateStr);
  const h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "pm" : "am";
  return `${h % 12 || 12}:${m} ${ampm}`;
}

/* ----------------------------------------------------------- */
/* Main Chat Component */
export default function Chat() {
  const { username } = useParams(); // recipient (email)
  const location = useLocation(); // navigation state
  const auth = useAuth();
  const { isDark, toggleTheme } = useTheme();

  // State from navigate(`/chat/${userName}`, { state: { ... } })
  const chatUserData = location.state as {
    userImage: string;
    userName: string;
    displayName: string;
    Text: string;
    Time: string;
    messageCount: number;
  } | undefined;

  const [messages, setMessages] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const ws = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [showDpPanel, setDpPanel] = useState(false);
  const [showProfilePanel, setProfilePanel] = useState(false);

  const toggleDpPanel = () => setDpPanel(!showDpPanel);
  const toggleProfilePanel = () => setProfilePanel(!showProfilePanel);

  const currentUser = auth.user?.profile.email;

  /* ----------------------------------------------------------- */
  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ----------------------------------------------------------- */
  // Fetch old messages from AWS DynamoDB via API Gateway
  const fetchOldMessages = async () => {
    if (!currentUser || !username) return;

    try {
      const res = await fetch(
        "https://wdroeztcs7.execute-api.us-east-1.amazonaws.com/dev/getMessages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sender: currentUser, receiver: username }),
        }
      );

      const raw = await res.json();
      let data: any[] = [];

      if (raw.body) {
        try {
          data = JSON.parse(raw.body);
        } catch {
          console.error("Error parsing response body");
        }
      }

      if (Array.isArray(data)) {
        data.sort(
          (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        );
        setMessages(data);
      }
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  /* ----------------------------------------------------------- */
  // Setup WebSocket Connection
  useEffect(() => {
    if (!auth.isAuthenticated || !currentUser) return;

    fetchOldMessages();

    ws.current = new WebSocket(
      `wss://i4chkfla0f.execute-api.us-east-1.amazonaws.com/production/?userId=${currentUser}`
    );

    ws.current.onopen = () => console.log("✅ Connected to SkyChat WebSocket");
    ws.current.onclose = () => console.log("❌ WebSocket disconnected");
    ws.current.onerror = (err) => console.error("⚠️ WebSocket error:", err);

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (
        (data.sender === currentUser && data.receiver === username) ||
        (data.sender === username && data.receiver === currentUser)
      ) {
        setMessages((prev) => [...prev, data]);
      }
    };

    return () => ws.current?.close();
  }, [auth.isAuthenticated, currentUser, username]);

  /* ----------------------------------------------------------- */
  // Send a message via WebSocket
  const sendMessage = () => {
    if (!message.trim() || !ws.current || ws.current.readyState !== WebSocket.OPEN)
      return;

    const payload = {
      sender: currentUser,
      receiver: username,
      message,
      timestamp: new Date().toISOString(),
    };

    ws.current.send(JSON.stringify(payload));
    setMessages((prev) => [...prev, payload]);
    setMessage("");
  };

  /* ----------------------------------------------------------- */
  if (!auth.isAuthenticated) return <div>Please login to continue.</div>;

  /* ----------------------------------------------------------- */
  // UI Render
  return (
    <div className="chats-pg">
      {/* Background */}
      <div className="chat-bg" />

      {/* Profile Panel */}
      {showProfilePanel && <ProfilePanel onCancelClick={toggleProfilePanel} />}

      {/* DP Panel */}
      {showDpPanel && (
        <DpDisplay
          onCancelClick={toggleDpPanel}
          userImage={chatUserData?.userImage || "/default-user.png"}
        />
      )}

      {/* Header */}
      <div className="header">
        <ChatItem
          header={true}
          userImage={chatUserData?.userImage || "/default-user.png"}
          userName={chatUserData?.userName || username?.split("@")[0]}
          displayName={chatUserData?.displayName || username?.split("@")[0]}
          Text={chatUserData?.Text || "Online"}
          Time={chatUserData?.Time || "Now"}
          messageCount={chatUserData?.messageCount || 0}
          onIconClick={toggleDpPanel}
        />

        <span className="material-symbols-rounded" onClick={toggleTheme}>
          {isDark ? "wb_sunny" : "moon_stars"}
        </span>
        <span className="material-symbols-outlined" onClick={toggleProfilePanel}>
          more_vert
        </span>
      </div>

      {/* Chat Messages */}
      <div className="chat-container">
        {messages.map((msg, i) => {
          const isOwn = msg.sender === currentUser;
          return (
            <MessageItem
              key={i}
              received={!isOwn}
              showFooter={true}
              text={msg.message}
              time={formatTime(msg.timestamp)}
              position="single"
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Bar */}
      <div className="message-bar-container">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
          rows={1}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
        />
        <img className="send-message" src={sendImg} onClick={sendMessage} />
      </div>
    </div>
  );
}
