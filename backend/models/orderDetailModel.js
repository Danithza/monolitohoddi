const pool = require("../config/db");
const sql = require("mssql");

const OrderDetailModel = {

    getByOrder: async (id) => {

        await pool.connect();

        const result = await pool.request()
            .input("id", sql.Int, id)
            .query(`
                SELECT * FROM Detalle_Pedido
                WHERE id_pedido=@id
            `);

        return result.recordset;
    },

    create: async (detail) => {

        return await pool.request()
            .input("cantidad", sql.Int, detail.cantidad)
            .input("descuento", sql.Decimal, detail.descuento)
            .input("subtotal", sql.Decimal, detail.sub_total)
            .input("total", sql.Decimal, detail.total)
            .input("pedido", sql.Int, detail.id_pedido)
            .input("producto", sql.Int, detail.id_producto)
            .query(`
                INSERT INTO Detalle_Pedido
                (cantidad,descuento,sub_total,total,id_pedido,id_producto)
                VALUES
                (@cantidad,@descuento,@subtotal,@total,@pedido,@producto)
            `);
    }

};

module.exports = OrderDetailModel;