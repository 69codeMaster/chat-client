import "./nav-item.css";
import { nav_item_props } from "./nav-item-types";
import { useCurrentRoom } from "../../../sotre/roomContext";

export default function NavItem({ title }: nav_item_props) {
  const { setContext } = useCurrentRoom();
  return (
    <div className="nav-item" onClick={() => setContext({ title: title })}>
      {title}
    </div>
  );
}
