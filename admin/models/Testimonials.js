const mongoose = require("mongoose");
const testimonialsSchema = mongoose.Schema({
   Review: {
    type: String,
    required: true,
  },
  reviewer: {
    type: String,
    required: true,
  },
  reviewerTitle: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default:true,
    required: true,
  },
});
export default mongoose.models.Testimonials || mongoose.model("Testimonials", testimonialsSchema);