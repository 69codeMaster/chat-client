import { useCurrentRoom } from "../../store/roomContext";
import "./room.css";

export default function Room() {
  const { room } = useCurrentRoom();
  return (
    <div className="room">
      <div className="room-layout">{room.title}</div>
    </div>
  );
}
