import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdef", 10);

const sessions = {};

export function createSession() {
  const id = nanoid();
  sessions[id] = {
    users: [],
  };
  return id;
}

export function getSession({ id }) {
  return sessions[id];
}

export function addUser({ sessionId, name, title }) {
  const userId = nanoid();
  sessions[sessionId].users.push({ id: userId, name, title });
  return sessions[sessionId];
}
