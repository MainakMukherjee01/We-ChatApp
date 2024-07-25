import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">We - Chat</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
            {err && <span>Oops! Something went wrong.</span>}
          </form>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
