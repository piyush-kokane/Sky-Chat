import { useState } from "react";
import fallbackImg from "@assets/default-user.png"; // fallback image
import ToggleSwitch from "@components/ToggleSwitch"; // fallback image
import './styles/Profile.css'


interface ProfilePanelProp {
  userImage: string;
  userName: string;
  userContact: string;
  onCancelClick: () => void;
}


function ProfilePanel({
  userImage,
  userName,
  userContact,
  onCancelClick,
}: ProfilePanelProp) {

  const [imgError, setImgError] = useState(false);

  const [notifications, setnotifications] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false);
  const handleToggle = (checked: boolean) => {
    console.log("Switch is:", checked ? "ON" : "OFF");
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

        <span onClick={onCancelClick} className="material-symbols-rounded cancel">close</span>


        <div className="profile-container">
          <img
            src={imgError ? fallbackImg : userImage}
            alt="DP"
            onError={() => setImgError(true)}
          />
          <h1>{userName}</h1>
          <h2>{userContact}</h2>
        </div>


        <div className="btn-container">
          <button><span className="material-symbols-rounded">edit</span>Edit profile</button>

          <div className="seperator"/>
          
          <div>
            <h2>Dark Mode</h2>
            <ToggleSwitch onToggle={handleToggle} />
          </div>

          <div className="seperator"/>

          <div>
            <h2>Notifications</h2>
            <ToggleSwitch onToggle={handleToggle} />
          </div>

          <div className="seperator s-16"/>

          <button className="logout"><span className="material-symbols-rounded">logout</span>Logout</button>
        </div>

      </div>
    </div>
  );
}

export default ProfilePanel
