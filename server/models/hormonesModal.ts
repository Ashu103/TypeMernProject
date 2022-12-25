import { model, Schema } from "mongoose";

import mongoose from "mongoose";

import User from "./userModal";

const HormonesSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a text value"],
  },
  count: {
    type: String,
    required: [true, "Please add a num value"],
  },
});
