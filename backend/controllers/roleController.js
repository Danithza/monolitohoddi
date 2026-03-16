const RoleModel = require("../models/roleModel");

const roleController = {

    getRoles: async (req, res) => {
        try {
            const roles = await RoleModel.getAll();
            res.json(roles);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createRole: async (req, res) => {
        try {
            const { nombre_rol } = req.body;
            await RoleModel.create({ nombre_rol });
            res.status(201).json({ message: "Rol creado correctamente" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

};

module.exports = roleController;