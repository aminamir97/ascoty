const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  noOfComments: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});
export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
