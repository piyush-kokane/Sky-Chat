import { useNavigate } from "react-router-dom";
import './styles/NewChat.css'



/* Interface */
interface NewChatProp {
  onCancelClick: () => void;
}


/* Main Function */
function NewChat({
  onCancelClick,
}: NewChatProp) {

  const navigate = useNavigate();
  
  function handleStartChat() {
    navigate("/chat")
  }

  return (
    <div
      className="new-chat-panel blur-bg fade-in"
      onClick={onCancelClick}
    >
      <div
        className="pop-up"
        onClick={(e) => e.stopPropagation()} // prevent click
      >
        <h1>New Chat</h1>
        
        <input
          type="text"
          placeholder="Enter User ID..."
        />

        <div className="btn-container">
          <button onClick={onCancelClick}>Cancel</button>
          <button onClick={handleStartChat}>Start Chat</button>
        </div>
      </div>
    </div>
  );
}

export default NewChat
