import { ROOM_TITLES } from "../data/dummy-data";
import SideNav from "./components/side nav/side-nav";
import CurrentRoomProvider from "./sotre/roomContext";
import Room from "./components/pages/room";
import "./App.css";

function App() {
  return (
    <div className="app">
      <CurrentRoomProvider>
        <div className="page-layout">
          <SideNav room_titles={ROOM_TITLES} />
          <Room />
        </div>
      </CurrentRoomProvider>
    </div>
  );
}

export default App;
