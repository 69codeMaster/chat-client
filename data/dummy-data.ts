import { v4 } from "uuid";
import { ROOM, ROOM_TITLES } from "./data-types";
export const ROOMS: ROOM[] = [
  {
    id: v4(),
    title: ROOM_TITLES[0],
    messages: [
      {
        content: `hello room ${ROOM_TITLES[0]}`,
        sender: "JOE",
        timestamp: Date.now(),
      },
      {
        content: "Hello, how are you?",
        sender: "Alice",
        timestamp: 1644603031000,
      },
      {
        content: "I'm doing well, thanks! How about you?",
        sender: "Bob",
        timestamp: 1644603091000,
      },
      {
        content: "I'm good too. Let's catch up sometime.",
        sender: "Alice",
        timestamp: 1644603600000,
      },
      {
        content: "Sure, I'd love that!",
        sender: "Bob",
        timestamp: 1644603901000,
      },
      {
        content: "Great! How about this weekend?",
        sender: "Alice",
        timestamp: 1644604200000,
      },
    ],
  },
  {
    id: v4(),
    title: ROOM_TITLES[1],
    messages: [
      {
        content: `hello room ${ROOM_TITLES[1]}`,
        sender: "JOE",
        timestamp: Date.now(),
      },
      {
        content: "Hello, how are you?",
        sender: "Alice",
        timestamp: 1644603031000,
      },
      {
        content: "I'm doing well, thanks! How about you?",
        sender: "Bob",
        timestamp: 1644603091000,
      },
      {
        content: "I'm good too. Let's catch up sometime.",
        sender: "Alice",
        timestamp: 1644603600000,
      },
      {
        content: "Sure, I'd love that!",
        sender: "Bob",
        timestamp: 1644603901000,
      },
      {
        content: "Great! How about this weekend?",
        sender: "Alice",
        timestamp: 1644604200000,
      },
    ],
  },
  {
    id: v4(),
    title: ROOM_TITLES[2],
    messages: [
      {
        content: `hello room ${ROOM_TITLES[2]}`,
        sender: "JOE",
        timestamp: Date.now(),
      },
      {
        content: "Hello, how are you?",
        sender: "Alice",
        timestamp: 1644603031000,
      },
      {
        content: "I'm doing well, thanks! How about you?",
        sender: "Bob",
        timestamp: 1644603091000,
      },
      {
        content: "I'm good too. Let's catch up sometime.",
        sender: "Alice",
        timestamp: 1644603600000,
      },
      {
        content: "Sure, I'd love that!",
        sender: "Bob",
        timestamp: 1644603901000,
      },
      {
        content: "Great! How about this weekend?",
        sender: "Alice",
        timestamp: 1644604200000,
      },
    ],
  },
  {
    id: v4(),
    title: ROOM_TITLES[3],
    messages: [
      {
        content: `hello room ${ROOM_TITLES[3]}`,
        sender: "JOE",
        timestamp: Date.now(),
      },
      {
        content: "Hello, how are you?",
        sender: "Alice",
        timestamp: 1644603031000,
      },
      {
        content: "I'm doing well, thanks! How about you?",
        sender: "Bob",
        timestamp: 1644603091000,
      },
      {
        content: "I'm good too. Let's catch up sometime.",
        sender: "Alice",
        timestamp: 1644603600000,
      },
      {
        content: "Sure, I'd love that!",
        sender: "Bob",
        timestamp: 1644603901000,
      },
      {
        content: "Great! How about this weekend?",
        sender: "Alice",
        timestamp: 1644604200000,
      },
    ],
  },
  {
    id: v4(),
    title: ROOM_TITLES[4],
    messages: [
      {
        content: `hello room ${ROOM_TITLES[4]}`,
        sender: "JOE",
        timestamp: Date.now(),
      },
      {
        content: "Hello, how are you?",
        sender: "Alice",
        timestamp: 1644603031000,
      },
      {
        content: "I'm doing well, thanks! How about you?",
        sender: "Bob",
        timestamp: 1644603091000,
      },
      {
        content: "I'm good too. Let's catch up sometime.",
        sender: "Alice",
        timestamp: 1644603600000,
      },
      {
        content: "Sure, I'd love that!",
        sender: "Bob",
        timestamp: 1644603901000,
      },
      {
        content: "Great! How about this weekend?",
        sender: "Alice",
        timestamp: 1644604200000,
      },
    ],
  },
  {
    id: v4(),
    title: ROOM_TITLES[5],
    messages: [
      {
        content: `hello room ${ROOM_TITLES[5]}`,
        sender: "JOE",
        timestamp: Date.now(),
      },
      {
        content: "Hello, how are you?",
        sender: "Alice",
        timestamp: 1644603031000,
      },
      {
        content: "I'm doing well, thanks! How about you?",
        sender: "Bob",
        timestamp: 1644603091000,
      },
      {
        content: "I'm good too. Let's catch up sometime.",
        sender: "Alice",
        timestamp: 1644603600000,
      },
      {
        content: "Sure, I'd love that!",
        sender: "Bob",
        timestamp: 1644603901000,
      },
      {
        content: "Great! How about this weekend?",
        sender: "Alice",
        timestamp: 1644604200000,
      },
    ],
  },
];
