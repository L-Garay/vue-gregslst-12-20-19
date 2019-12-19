import mongoose from "mongoose";

const Schema = mongoose.Schema;

const House = new Schema(
  {
    year: { type: Number, max: 2100, min: 1900, required: true },
    style: { type: String, required: true, maxlength: 20 },
    price: { type: Number, required: true, max: 10000000, min: 10000 },
    bedrooms: { type: Number, required: true, max: 20, min: 1 },
    bathrooms: { type: Number, required: true, max: 20, min: 1 },
    garages: { type: Number, max: 10, min: 0 },
    imgUrl: { type: String, required: true },
    sold: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;
