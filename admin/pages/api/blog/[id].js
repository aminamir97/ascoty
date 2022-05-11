import nc from "next-connect";
import BlogModel from "../../../models/BlogModel";
import contentDb from "./../../../units/connectDb";
contentDb();
const handler = nc()
  .delete(async (req, res) => {
    try {
      await BlogModel.findOneAndDelete({ _id: req.body.id });
      res.send("Blog deleted successfully");
    } catch (err) {}
  })
  .put(async (req, res) => {
    try {
      const updatedBlog = await BlogModel.findOne({ _id: req.query.id });
      updatedBlog.title = req.body.title;
      updatedBlog.image = req.body.image;
      updatedBlog.date = req.body.date;
      updatedBlog.categoryName = req.body.categoryName;
      updatedBlog.noOfComments = req.body.noOfComments;
      updatedBlog.isActive = req.body.isActive;
      await updatedBlog.save();
      res.status(201).send("blog updated successfully");
    } catch (err) {}
  });
export default handler;
