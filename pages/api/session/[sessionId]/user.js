import { addUser } from "../../../../services/session";

export default (req, res) => {
  if (req.method === "POST") {
    const { name, title } = req.body;
    const { sessionId } = req.query;
    const session = addUser({ sessionId, name, title });
    res.status(200).json({ session });
  } else {
    throw new Error("not implemented");
  }
};
