
import "./App.css"
import { FaTimesCircle } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

function Fail() {
 
  const navigate = useNavigate()

  return (
    <div className="fail-container">

      <div className="fail-card">

        <FaTimesCircle className="fail-icon" />

        <h1>Login Failed!</h1>

        <p>
          Inavalid Username or Password.
          Please try again.
        </p>

        <button onClick={()=> navigate("/")}>
          Back to Login
        </button>

      </div>

    </div>
  );
}

export default Fail;