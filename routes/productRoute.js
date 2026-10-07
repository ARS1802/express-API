import { Router } from "express";
import ProductController from "../controller/productController.js";
import sb from "../config/supabase.js";
const controller = new ProductController(sb);
const productRoute = Router();
productRoute.get("/health", (req, res) => {
  controller.health(req, res);
});
productRoute.get("/produto", (req, res) => {
  controller.getProduct(req, res);
});
productRoute.post("/produto", (req, res) => {
  controller.postProduct(req, res);
});

Object.freeze(productRoute);
export default productRoute;
