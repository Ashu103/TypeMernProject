import { Request } from "express";

import { Document } from "mongoose";

import { IUser } from "./User";

export interface IActivity extends Document {
  action: String;
  calories: Number;
  doer: IUser;
  
}

export interface IActivityRequest extends Request {
  activity?: any;
}
