import { useState } from "react";
import { PaperPlaneSharp } from "react-ionicons";
import "./message-input.css";

const TextInput: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="send-area">
      <div className="input-and-icon">
        <input
          className="input"
          type="text"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          placeholder="Message"
        />
        <PaperPlaneSharp
          onClick={() => alert(value)}
          color={
            value.trim() === "" ? "var(--nav-color)" : "var(--primary-100)"
          }
          style={{ cursor: value.trim() !== "" ? "pointer" : "" }}
        />
      </div>
    </div>
  );
};

export default TextInput;
