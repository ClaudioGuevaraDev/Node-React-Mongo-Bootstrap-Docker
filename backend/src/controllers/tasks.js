import { Task } from "../models";

export const createTask = async (req, res) => {
  const newTask = new Task(req.body);

  const savedTask = await newTask.save();

  return res.status(201).json(savedTask);
};

export const getAllTask = async (req, res) => {
  const tasks = await Task.find({});

  return res.status(200).json(tasks);
};
