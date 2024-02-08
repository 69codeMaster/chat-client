import { createContext, useContext, useState } from "react";
import { room_context, provider_props } from "./roomContext-types";
import { room_props } from "../components/pages/room-types";

const currentRoom = createContext<room_context>({
  room: {
    title: "General",
  },
  setContext: () => {},
});

export function useCurrentRoom() {
  return useContext(currentRoom);
}

export default function CurrentRoomProvider({ children }: provider_props) {
  const [context, setContext] = useState<room_props>({
    title: "General",
  });

  const value: room_context = {
    room: context,
    setContext: setContext,
  };

  return <currentRoom.Provider value={value}>{children}</currentRoom.Provider>;
}
