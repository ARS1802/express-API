import { Router } from "express";

const providerRoute = Router();
providerRoute.get("/health", (req, res) => {
  res.send("HEALTH OK");
});
providerRoute.get("/provider", (req, res) => {});
providerRoute.post("/provider", (req, res) => {});
Object.freeze(providerRoute);
export default providerRoute;
