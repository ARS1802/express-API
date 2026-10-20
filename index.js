import "dotenv/config";
import express from "express";
import productRoute from "./routes/productRoute.js";
import providerRoute from "./routes/providerRoute.js";
import authRoute from "./routes/authRoute.js";

const app = express();
app.use(express.json());
app.use("/product", productRoute);
app.use("/provider", providerRoute);
app.use("/auth", authRoute);
app.listen(process.env.PORT, (err) => {
  console.log(err ? err : `>>>---API RODANDO EM ${process.env.PORT}---<<<`);
});
