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
