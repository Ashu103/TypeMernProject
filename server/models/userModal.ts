import { IUser } from "../types/User";
import { model, Schema } from "mongoose";
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

  isOptimized: {
    type: Boolean,
    required: true,
  },
});

//UserSchema.methods.comparePassword = 


//export default model<IUser>("User", UserSchema);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
