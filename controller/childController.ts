import { Request, Response } from "express";
import childSchema from "../model/childSchema";

export const registerChild = async (req: Request, res: Response) => {
  try {
    const { name, age, email, password, Class } = req.body;

    const child = await childSchema.create({
      name,
      age,
      email,
      password,
      Class,
    });

    return res.status(200).json({
      message: "Success",
      data: child,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occured",
      data: error,
    });
  }
};

export const loginChild = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const getuser = await childSchema.findOne({ email, password });

    if (!getuser) {
      return res.status(404).json({
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      message: "Login success",
      data: getuser,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occured",
      data: error,
    });
  }
};

export const getonechild = async (req: Request, res: Response) => {
  try {
    const { childId } = req.params;

    const getuser = await childSchema.findById(childId);

    if (!getuser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Login success",
      data: getuser,
    });
  } catch (error) {
    res.status(404).json({
      message: "An error occured",
      data: error,
    });
  }
};
