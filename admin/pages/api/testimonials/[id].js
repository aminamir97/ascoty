import nc from "next-connect";
import Testimonials from "../../../models/Testimonials";
import contentDb from "./../../../units/connectDb";
contentDb();
const handler = nc()
  .delete(async (req, res) => {
    try {
      await Testimonials.findOneAndDelete({ _id: req.body._id });
      res.send("Blog deleted successfully");
    } catch (err) {}
  })
  .put(async (req, res) => {
    const { Review, reviewer, reviewerTitle, isActive } = req.body;

    try {
      const UbdatedTestimonials = await Testimonials.findOne({
        _id: req.query.id,
      });

      if (!Review && !reviewer && !reviewerTitle) {
        UbdatedTestimonials.isActive = isActive;
        await UbdatedTestimonials.save();
      }

      UbdatedTestimonials.Review = Review;
      UbdatedTestimonials.reviewer = reviewer;
      UbdatedTestimonials.reviewerTitle = reviewerTitle;
      UbdatedTestimonials.isActive = isActive;

      await UbdatedTestimonials.save();

      res.send(UbdatedTestimonials);
    } catch (err) {}
  });
export default handler;
