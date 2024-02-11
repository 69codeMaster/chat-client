import { Message } from "../components/UI/message/message-types";
import { ROOMS } from "../../data/dummy-data";

export function addMessage(message: Message, roomID: string) {
  ROOMS.find((room) => room.id === roomID)?.messages.push(message);
}

export function getMessages(roomID: string): Message[] {
  return ROOMS.find((room) => room.id === roomID)!.messages;
}
