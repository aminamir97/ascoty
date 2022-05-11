import nc from "next-connect";
import ProjectModel from "../../../models/ProjectModel";
import connectDb from "../../../units/connectDb";
connectDb();

const handler = nc()
  .get(async (req, res) => {
    try {
      const projects = await ProjectModel.find({});
      res.send(projects);
    } catch (err) {}
    res.send("Done");
  })
  .post(async (req, res) => {
    const { title, image, featuredImage, description } = req.body;
    const newBlog = new ProjectModel({
      title,
      image,
      featuredImage,
      description,
    });
    try {
      await newBlog.save();
      res.send(newBlog);
    } catch (err) {}
  });
export default handler;
