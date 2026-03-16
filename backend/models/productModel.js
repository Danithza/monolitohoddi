const pool = require("../config/db");
const sql = require("mssql");

const ProductModel = {

    getAll: async () => {

        await pool.connect();

        const result = await pool.request()
            .query("SELECT * FROM Producto");

        return result.recordset;
    },

    create: async (product) => {

        return await pool.request()
            .input("nombre", sql.VarChar, product.nombre)
            .input("descripcion", sql.Text, product.descripcion)
            .input("marca", sql.VarChar, product.marca)
            .input("precio", sql.Decimal(10,2), product.precio)
            .input("talla", sql.VarChar, product.talla)
            .input("color", sql.VarChar, product.color)
            .input("imagen_url", sql.VarChar, product.imagen_url)
            .input("stock", sql.Int, product.stock)
            .input("estado", sql.VarChar, product.estado)
            .input("visible", sql.Bit, product.visible)
            .input("id_categoria", sql.Int, product.id_categoria)
            .query(`
                INSERT INTO Producto
                (nombre, descripcion, marca, precio, talla, color, imagen_url, stock, estado, visible, id_categoria)
                VALUES
                (@nombre, @descripcion, @marca, @precio, @talla, @color, @imagen_url, @stock, @estado, @visible, @id_categoria)
            `);
    },

    update: async (id, product) => {

        return await pool.request()
            .input("id", sql.Int, id)
            .input("nombre", sql.VarChar, product.nombre)
            .input("descripcion", sql.Text, product.descripcion)
            .input("marca", sql.VarChar, product.marca)
            .input("precio", sql.Decimal(10,2), product.precio)
            .input("talla", sql.VarChar, product.talla)
            .input("color", sql.VarChar, product.color)
            .input("imagen_url", sql.VarChar, product.imagen_url)
            .input("stock", sql.Int, product.stock)
            .input("estado", sql.VarChar, product.estado)
            .input("visible", sql.Bit, product.visible)
            .input("id_categoria", sql.Int, product.id_categoria)
            .query(`
                UPDATE Producto
                SET 
                nombre=@nombre,
                descripcion=@descripcion,
                marca=@marca,
                precio=@precio,
                talla=@talla,
                color=@color,
                imagen_url=@imagen_url,
                stock=@stock,
                estado=@estado,
                visible=@visible,
                id_categoria=@id_categoria
                WHERE id_producto=@id
            `);
    },

    delete: async (id) => {

        return await pool.request()
            .input("id", sql.Int, id)
            .query("DELETE FROM Producto WHERE id_producto=@id");
    }

};

module.exports = ProductModel;