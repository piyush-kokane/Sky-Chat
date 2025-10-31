import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { debugMode, logedinAs } from "@/dataset/dataset";
import { useAuth } from "react-oidc-context";



interface UserData {
  userImage: string;
  userName: string;
  displayName: string;
  userContact: string;
  userChats: string[];
}

async function fetchUserFromMongo(): Promise<UserData | null> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate server delay

    const _username = "piyush_kokane"
    const res = await fetch(`http://localhost:5000/api/users/${_username}`);
    if (!res.ok) throw new Error("Failed to fetch user");
    const data = await res.json();
    return data;
  }
  catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}


interface UserContextType {
  loading: boolean;
  userData: UserData | null;
  setUserData: (data: UserData) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);


  useEffect(() => {
    // Debug Mode - load user from test database
    if (debugMode) {
      setLoading(true);
      fetchUserFromMongo()
        .then((data) => setUserData(data))
        .finally(() => setLoading(false));
        
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
        userChats: [""],
      });
    }
    else {
      setUserData(null); // remove user data on logout
    }
  }, [isAuthenticated, user]);



  return (
    <UserContext.Provider value={{ loading, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
