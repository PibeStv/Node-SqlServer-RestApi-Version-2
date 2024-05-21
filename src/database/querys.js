
//#region Consultas de BD
export const querys = {
  getProducts: "SELECT * FROM products",

  getProduct: "SELECT * FROM products where Id = @Id",

  createProduct:
    "INSERT INTO products  (name, description, quantity, price) VALUES (@name, @description, @quantity, @price); SELECT SCOPE_IDENTITY() AS id;",

  deleteProduct: "DELETE FROM products WHERE id = @id",

  updateProduct:
    "UPDATE products SET name = @name, description = @description, quantity = @quantity, price = @price WHERE id = @id",
};
//#endregion