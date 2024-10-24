import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="navbar">
        <span className="logo">We - Chat</span>
        <div className="user">
          <img src={currentUser.photoURL} alt="User" />
          <span>{currentUser.displayName}</span>
          <button onClick={() => signOut(auth)}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
