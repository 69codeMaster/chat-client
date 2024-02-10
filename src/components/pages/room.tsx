import { useCurrentRoom } from "../../store/roomContext";

import "./room.css";

export default function Room() {
  const { room } = useCurrentRoom();
  // const { messages } = useGetMessages();
  return <div className="room">{room.title}</div>;
}
