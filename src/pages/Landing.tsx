import { debugMode, useUser } from "@/hooks/useUser";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import icon from "@assets/SkyChat-logo.png"
import '@pages/styles/Landing.css'



function Landing() {
  const auth = useAuth();
  const { setAuthenticated } = useUser();
  const navigate = useNavigate();


  /* Signin function */
  const handleSignin = async () => {
    try {
      // Debug mode (bypass OIDC)
      if (debugMode) {
        localStorage.setItem("loggedin", "true");
        setAuthenticated(true);
        navigate("/home")
        return;
      }

      // OIDC normal flow
      await auth.signinRedirect();
    }
    catch (error) {
      console.error("Signin failed:", error);
      toast.error("Problem logging in");
    }
  };


  /* Signup function */
  const handleSignup = async () => {
    try {
      if (debugMode) {
        localStorage.setItem("loggedin", "true");
        setAuthenticated(true);
        navigate("/home")
        return;
      }

      // OIDC normal flow
      auth.signinRedirect({ prompt: "signup" })
    }
    catch (error) {
      console.error("Signup failed:", error);
      toast.error("Problem logging in");
    }
  };



  /* --- UI --- */
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
