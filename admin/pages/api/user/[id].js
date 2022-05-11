import nc from "next-connect";
import UserModel from "../../../models/UserModal";
import contentDb from "./../../../units/connectDb";
contentDb();
const handler = nc()
  .delete(async (req, res) => {
    const parsed = JSON.parse(req.body);
    try {
      await UserModel.findOneAndDelete({ _id: parsed.id });
      res.send({ res: true, msg: "User deleted successfully" });
    } catch (err) {
      res.send({ res: false, msg: "couldn't delete " });
    }
  })
  .get(async (req, res) => {
    try {
      const users = await UserModel.findOne({});
      res.send(users);
    } catch (err) {}
    res.send("Hello world");
  })
  .put(async (req, res) => {
    //  const parsed = req.body;
    const parsed = JSON.parse(req.body);

    try {
      const user = await UserModel.findByIdAndUpdate({ _id: req.query.id });
      user.firstName = parsed.firstName;
      user.lastName = parsed.lastName;
      user.password = parsed.password;
      user.email = parsed.email;
      await user.save();
      console.log("user edit result :   " + res);
      res.send({ msg: "user updated successfully" });
    } catch (err) {
      res.send({ msg: "user isnt updated successfully" });
      console.log("user edit result :   " + err);
    }
  });

export default handler;
