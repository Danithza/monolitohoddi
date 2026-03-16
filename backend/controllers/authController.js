const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {

    register: async (req, res) => {
        try {
            const {
                nombre,
                apellido,
                correo,
                password, // siempre usar password en Postman
                telefono,
                tipo_documento,
                numero_documento,
                fecha_nacimiento,
                direccion,
                ciudad
            } = req.body;

            // Validar que exista password
            if (!password) {
                return res.status(400).json({ error: "La contraseña es requerida" });
            }

            // Verificar si el usuario ya existe
            const existingUser = await UserModel.findByEmail(correo);
            if (existingUser) {
                return res.status(400).json({ error: "El correo ya está registrado" });
            }

            // Hashear la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            // Crear el usuario en la BD
            await UserModel.create({
                nombre,
                apellido,
                correo,
                password: hashedPassword,
                telefono,
                tipo_documento,
                numero_documento,
                fecha_nacimiento,
                direccion,
                ciudad,
                foto_perfil: null,
                estado_cuenta: "Activo",
                id_rol: 1 // por defecto
            });

            res.status(201).json({ message: "Usuario registrado correctamente" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    login: async (req, res) => {
        try {
            const { correo, password } = req.body;

            if (!correo || !password) {
                return res.status(400).json({ error: "Correo y contraseña son requeridos" });
            }

            const user = await UserModel.findByEmail(correo);

            if (!user) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }

            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return res.status(401).json({ error: "Contraseña incorrecta" });
            }

            const token = jwt.sign({ id: user.id_usuario }, "secretkey", { expiresIn: "1h" });

            res.json({ message: "Login exitoso", token });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = authController;