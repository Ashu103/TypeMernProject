import { IActivity } from "../types/Activity";

import { model, Schema } from "mongoose";

import mongoose from "mongoose";

import User from "./userModal";

const ActivitySchema: Schema = new Schema({
  action: {
    type: String,
    required: [true, "Please add a text value"],
  },
  calories: {
    type: Number,
    required: [true, "Please add a  numeric value"],
  },
  doer: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required:true
  },
});

const Activity = mongoose.model<IActivity>("Activity", ActivitySchema);

export default Activity;
