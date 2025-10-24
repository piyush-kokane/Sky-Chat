/* Debug Mode - enable to use test database */
export const debugMode = true;


/* Logedin User (Debug only) */
export const logedinAs = "Piyush";  // "Piyush", "Advait", "Onkar"





 /* ---------------------------------------------------------------------------------------------------- */
/* Users */

export interface UserData {
  userImage: string;
  userName: string;
  displayName: string;
  userContact: string;
}

export const users: Record<string, UserData> = {
  Piyush: {
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    userName: "piyush_kokane",
    displayName: "Piyush Kokane",
    userContact: "8806808503",
  },

  Advait: {
    userImage: "https://randomuser.me/api/portraits/men/2.jpg",
    userName: "advait_more",
    displayName: "Advait More",
    userContact: "8806808503",
  },
  
  Onkar: {
    userImage: "https://randomuser.me/api/portraits/men/3.jpg",
    userName: "onkar_kale",
    displayName: "Onkar Kale",
    userContact: "8806808503",
  },
};





 /* ---------------------------------------------------------------------------------------------------- */
/* User Chat List */

export interface UsersChatList {
  userImage: string;
  userName: string;
  displayName: string;
  Text: string;
  Time: string;
  messageCount: number;
}

export const usersChatList: Record<string, UsersChatList[]> = {
  Piyush: [
    { userImage: "https://randomuser.me/api/portraits/men/10.jpg", userName: "dhanush_nehru", displayName: "Dhanush Nehru", Text: "Typing...", Time: "12:15 PM", messageCount: 3 },
    { userImage: "https://randomuser.me/api/portraits/women/20.jpg", userName: "sarah_lee", displayName: "Sarah Lee", Text: "Sent a photo", Time: "Yesterday", messageCount: 2 },
    { userImage: "https://randomuser.me/api/portraits/men/30.jpg", userName: "john_doe", displayName: "John Doe", Text: "Online", Time: "10:30 AM", messageCount: 0 },
  ],

  Advait: [
    { userImage: "https://randomuser.me/api/portraits/men/40.jpg", userName: "michael_scott", displayName: "Michael Scott", Text: "Last seen today", Time: "11:45 AM", messageCount: 1 },
    { userImage: "https://randomuser.me/api/portraits/women/50.jpg", userName: "pam_beesly", displayName: "Pam Beesly", Text: "Sent a file", Time: "Yesterday", messageCount: 4 },
    { userImage: "https://randomuser.me/api/portraits/men/60.jpg", userName: "jim_halpert", displayName: "Jim Halpert", Text: "Online", Time: "09:20 AM", messageCount: 0 },
  ],

  Onkar: [
    { userImage: "https://randomuser.me/api/portraits/men/70.jpg", userName: "dwight_schrute", displayName: "Dwight Schrute", Text: "Typing...", Time: "12:00 PM", messageCount: 2 },
    { userImage: "https://randomuser.me/api/portraits/women/80.jpg", userName: "angela_martin", displayName: "Angela Martin", Text: "Sent a message", Time: "Yesterday", messageCount: 1 },
    { userImage: "https://randomuser.me/api/portraits/men/90.jpg", userName: "kevin_malone", displayName: "Kevin Malone", Text: "Online", Time: "08:45 AM", messageCount: 0 },
  ],
};





 /* ---------------------------------------------------------------------------------------------------- */
/* User Chats */



/* Group Chats Scema */ /*
interface MessageStatus {
  userId: string;
  dateTime: string;
}

interface Message {
  sender: string;
  dateTime: string;
  text: string;
  deliveredTo?: MessageStatus[];
  seenBy?: MessageStatus[];
}

interface Chat {
  chatId: string;
  participants: string[];
  lastMessage?: Message;
  messages: Message[];
}

export const allChats: Chat[] = [
  {
    chatId: "Chat001",
    participants: ["TestUser_1", "TestUser_2"],
    lastMessage: {sender: "TestUser_1", dateTime: "21/10/2025/6:00 pm", text: "Hey bro! 😎"},
    messages: [
      { 
        sender: "TestUser_1", dateTime: "21/10/2025/6:00 pm",
        text: "Hey bro! 😎",
        seenBy: [
          { userId: "TestUser_2", dateTime: "21/10/2025/6:00 pm" },
        ],
        deliveredTo: [
          { userId: "TestUser_2", dateTime: "21/10/2025/6:00 pm" },
        ]
      },
      { 
        sender: "TestUser_2", dateTime: "21/10/2025/6:00 pm",
        text: "Hello there!",
        seenBy: [
          { userId: "TestUser_1", dateTime: "21/10/2025/6:00 pm" },
        ],
        deliveredTo: [
          { userId: "TestUser_1", dateTime: "21/10/2025/6:00 pm" },
        ]
      },
    ]
  },
];
*/



export const messages = [
  { sender: "UserB", date: "20/10/2025", time: "7:00 pm", text: "Hey! How are you? 😊" },
  { sender: "UserB", date: "20/10/2025", time: "7:01 pm", text: "Did you get my email? 📧" },
  { sender: "piyush_kokane", date: "20/10/2025", time: "7:02 pm", text: "Hi! I'm good, thanks! Just saw it. 👍" },
  { sender: "piyush_kokane", date: "20/10/2025", time: "7:03 pm", text: "I will reply in a bit." },
  { sender: "piyush_kokane", date: "20/10/2025", time: "7:04 pm", text: "Also, did you finish the report? 📄" },

  { sender: "UserB", date: "21/10/2025", time: "8:00 am", text: "Yes, I finished it last night. 🕘" },
  { sender: "UserB", date: "21/10/2025", time: "8:01 am", text: "Sending it over now." },
  { sender: "piyush_kokane", date: "21/10/2025", time: "8:05 am", text: "Great! I'll check it soon. 👀" },

  { sender: "UserB", date: "21/10/2025", time: "9:00 am", text: "Did you get a chance to look at it?" },
  { sender: "UserB", date: "21/10/2025", time: "9:02 am", text: "Any feedback?" },
  { sender: "UserB", date: "21/10/2025", time: "9:03 am", text: "Let me know if there are any issues." },

  { sender: "piyush_kokane", date: "21/10/2025", time: "9:10 am", text: "Yes, looks good! 😄" },
  { sender: "piyush_kokane", date: "21/10/2025", time: "9:12 am", text: "Just a small comment in section 3." },

  { sender: "UserB", date: "22/10/2025", time: "10:00 am", text: "Thanks, I updated it. ✏️" },

  { sender: "piyush_kokane", date: "22/10/2025", time: "10:15 am", text: "Perfect 👍" },
  { sender: "piyush_kokane", date: "22/10/2025", time: "10:16 am", text: "Let's send it to the client. 🚀" },
  { sender: "piyush_kokane", date: "22/10/2025", time: "10:17 am", text: "Are you free for a quick call? ☎️" },

  { sender: "UserB", date: "22/10/2025", time: "10:20 am", text: "Sure, give me 5 mins. ⏳" },

  { sender: "piyush_kokane", date: "23/10/2025", time: "11:00 am", text: "Call went well. 😎" },
  { sender: "piyush_kokane", date: "23/10/2025", time: "11:02 am", text: "Client approved the changes." },

  { sender: "UserB", date: "23/10/2025", time: "11:15 am", text: "Great! I'll prepare the next draft." },
  { sender: "UserB", date: "23/10/2025", time: "11:16 am", text: "Should be ready by evening. 🌇" },

  { sender: "piyush_kokane", date: "24/10/2025", time: "12:00 pm", text: "Got it, thanks. 🙏" },
  { sender: "piyush_kokane", date: "24/10/2025", time: "12:05 pm", text: "Looking forward to it." },

  { sender: "UserB", date: "24/10/2025", time: "2:00 pm", text: "Here’s the updated draft. 📝" },
  { sender: "UserB", date: "24/10/2025", time: "2:02 pm", text: "Let me know your thoughts." },
  { sender: "UserB", date: "24/10/2025", time: "2:05 pm", text: "We can finalize it today." },

  { sender: "piyush_kokane", date: "24/10/2025", time: "2:10 pm", text: "Looks perfect! 😍" },
  { sender: "piyush_kokane", date: "24/10/2025", time: "2:12 pm", text: "Thanks for the quick turnaround." },

  { sender: "UserB", date: "25/10/2025", time: "6:00 pm", text: "No problem 😄" },
];

