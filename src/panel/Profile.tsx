import { useState } from "react";
import { useTheme } from "@hooks/useTheme";
import { useAuth } from "react-oidc-context";
import fallbackImg from "@assets/default-user.png"; // fallback image
import ToggleSwitch from "@components/ToggleSwitch";
import './styles/Profile.css'


interface ProfilePanelProp {
  userImage?: string;
  userName?: string;
  userContact?: string;
  onIconClick?: () => void;
  onCancelClick: () => void;
}


function ProfilePanel({
  userImage,
  userName,
  userContact,
  onIconClick,
  onCancelClick,
}: ProfilePanelProp) {

  const auth = useAuth();

  const { isDark, toggleTheme } = useTheme();

  const [imgError, setImgError] = useState(false);

  const [notifications, setnotifications] = useState(false);


  const handleLogout = () => {
    const logoutUri = "http://localhost:5173/";
    const cognitoDomain = "https://us-east-1xillukbyv.auth.us-east-1.amazoncognito.com";
    auth.removeUser(); // remove tokens from localStorage
    window.location.href = `${cognitoDomain}/logout?client_id=1sel5r7k42ls80ubk82fsv5uel&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  return (
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
            src={imgError ? fallbackImg : userImage}
            alt="DP"
            onClick={onIconClick}
            onError={() => setImgError(true)}
          />
          <h1>{userName}</h1>
          <h2>{userContact}</h2>
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
  );
}

export default ProfilePanel
