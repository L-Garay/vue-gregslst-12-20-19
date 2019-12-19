import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Job = new Schema(
  {
    Company: { type: String, maxlength: 30, min: 2, required: true },
    Title: { type: String, required: true, maxlength: 20 },
    Salary: { type: Number, required: true, max: 10000000, min: 1000 },
    Type: { type: String, required: true, maxlength: 20, min: 1 },
    Description: { type: String, required: true, maxlength: 250, minlength: 1 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
