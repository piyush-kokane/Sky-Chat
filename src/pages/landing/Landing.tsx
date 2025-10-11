import icon from "@assets/SkyChat-logo.png"
import './Landing.css'



function Landing() {
  return (
    <div className="landing-pg">
      <div className="landing-bg" />

      <img src={icon} />
      <span> <h1>Sky</h1> <h2>Chat</h2> </span>

      <button>Login</button>
    </div>
  );
}

export default Landing
