import nc from "next-connect";
import UserModel from "../../../models/UserModal";
import connectDb from "../../../units/connectDb";
connectDb();
const handler = nc()
  .get(async (req, res) => {
    try {
      const users = await UserModel.find({});
      res.send({ res: true, message: "correct output", data: users });
      // res.send(users[0].email);
    } catch (err) {
      res.send({ res: false, message: "error happened" });
    }
  })
  .post(async (req, res) => {
    const parsed = JSON.parse(req.body);
    const { firstName, lastName, password, confirmPassword, email } = parsed;
    const newUser = new UserModel({
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
    });
    try {
      await newUser.save();
      res.send({ res: true, msg: "user added success" });
    } catch (err) {
      res.send({ res: false, message: "entered email is already in use" });
    }
  });

export default handler;
