import { ROOM_TITLES } from "../data/dummy-data";
import SideNav from "./components/side nav/side-nav";
import CurrentRoomProvider from "./sotre/roomContext";
import Room from "./components/pages/room";
import "./App.css";
import TextInput from "./components/UI/text-input/text-input";

function App() {
  return (
    <div className="app">
      <CurrentRoomProvider>
        <div className="page-layout">
          <SideNav room_titles={[...ROOM_TITLES]} />
          <div className="main">
            <Room />
            <TextInput />
          </div>
        </div>
      </CurrentRoomProvider>
    </div>
  );
}

export default App;
