const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    
    name: { type: String, required: true, unique: true },
    required: { type: Number, required: true },
    hired: { type: Number,default:0},
    applicants: { type: Number,default:0},
    budget: { type: Number, required: true },    
    lastDate: { type: Date, required: true }
},
{
    timestamps: true,
})


module.exports = mongoose.model('Job', jobSchema)