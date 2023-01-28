import { IActivity } from "../types/Activity";

import { model, Schema } from "mongoose";

import mongoose from "mongoose";

import User from "./userModal";

const ActivitySchema: Schema = new Schema({
  action: {
    type: String,
    required: [true, "Please add a text value"],
  },
  duration: {
    //Instead of calories i should write hormones here
    type: Number,
    required: [true, "Please add a  numeric value"],
  },
  doer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  hormone: [
    {
      type: Schema.Types.ObjectId,
      ref: "Hormone",
    },
  ],
});

const Activity = mongoose.model<IActivity>("Activity", ActivitySchema);

export default Activity;
