import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useAuth } from "react-oidc-context";

interface UserData {
  userImage: string;
  userName: string;
  displayName: string;
  userContact: string;
  email?: string;
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
    if (!isAuthenticated && !user) {
      // You can modify this to fetch from your backend instead
      setUserData({
        userImage: "https://randomuser.me/api/portraits/men/1.jpg",
        userName: "piyush_kokane",
        displayName: "Piyush Kokane",
        userContact: "8806808503",
        email: "user@gmail.com",
      });
    }
    else {
      setUserData(null);
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
