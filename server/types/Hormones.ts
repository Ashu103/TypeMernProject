import { Request } from "express";

import { Document } from "mongoose";

import { IUser } from "./User";

export interface IHormones extends Document {
  name: String;
  count: Number;
  individual: IUser;
}

export interface IHormonesRequest extends Request {
  hormones?: any;
}
