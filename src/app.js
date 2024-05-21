import express from "express";
import config from './config.js'
import productRoutes from "./routes/products.routes.js";

const app = express();

app.set('port',config.port)

app.use(express.json())

app.use(productRoutes);

export default app;


