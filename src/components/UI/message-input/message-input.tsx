import { useEffect, useState, useRef } from "react";
import { PaperPlaneSharp } from "react-ionicons";
import { useCurrentRoom } from "../../../store/roomContext";
import { addMessage } from "../../../services/api";
import "./message-input.css";

const TextInput: React.FC = () => {
  const { room } = useCurrentRoom();
  const [message, setMessage] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    if (message.trim() === "") return;
    console.log(`sending message : ${message}`);
    addMessage(
      { content: message, sender: "you", timestamp: Date.now() },
      room.id
    );
    setMessage("");
  };

  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        // event.preventDefault();
        sendMessage();
      }
    });

    return () => {
      document.removeEventListener("keyup", sendMessage);
    };
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
    console.log("roomchange");
    setMessage("");
  }, [room]);

  return (
    <div className="send-area">
      <div className="input-and-icon">
        <input
          className="input"
          type="text"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          placeholder="Message"
          ref={inputRef}
        />
        <PaperPlaneSharp
          onClick={sendMessage}
          color={
            message.trim() === "" ? "var(--nav-color)" : "var(--primary-100)"
          }
          style={{ cursor: message.trim() !== "" ? "pointer" : "" }}
        />
      </div>
    </div>
  );
};

export default TextInput;
