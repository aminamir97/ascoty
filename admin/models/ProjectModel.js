const mongoose = require('mongoose');
const projectSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    image: {
        type: String,
        required: true
    },
    featuredImage: {
        type: String,
    },
    description: { 
        type: String,
    }       
});

export default mongoose.models.Project || mongoose.model("Project", projectSchema);