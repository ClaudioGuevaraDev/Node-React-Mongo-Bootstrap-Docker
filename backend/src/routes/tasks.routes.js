import { Router } from "express";
import { createTask, getAllTask } from "../controllers/tasks";

const router = Router();

router.post("/", createTask);

router.get("/", getAllTask);

export default router;
