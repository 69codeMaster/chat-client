import { v4 } from "uuid";

const ROOM_TITLES = [
  "General",
  "Rust",
  "C++",
  "TypeScript",
  "Go",
  "Python",
] as const;

export type ROOM = {
  id: string;
  title: (typeof ROOM_TITLES)[number];
};

export const ROOMS: ROOM[] = [
  { id: v4(), title: ROOM_TITLES[0] },
  { id: v4(), title: ROOM_TITLES[1] },
  { id: v4(), title: ROOM_TITLES[2] },
  { id: v4(), title: ROOM_TITLES[3] },
  { id: v4(), title: ROOM_TITLES[4] },
  { id: v4(), title: ROOM_TITLES[5] },
];
