
//#region Importaciones
import { Router } from "express";

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controllers.js";
//#endregion

const router = Router();

//#region Rutas URL
router.get("/productos", getProducts);

router.get("/productos/:id", getProduct);

router.post("/productos", createProduct);

router.put("/productos/:id", updateProduct);

router.delete("/productos/:id", deleteProduct);
//#endregion

export default router;
