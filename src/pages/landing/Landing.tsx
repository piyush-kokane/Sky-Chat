import { useNavigate } from "react-router-dom";
import icon from "@assets/SkyChat-logo.png"
import './Landing.css'



function Landing() {
  const navigate = useNavigate();

  const handleSignin = () => {
    localStorage.setItem("login", "true");
    navigate("/home")

    /* window.location.href = "https://signin.com"; */
  };

  const handleSignup = () => {
    window.location.href = "https://signup.com";
  };

  return (
    <div className="landing-pg">
      <div className="landing-bg" />

      <img src={icon} />
      <span> <h1>Sky</h1> <h2>Chat</h2> </span>

      <div className="btn-container">
        <button onClick={handleSignin}>Sign in</button>
        <button onClick={handleSignup}>Sign up</button>
      </div>
    </div>
  );
}

export default Landing
