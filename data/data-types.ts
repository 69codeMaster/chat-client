import { Message } from "../src/components/UI/message/message-types";

export const ROOM_TITLES = [
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
  messages: Message[];
};
