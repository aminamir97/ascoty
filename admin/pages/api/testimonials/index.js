import nc from "next-connect";
import Testimonials from "../../../models/Testimonials";
import connectDb from "../../../units/connectDb";

  
import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

connectDb();
const handler = nc()

  .get(async (req, res) => {
    try {
      const testimonials = await Testimonials.find({});
      res.status(200).send(testimonials);
    } catch (err) {
      res.status(403).send(err);
    }
    await cors(req, res)

    res.send(testimonials);
  })
  .post(async (req, res) => {
    const { Review, reviewer, reviewerTitle } = req.body;

    const newTestimonials = new Testimonials({
      Review,
      reviewer,
      reviewerTitle,
    });
    try {
      await newTestimonials.save();
      res.send(newTestimonials);
    } catch (err) {}
  });

export default handler;
