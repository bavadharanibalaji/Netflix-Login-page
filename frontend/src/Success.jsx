import "./App.css"
import { FaCheckCircle } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

function Success() {
 
  const navigate = useNavigate()

  return (
    <div className="success-container">

      <div className="success-card">

        <FaCheckCircle className="success-icon" />

        <h1>Login Successful!</h1>

        <p>
          Welcome back to Netflix.
          Enjoy unlimited movies and shows.
        </p>

        <button onClick={()=> navigate("/")}>
          Back to Home Page
        </button>

      </div>

    </div>
  );
}

export default Success;