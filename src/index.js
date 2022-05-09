import express from "express";
import cors from "cors";
import { candyBarsRouter } from "./routes/candyBars.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(candyBarsRouter);
app.listen(3000, () => {
  console.log("listening in on http://localhost:3000");
});
