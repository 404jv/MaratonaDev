const mongoose = require("mongoose")

const DonorSchema = new mongoose.Schema({
    name: String,
    email: String,
    blood: String,
})

module.exports = mongoose.model("Donor", DonorSchema)