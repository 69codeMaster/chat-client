import { ROOMS } from "../data/dummy-data";
import SideNav from "./components/side nav/side-nav";
import CurrentRoomProvider from "./store/roomContext";
import Room from "./components/pages/room";
import "./App.css";
import TextInput from "./components/UI/message-input/message-input";

function App() {
  return (
    <div className="app">
      <CurrentRoomProvider>
        <div className="page-layout">
          <SideNav room_titles={ROOMS.map((room) => room.title)} />
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
