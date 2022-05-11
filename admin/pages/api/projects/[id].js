import nc from "next-connect";
import ProjectModel from "../../../models/ProjectModel";
import connectDb from "../../../units/connectDb";
connectDb();

const handler = nc()
  .delete(async (req, res) => {
    try {
      await ProjectModel.findOneAndDelete({ _id: req.body.id });
      res.send("Done Deleted");
    } catch (err) {}
  })
  .put(async (req, res) => {
    try {
      const updateProject = await ProjectModel.findOneAndUpdate({
        _id: req.query.id,
      });
      updateProject.title = req.body.title;
      updateProject.image = req.body.image;
      updateProject.description = req.body.description;
      updateProject.featuredImage = req.body.featuredImage;
      await updateProject.save();
      res.send("team updated successfully");
    } catch (err) {}
  });
export default handler;
