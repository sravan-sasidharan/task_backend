const asyncHandler = require('express-async-handler')
const Job = require('../models/jobModel')
const moment = require('moment');
// access contact


const createJob = asyncHandler(async (req, res) => {


    try {

        const { name,required,hired,applicants,budget,lastDate } = req.body;
        const existingJob = await Job.findOne({ name });
        
        if (existingJob) {
            res.status(401).json({message:'job already exists'})
        }

        const parsedLastDate = moment(lastDate, 'YYYY-MM-DD').toDate();
        const newJob= new Job({
            name,
            required,
            hired,
            applicants,
            budget,
            lastDate: parsedLastDate 
        });
        await newJob.save();

        res.json({ job: newJob });
    } catch (error) {
        res.status(400).json({message:error})
    }
})

const deleteJob = async (req, res) => {
    try {
        const job=await Job.findById(req.params.id);
        if(!job){
            res.status(400).json({message:'job not found'})

        }
        await job.remove();
        res.status(200).json({message:'deleted'})
    } catch (error) {

         res.status(400).json({message:error})
    }
}

const getAllJob =  async (req, res) => {
    try {
        const data = await Job.find()
        res.json(data);
        
    } catch (error) {
        
    }
}

module.exports = {
    createJob,
    deleteJob,
    getAllJob
}