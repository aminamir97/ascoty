const mongoose = require('mongoose');
const teamSchema =  mongoose.Schema({
    avatar: {
        type: String,
        required: true
    },
    name: { 
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true  
    }, 
    brief: {
        type: String,
        required: true
    },
        
});
export default mongoose.models.Team || mongoose.model("Team", teamSchema);