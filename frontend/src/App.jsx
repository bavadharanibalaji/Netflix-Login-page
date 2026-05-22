import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleUser = (evt) => {
    setUser(evt.target.value);
  };

  const handlePass = (evt) => {
    setPass(evt.target.value);
  };

  const check = () => {
    var logindetails = axios.post("http://localhost:5000/login", {
      username: user,
      password: pass,
    });
    logindetails.then((response) => {
      if (response.data == true) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    });
  };

  return (
    <div>
      <nav className="nav">
        <h1 className="title">NETFLIX</h1>
      </nav>

      <main>
        <h1>Unlimited Movies, Shows, and more</h1>
        <h5>starts at ₹149. Cancel at any time.</h5>
        <p>Ready to watch? Please Login here!</p>
      </main>

      <div className="container">
        <div className="input-group">
          <input type="text" name="username" onChange={handleUser} />
          <label htmlFor="username">username</label>
        </div>

        <div className="password-box input-group">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            onChange={handlePass}
          />
          <label htmlFor="password">password</label>
          <span onClick={() => setShowPass(!showPass)} className="eye-icon">
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button onClick={check} disabled={!user.trim() || !pass.trim()}>
          Login →
        </button>
      </div>
    </div>
  );
}

export default App;
 