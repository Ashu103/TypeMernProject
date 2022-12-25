import { Request } from "express";

import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isOptimized: boolean;
}

export interface IUserRequest extends Request {
  user?: any;
}
