import "dotenv/config";
import express from "express";
import productRoute from "./routes/productRoute.js";
import providerRoute from "./routes/providerRoute.js";

const app = express(productRoute);
app.use(express.json());
app.use("/product", productRoute);
app.use("/provider", providerRoute);
app.listen(process.env.PORT, (err) => {
  console.log(err ? err : `>>>---API RODANDO EM ${process.env.PORT}---<<<`);
});
