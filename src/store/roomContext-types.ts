import { ReactNode } from "react";
import { ROOM as room } from "./../../data/data-types";

export type room_context = {
  room: room;
  setRoomContext: (roomTitle: room["title"]) => void;
};

export type provider_props = {
  children: ReactNode;
};
