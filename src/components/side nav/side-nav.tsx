import { TITLES_TYPE } from "../../../data/dummy-data.ts";
import { side_nav_props } from "../side nav/side-nav-types";
import NavItem from "../UI/nav-tem/nav-item.tsx";
import "./side-nav.css";

export default function SideNav({ room_titles }: side_nav_props) {
  return (
    <nav className="side-nav">
      <div className="rooms-nav">
        {room_titles.map((title, idx) => (
          <NavItem id={idx} title={title as TITLES_TYPE} />
        ))}
      </div>
    </nav>
  );
}
