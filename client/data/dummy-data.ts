export const ROOM_TITLES = [
  "General",
  "Rust",
  "C++",
  "TypeScript",
  "Go",
  "Python",
] as const;

export type TITLES_TYPE = (typeof ROOM_TITLES)[number];
