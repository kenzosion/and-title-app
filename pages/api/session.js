import { createSession } from "../../services/session";

export default (req, res) => {
  const sessionId = createSession();
  res.status(200).json({ sessionId });
};
