import { getSession } from "../../../services/session";

export default (req, res) => {
  const { sessionId } = req.query;
  const session = getSession({ id: sessionId });
  res.status(200).json({ session });
};
