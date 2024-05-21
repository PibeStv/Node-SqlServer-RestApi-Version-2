
//#region Importaciones
import sql from "mssql";
//#endregion

//#region Parametros de Conexion
const dbSettings = {
  user: "pibe",
  password: "pibe2266",
  server: "localhost",
  database: "BDprueba",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};
//#endregion

//#region getConnection
export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query("SELECT 1");
    return pool;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
//#endregion