import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { debugMode } from "@/dataset/Users"; 
import icon from "@assets/SkyChat-logo.png"
import './Landing.css'



function Landing() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignin = () => {
    debugMode
    ? navigate("/home")
    : auth.signinRedirect()
  };

  const handleSignup = () => {
    debugMode
    ? navigate("/home")
    : auth.signinRedirect({ prompt: "signup" })
  };

  return (
    <div className="landing-pg">
      <div className="landing-bg" />

      <img src={icon} />
      <span> <h1>Sky</h1> <h2>Chat</h2> </span>

      <div className="btn-container">
        <button onClick={handleSignin}>Sign in</button>
        <div>
          <button onClick={handleSignup}>Sign up</button>
          <p>*Creat Account</p>
        </div>
      </div>
    </div>
  );
}

export default Landing
