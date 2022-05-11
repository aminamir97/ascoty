import nc from "next-connect";
import UserModel from "../../../models/UserModal";
import connectDb from "../../../units/connectDb";
connectDb();
const handler = nc().post(async (req, res) => {
  try {
    const parsed = JSON.parse(req.body);
    const { email, password } = req.body;
    const login = await UserModel.find({
      email: parsed.email,
      password: parsed.password,
    });
    res.send(login.length);
  } catch (err) {
    res.send({ res: false, message: "user not found" });
  }
});

export default handler;
