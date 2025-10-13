import { useState } from "react";
import fallbackImg from "@assets/default-user.png"; // fallback image
import './/styles/ProfilePanel.css'


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

  return (
    <div
      className="profile-panel blur-bg fade-in"
      onClick={onCancelClick}
    >
      <div
        className="slide-in-right"
        onClick={(e) => e.stopPropagation()} // prevent click
      >
        <div>
          <span onClick={onCancelClick} className="material-symbols-rounded">close</span>

          <img
            src={imgError ? fallbackImg : userImage}
            alt="DP"
            onError={() => setImgError(true)}
          />

          <h1>{userName}</h1>

          <h2>{userContact}</h2>

        </div>
      </div>
    </div>
  );
}

export default ProfilePanel
