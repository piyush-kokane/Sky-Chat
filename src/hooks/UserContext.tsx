import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { users, debugMode, logedinAs } from "@/dataset/Users";
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
      const name = user.profile.name;

      // *fetch data from database

      // *setUserData
      setUserData({
        userImage: "",
        userName: "",
        displayName: "",
        userContact: "",
      });
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
