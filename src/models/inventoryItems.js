import mongoose from "mongoose";
import { type } from "os";

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, "Item Name Missing"],
  },

  dateIn: {
    type: { String, required: [true, "Date Recieved Missing"] },
  },

  dateExpire: {
    type: { String, required: [true, "Expire Date Missing"] },
  },

  itemCategory: {
    type: String,
    enum: ["Boader", "Cloths", "Drop", "Dose", "Electronic", "Injection"],
  },

  itemUnit: {
    type: String,
    enum: ["Piece", "Set", "Strip", "Tin", "Kit", "Cartoon", "Box"],
  },

  itemProgram: {
    type: String,
    enum: ["HIV", "Covid19", "Essential", "Nutrition", "Malaria", "WASH", "RH"],
  },

  openingBalance: Number,
});
