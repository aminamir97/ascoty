import nc from "next-connect";
import TeamModel from "../../../models/TeamModel";
import connectDb from "../../../units/connectDb";
connectDb();

const handler = nc()
  .get(async (req, res) => {
    try {
      const teams = await TeamModel.find({});
      res.send(teams);
    } catch (err) {}
    res.send("Done");
  })
  .post(async (req, res) => {
    const { avatar, name, title, brief } = req.body;
    const newTeams = new TeamModel({
      avatar,
      name,
      title,
      brief,
    });
    try {
      await newTeams.save();
      res.send(newTeams);
    } catch (err) {}
  });
export default handler;
