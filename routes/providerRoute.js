import { Router } from "express";
import ProviderController from "../controller/providerController.js";
import sb from "../config/supabase.js";
const controller = new ProviderController(sb);
const providerRoute = Router();
providerRoute.get("/health", (req, res) => {
  res.send("HEALTH OK");
});
providerRoute.get("/get", (req, res) => {
  controller.getProvider(req, res);
});
providerRoute.post("/post", (req, res) => {
  controller.postProvider(req, res);
});
Object.freeze(providerRoute);
export default providerRoute;
