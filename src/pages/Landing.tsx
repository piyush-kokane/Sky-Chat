import { debugMode } from "@hooks/UserContext.tsx";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import icon from "@assets/SkyChat-logo.png"
import '@pages/styles/Landing.css'



function Landing() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignin = () => {
    try {
      debugMode
      ? navigate("/home")
      : auth.signinRedirect()
    }
    catch (error) {
      toast.error("Problem logging in");
    }
  };

  const handleSignup = () => {
    try {
      debugMode
      ? navigate("/home")
      : auth.signinRedirect({ prompt: "signup" })
    }
    catch (error) {
      toast.error("Problem logging in");
    }
  };

  return (
    <div className="landing-pg">
      <div className="landing-bg" />

      <Toaster position="top-center" reverseOrder={false} />

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
