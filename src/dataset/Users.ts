export const debugMode = true;



/* Logedin User (Debug only) */
export const logedinAs = "Piyush";  // "Piyush", "Advait", "Onkar"



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