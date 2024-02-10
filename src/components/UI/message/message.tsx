import { message_props } from "./message-types";
import "./message.css";

const Message = ({ content, sender, timestamp }: message_props) => {
  return (
    <div className="">{sender + " : " + content + " at " + timestamp}</div>
  );
};

export default Message;
