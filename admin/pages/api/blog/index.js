import nc from "next-connect";
import BlogModel from "../../../models/BlogModel";
import connectDb from "../../../units/connectDb";
connectDb();
const handler = nc()
  .get(async (req, res) => {
    try {
      const blogs = await BlogModel.find({});
      res.send(blogs);
    } catch (err) {}
    res.status(200).send("Hello world");
  })
  .post(async (req, res) => {
    const { title, image, date, categoryName, noOfComments, isActive } =
      req.body;
    const newBlog = new BlogModel({
      title,
      image,
      date,
      categoryName,
      noOfComments,
      isActive,
    });
    try {
      await newBlog.save();
      res.status(200).send(newBlog);
    } catch (err) {}
  });

export default handler;
