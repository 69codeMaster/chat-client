import { createContext, useContext, useState } from "react";
import { room_context, provider_props } from "./roomContext-types";
import { ROOM as room } from "../../data/dummy-data";
import { ROOMS } from "../../data/dummy-data";

const defaultRoom = ROOMS.find((room) => room.title === "General")!;
const currentRoom = createContext<room_context>({
  room: defaultRoom,
  setRoomContext: () => {},
});

export function useCurrentRoom() {
  return useContext(currentRoom);
}

export default function CurrentRoomProvider({ children }: provider_props) {
  const [room, setRoom] = useState<room>(defaultRoom);

  const value: room_context = {
    room,
    setRoomContext: (room_title) => {
      if (room_title !== room.title) {
        setRoom(ROOMS.find((room) => room.title === room_title)!);
      }
    },
  };

  return <currentRoom.Provider value={value}>{children}</currentRoom.Provider>;
}
