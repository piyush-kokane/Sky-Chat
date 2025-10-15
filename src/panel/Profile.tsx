import { useState } from "react";
import { useTheme } from "@hooks/useTheme";
import fallbackImg from "@assets/default-user.png"; // fallback image
import ToggleSwitch from "@components/ToggleSwitch";
import './styles/Profile.css'


interface ProfilePanelProp {
  userImage: string;
  userName: string;
  userContact: string;
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

  const { isDark, toggleTheme } = useTheme();

  const [imgError, setImgError] = useState(false);

  const [notifications, setnotifications] = useState(false);


  return (
    <div
      className="profile-panel blur-bg fade-in"
      onClick={onCancelClick}
    >
      <div
        className="slide-in-right"
        onClick={(e) => e.stopPropagation()} // prevent click
      >

        <span onClick={onCancelClick} className="material-symbols-rounded cancel">close</span>


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


        <div className="btn-container">
          <button><span className="material-symbols-rounded">edit</span>Edit profile</button>

          <div className="seperator"/>
          
          <div>
            <h2><span className="material-symbols-rounded">{isDark ? "moon_stars" : "wb_sunny"}</span>Dark Mode</h2>
            <ToggleSwitch onToggle={toggleTheme} />
          </div>

          <div className="seperator"/>

          <div>
            <h2><span className="material-symbols-rounded">notifications</span>Notifications</h2>
            <ToggleSwitch onToggle={() => setnotifications(!notifications)} />
          </div>


          <button className="logout"><span className="material-symbols-rounded">logout</span>Logout</button>
        </div>

      </div>
    </div>
  );
}

export default ProfilePanel
