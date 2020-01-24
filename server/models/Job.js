import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Job = new Schema(
  {
    company: { type: String, maxlength: 30, min: 2, required: true },
    title: { type: String, required: true, maxlength: 20 },
    salary: { type: Number, required: true, max: 10000000, min: 1000 },
    type: { type: String, required: true, maxlength: 20, min: 1 },
    description: { type: String, required: true, maxlength: 250, minlength: 1 },
    filled: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
