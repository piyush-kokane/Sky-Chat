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
  userChats?: string[];
}

export const users: Record<string, UserData> = {
  Piyush: {
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    userName: "piyush_kokane",
    displayName: "Piyush Kokane",
    userContact: "8806808503",
    userChats: [ "chat001", "chat001", "chat001" ]
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
  { sender: "UserB", dateTime: "20/10/2025|19:00", text: "Hey! How are you? 😊" },
  { sender: "UserB", dateTime: "20/10/2025|19:01", text: "Did you get my email? 📧" },
  { sender: "piyush_kokane", dateTime: "20/10/2025|19:02", text: "Hi! I'm good, thanks! Just saw it. 👍" },
  { sender: "piyush_kokane", dateTime: "20/10/2025|19:03", text: "I will reply in a bit." },
  { sender: "piyush_kokane", dateTime: "20/10/2025|19:04", text: "Also, did you finish the report? 📄" },

  { sender: "UserB", dateTime: "21/10/2025|08:00", text: "Yes, I finished it last night. 🕘" },
  { sender: "UserB", dateTime: "21/10/2025|08:01", text: "Sending it over now." },
  { sender: "piyush_kokane", dateTime: "21/10/2025|08:05", text: "Great! I'll check it soon. 👀" },

  { sender: "UserB", dateTime: "21/10/2025|09:00", text: "Did you get a chance to look at it?" },
  { sender: "UserB", dateTime: "21/10/2025|09:02", text: "Any feedback?" },
  { sender: "UserB", dateTime: "21/10/2025|09:03", text: "Let me know if there are any issues." },

  { sender: "piyush_kokane", dateTime: "21/10/2025|09:10", text: "Yes, looks good! 😄" },
  { sender: "piyush_kokane", dateTime: "21/10/2025|09:12", text: "Just a small comment in section 3." },

  { sender: "UserB", dateTime: "22/10/2025|10:00", text: "Thanks, I updated it. ✏️" },

  { sender: "piyush_kokane", dateTime: "22/10/2025|10:15", text: "Perfect 👍" },
  { sender: "piyush_kokane", dateTime: "22/10/2025|10:16", text: "Let's send it to the client. 🚀" },
  { sender: "piyush_kokane", dateTime: "22/10/2025|10:17", text: "Are you free for a quick call? ☎️" },

  { sender: "UserB", dateTime: "22/10/2025|10:20", text: "Sure, give me 5 mins. ⏳" },

  { sender: "piyush_kokane", dateTime: "23/10/2025|11:00", text: "Call went well. 😎" },
  { sender: "piyush_kokane", dateTime: "23/10/2025|11:02", text: "Client approved the changes." },

  { sender: "UserB", dateTime: "23/10/2025|11:15", text: "Great! I'll prepare the next draft." },
  { sender: "UserB", dateTime: "23/10/2025|11:16", text: "Should be ready by evening. 🌇" },

  { sender: "piyush_kokane", dateTime: "24/10/2025|12:00", text: "Got it, thanks. 🙏" },
  { sender: "piyush_kokane", dateTime: "24/10/2025|12:05", text: "Looking forward to it." },

  { sender: "UserB", dateTime: "24/10/2025|14:00", text: "Here’s the updated draft. 📝" },
  { sender: "UserB", dateTime: "24/10/2025|14:02", text: "Let me know your thoughts." },
  { sender: "UserB", dateTime: "24/10/2025|14:05", text: "We can finalize it today." },

  { sender: "piyush_kokane", dateTime: "24/10/2025|14:10", text: "Looks perfect! 😍" },
  { sender: "piyush_kokane", dateTime: "24/10/2025|14:12", text: "Thanks for the quick turnaround." },

  { sender: "UserB", dateTime: "25/10/2025|18:00", text: "No problem 😄" },
];


