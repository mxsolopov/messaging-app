import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = ({ messages }) => {
  const [seed, setSeed] = React.useState("");
  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Dev Help</h2>
        <p>{messages[messages.length - 1]?.message}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
