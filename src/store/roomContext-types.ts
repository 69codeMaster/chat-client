import { ReactNode } from "react";
import { room_props } from "../components/pages/room-types";

export type room_context = {
  room: room_props;
  setContext: React.Dispatch<React.SetStateAction<room_props>>;
};

export type provider_props = {
  children: ReactNode;
};
