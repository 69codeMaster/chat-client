import { useCurrentRoom } from "../../store/roomContext";
import { getMessages } from "../../services/api";
import Message from "../UI/message/message";
import "./room.css";

export default function Room() {
  const { room } = useCurrentRoom();
  const messages = getMessages(room.id);
  return (
    <div className="room">
      <div className="messages-wrapper">
        {messages.map((message) => (
          <Message key={message.timestamp.toString()} {...message} />
        ))}
      </div>
    </div>
  );
}
