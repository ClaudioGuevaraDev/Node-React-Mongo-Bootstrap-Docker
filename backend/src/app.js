import express from "express";
import morgan from "morgan";
import cors from "cors";

import { config } from "./config";

const app = express();

app.set("port", config.APP_PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

export default app;
