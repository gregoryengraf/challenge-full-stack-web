import cors from "cors";
import express from "express";

import "dotenv/config";
import { router } from "./routes";
import "./database";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3333, () => console.log("server is running on port 3333!"));
