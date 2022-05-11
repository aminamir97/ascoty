import nc from "next-connect";
import TeamModel from "../../../models/TeamModel";
import connectDb from "../../../units/connectDb";
connectDb();

const handler = nc()
  .delete(async (req, res) => {
    try {
      await TeamModel.findOneAndDelete({ _id: req.body.id });
      res.send("Done Deleted");
    } catch (err) {}
  })
  .put(async (req, res) => {
    try {
      const updateTeam = await TeamModel.findOneAndUpdate({
        _id: req.query.id,
      });
      updateTeam.avatar = req.body.avatar;
      updateTeam.name = req.body.name;
      updateTeam.title = req.body.title;
      updateTeam.brief = req.body.brief;
      await updateTeam.save();
      res.send("team updated successfully");
    } catch (err) {}
  });
export default handler;
