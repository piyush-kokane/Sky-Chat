import { useState } from "react";
import fallbackImg from "@assets/default-user.png"; // fallback image
import './styles/DpDisplay.css'


interface DpDisplayProp {
  userImage?: string;
  onCancelClick: () => void;
}


function DpDisplay({
  userImage,
  onCancelClick,
}: DpDisplayProp) {

  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="dp-display-panel blur-bg-5 fade-in"
      onClick={onCancelClick}
    >
      <div
        className="pop-up"
        onClick={(e) => e.stopPropagation()} // prevent click
      >
        <img
        className={imgError ? "p-8" : ""}
          src={(imgError || !userImage) ? fallbackImg : userImage}
          alt="DP"
          onError={() => setImgError(true)}
        />
        <span onClick={onCancelClick} className="material-symbols-rounded">close</span>
      </div>
    </div>
  );
}

export default DpDisplay
