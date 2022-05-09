import { Router } from "express";
import {
  getAllCandyBars,
  getOneCandyBar,
  updateOneCandyBar,
  deleteOneCandyBar,
  createACandyBar,
} from "../services/candyBar.service";

export const candyBarsRouter = Router();

candyBarsRouter.get("/candyBars", async (req, res) => {
  const candyBars = await getAllCandyBars();
  res.send(candyBars);
});

candyBarsRouter.get("/candyBars/:name", async (req, res) => {
  const candyBars = await getOneCandyBar(req.params.name);
  res.send(candyBars);
});

candyBarsRouter.patch("/candyBars/:name", async (req, res) => {
  await updateOneCandyBar(req.params.name);
  res.status(200);
});

candyBarsRouter.post("/candyBars/", async (req, res) => {
  await createACandyBar(req.body);
  res.status(200);
});

candyBarsRouter.delete("/candyBars/:name", async (req, res) => {
  await deleteOneCandyBar(req.params.name);
  res.status(200);
});
