import { useContext } from "react";
import { IoIosVideocam } from "react-icons/io";
import { TiUserAdd } from "react-icons/ti";
import { MdMoreVert } from "react-icons/md";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  
  const { data } = useContext(ChatContext);

  return (
    <>
      <div className="chat">
        <div className="chatInfo">
          <span>{data.user?.displayName}</span>
          <div className="chatIcons">
            <IoIosVideocam size={22.5} />
            <TiUserAdd size={22.5} />
            <MdMoreVert size={22.5} />
          </div>
        </div>
        <Messages />
        <Input />
      </div>
    </>
  );
};

export default Chat;
