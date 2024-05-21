
//#region Importaciones 
import { getConnection } from "../database/connection.js";

import { querys } from "../database/querys.js";

import sql from "mssql";
//#endregion

//#region getProducts
export const getProducts = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(querys.getProducts);
  res.json(result.recordset);
  console.log(result);
};
//#endregion

//#region getProduct
export const getProduct = async (req, res) => {
  console.log(req.params.id);

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query(querys.getProduct);

  if (result.rowsAffected[0] === 0)
    return res.status(404).json({ message: "Product not found" });

  return res.json(result.recordset[0]);
};
//#endregion

//#region createProduct
export const createProduct = async (req, res) => {
  console.log(req.body);

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("name", sql.VarChar, req.body.name)
    .input("description", sql.Text, req.body.description)
    .input("quantity", sql.Int, req.body.quantity)
    .input("price", sql.Decimal, req.body.price)
    .query(querys.createProduct);
  console.log(result);
  //res.send("creando un producto");
  res.json({
    id: result.recordset[0].id,
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    price: req.body.price,
  });
};
//#endregion

//#region updateProduct
export const updateProduct = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .input("name", sql.VarChar, req.body.name)
    .input("description", sql.Text, req.body.description)
    .input("quantity", sql.Int, req.body.quantity)
    .input("price", sql.Decimal, req.body.price)
    .query(querys.updateProduct);
  console.log(result);
  if (result.rowsAffected[0] === 0)
    return res.status(404).json({ message: "Product not found" });

  //res.json({ message: "Product Actualizado" });
  res.json({
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    price: req.body.price,
  });
};
//#endregion

//#region deleteProduct
export const deleteProduct = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query(querys.deleteProduct);
  console.log(result);
  if (result.rowsAffected[0] === 0)
    return res.status(404).json({ message: "Producto not found" });
  return res.json({ message: "Product deleted" });
};
//#endregion