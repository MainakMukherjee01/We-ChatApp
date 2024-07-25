import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="container">
          <Sidebar/>
          <Chat/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
