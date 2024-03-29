import "./nav-item.css";
import { nav_item_props } from "./nav-item-types";
import { useCurrentRoom } from "../../../store/roomContext";
import { flushSync } from "react-dom";

export default function NavItem({ title, id }: nav_item_props) {
  const { room, setRoomContext: setRoom } = useCurrentRoom();
  const isActive = room.title === title;
  const handleClick = () => {
    document.startViewTransition(() => {
      flushSync(() => {
        setRoom(title);
      });
    });
  };

  return (
    <div
      key={id}
      className={`nav-item ${isActive ? "active" : ""}`}
      onClick={handleClick}>
      <div
        className="title"
        style={{
          viewTransitionName: `nav-item-${id}`,
          position: "relative",
          zIndex: 10,
        }}>
        {title}
      </div>
    </div>
  );
}
