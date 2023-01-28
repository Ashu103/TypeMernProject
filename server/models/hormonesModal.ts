import { model, Schema } from "mongoose";

import mongoose from "mongoose";

import User from "./userModal";

import Activity from "./activityModal";

const HormonesSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a text value"],
  },
  level: {
    type: Number,
    required: [true, "Please add a num value"],
  },
  activitytype: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
      required: true,
    },
  ],

  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});
