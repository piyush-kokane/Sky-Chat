
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@hooks/useTheme";
import { useUser, debugMode } from "@/hooks/useUser";
import { useAuth } from "react-oidc-context";

import fallbackImg from "@assets/default-user.png"; // fallback image
import ToggleSwitch from "@components/ToggleSwitch";
import DpDisplay from '@/panel/DpDisplay'

import './styles/Profile.css'



/* Interface */
interface ProfilePanelProp {
  onCancelClick: () => void;
}


/* Main Function */
function ProfilePanel({ onCancelClick }: ProfilePanelProp) {
  const auth = useAuth();

  const navigate = useNavigate();

  const { userData, setAuthenticated, setLogoutInProgress } = useUser();

  const { isDark, toggleTheme } = useTheme();

  const [imgError, setImgError] = useState(false);

  const [notifications, setnotifications] = useState(false);

  const [showDpPanel, setDpPanel] = useState(false);
  const toggleDpPanel = () => setDpPanel(!showDpPanel)


  /* Logout function */
  const handleLogout = () => {
    try {
      // Debug mode (bypass OIDC)
      if (debugMode) {
        setLogoutInProgress(true);
        console.log("true")
        localStorage.setItem("loggedin", "false");
        setAuthenticated(false);
        navigate("/")
        return;
      }

      // OIDC normal flow
      const logoutUri = window.location.origin; // http://localhost:5173/
      const cognitoDomain = "https://us-east-1xillukbyv.auth.us-east-1.amazoncognito.com";
      auth.removeUser(); // remove tokens from localStorage
      window.location.href = `${cognitoDomain}/logout?client_id=1sel5r7k42ls80ubk82fsv5uel&logout_uri=${encodeURIComponent(logoutUri)}`;
    }
    catch (error) {
      console.error("Logout failed:", error);
      toast.error("Problem logging out");
    }
  };


  /* --- UI --- */
  return (
    <>
      {/* Toaster */}
      <Toaster position="top-center" reverseOrder={false} />


      {/* DP Panel */}
      {showDpPanel && 
        <DpDisplay 
          userImage={userData?.userImage}
          onCancelClick={toggleDpPanel}
        />
      }


      {/* Profile Panel */}
      <div
        className="profile-panel blur-bg fade-in"
        onClick={onCancelClick}
      >
        <div
          className="slide-in-right"
          onClick={(e) => e.stopPropagation()} // prevent click
        >

          {/* Close */}
          <span onClick={onCancelClick} className="material-symbols-rounded cancel">close</span>


          {/* Profile */}
          <div className="profile-container">
            <img
              src={imgError ? fallbackImg : userData?.userImage || fallbackImg}
              alt="DP"
              onClick={toggleDpPanel}
              onError={() => setImgError(true)}
            />
            <h1>{userData?.displayName}</h1>
            <h2>{userData?.userContact}</h2>
          </div>


          {/* Buttons & Toggles */}
          <div className="btn-container">
            {/* Edit Profile */}
            <button><span className="material-symbols-rounded">edit</span>Edit profile</button>

            <div className="seperator"/>
            
            {/* Theme */}
            <div>
              <h2><span className="material-symbols-rounded">{isDark ? "wb_sunny" : "moon_stars"}</span>Dark Mode</h2>
              <ToggleSwitch
                defaultState={isDark}
                onToggle={toggleTheme}
              />
            </div>

            <div className="seperator"/>

            {/* Notifications */}
            <div>
              <h2><span className="material-symbols-rounded">notifications</span>Notifications</h2>
              <ToggleSwitch onToggle={() => setnotifications(!notifications)} />
            </div>

            {/* Logout */}
            <button className="logout" onClick={handleLogout}>
              <span className="material-symbols-rounded">logout</span>Logout
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default ProfilePanel
