import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../../models/userModal";
import Activity from "../../models/activityModal";
import { IUserRequest, IUser } from "../../types/User";
import { IActivity, IActivityRequest } from "../../types/Activity";

//desc  Get goals
//@route GET /api/goals
//@access Private
export const getActivities = asyncHandler(
  async (req: IUserRequest, res: Response) => {
    const activities = await Activity.find({ doer: req.user.id });
    res.status(200).json(activities);
  }
);

//@desc Set goal
//@route POST/api/goals
//@access Private
export const setActivities = asyncHandler(
  async (req: IUserRequest, res: Response) => {
    if (!req.body.action) {
      res.status(400);
      throw new Error("Please add an action field");
    }

    const activity = await Activity.create({
      action: req.body.action,
      calories: req.body.calories,
      user: req.user.id,
    });
    res.status(201).json(activity);
  }
);
