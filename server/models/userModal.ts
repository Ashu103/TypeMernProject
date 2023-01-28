import { IUser } from "../types/User";

import { model, Schema } from "mongoose";

import Activity from "./activityModal";

import bycrpt from "bcrypt";

import mongoose from "mongoose";

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Please add atext alue"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  gender: {
    type: String,
    required: true,
  },
  activities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],

  hormones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hormones",
    },
  ],
  OptimalScore: {
    type: Number,
  },
});

//UserSchema.methods.comparePassword =

//export default model<IUser>("User", UserSchema);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;

/*

// User Schema
const UserSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    activities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
    hormones: { type: Schema.Types.ObjectId, ref: 'Hormones' }
});

// Activity Schema
const ActivitySchema = new Schema({
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// Hormones Schema
const HormonesSchema = new Schema({
    name: { type: String, required: true },
    level: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});
*/
