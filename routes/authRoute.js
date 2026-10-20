import { Router } from "express";
import sb from "../config/supabase.js";
const authRoute = Router();
authRoute.post("/singup", (req, res) => {
  sb.singup(req, res);
});
authRoute.post("/login", (req, res) => {
  sb.login(req, res);
});
Object.freeze(authRoute);
export default authRoute;
