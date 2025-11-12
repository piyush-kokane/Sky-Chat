import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { users, debugMode, logedinAs } from "@/dataset/dataset";
import { useAuth } from "react-oidc-context";



interface UserData {
  userImage: string;
  userName: string;
  displayName: string;
  userContact: string;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);


  useEffect(() => {
    // Debug Mode - load user from test database
    if (debugMode) {
      const selectedUser = users[logedinAs];
      setUserData(selectedUser || null);
      return; // prevents executing Normal Mode
    }

    // Normal Mode - fetch from database
    if (isAuthenticated && user) {
      const email = user.profile.email || "";
      let userImage = "@assets/default-user.png"; // default image

      if (email === "kaleonkaar@gmail.com")
        userImage = "https://randomuser.me/api/portraits/men/1.jpg";
      else if (email === "onkar.kale@mitwpu.edu.in")
        userImage = "https://randomuser.me/api/portraits/men/2.jpg";
      else if (email === "pjkokane21@gmail.com")
        userImage = "https://randomuser.me/api/portraits/men/3.jpg";
      else if (email === "moreadvait21@gmail.com")
        userImage = "https://randomuser.me/api/portraits/men/4.jpg";


      // *setUserData
      setUserData({
        userImage: userImage,
        userName: email || "",
        displayName: email?.split("@")[0] || "",
        userContact: email || "",
      });
      setLoading(false)
    }
    else {
      setUserData(null); // remove user data on logout
    }
  }, [isAuthenticated, user]);



  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
