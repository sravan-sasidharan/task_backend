const express = require('express')
const { createJob, deleteJob, getAllJob } = require('../controllers/jobControllers')
const router = express.Router()
router.post('/add', createJob)
router.delete('/:id', deleteJob)
router.get('/get', getAllJob)

module.exports = router