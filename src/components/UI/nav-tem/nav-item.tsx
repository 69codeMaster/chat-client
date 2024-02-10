import "./nav-item.css";
import { nav_item_props } from "./nav-item-types";
import { useCurrentRoom } from "../../../sotre/roomContext";
import { flushSync } from "react-dom";

export default function NavItem({ title, id }: nav_item_props) {
  const { room, setContext } = useCurrentRoom();
  const isActive = room.title === title;
  const handleClick = () => {
    document.startViewTransition(() => {
      flushSync(() => {
        setContext({ title: title });
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
