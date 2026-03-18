<template>
  <div class="container">
    <div class="card">
      <h1>Crear cuenta</h1>

      <form @submit.prevent="submit">

        <div class="grid">
          <div class="input-group">
            <label>Nombre</label>
            <input v-model="form.nombre" required />
          </div>

          <div class="input-group">
            <label>Apellido</label>
            <input v-model="form.apellido" required />
          </div>
        </div>

        <div class="input-group">
          <label>Correo</label>
          <input type="email" v-model="form.correo" required />
        </div>

        <div class="input-group">
          <label>Contraseña</label>
          <input type="password" v-model="form.password" required />
        </div>

        <div class="grid">
          <div class="input-group">
            <label>Teléfono</label>
            <input v-model="form.telefono" />
          </div>

          <div class="input-group">
            <label>Ciudad</label>
            <input v-model="form.ciudad" />
          </div>
        </div>

        <div class="grid">
          <div class="input-group">
            <label>Tipo de documento</label>
            <input v-model="form.tipo_documento" />
          </div>

          <div class="input-group">
            <label>Número de documento</label>
            <input v-model="form.numero_documento" />
          </div>
        </div>

        <div class="grid">
          <div class="input-group">
            <label>Fecha de nacimiento</label>
            <input type="date" v-model="form.fecha_nacimiento" />
          </div>

          <div class="input-group">
            <label>Rol</label>
            <select v-model="form.id_rol" required>
              <option disabled value="">Seleccione un rol</option>
              <option v-for="rol in roles" :key="rol.id_rol" :value="rol.id_rol">
                {{ rol.nombre_rol }}
              </option>
            </select>
          </div>
        </div>

        <div class="input-group">
          <label>Dirección</label>
          <input v-model="form.direccion" />
        </div>

        <button type="submit">Registrarse</button>

      </form>

      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { register, getRoles } from "../api/authService";

const router = useRouter();

const roles = ref([]);

const form = ref({
  nombre: "",
  apellido: "",
  correo: "",
  password: "",
  telefono: "",
  tipo_documento: "",
  numero_documento: "",
  fecha_nacimiento: "",
  direccion: "",
  ciudad: "",
  id_rol: ""
});

const error = ref("");

onMounted(async () => {
  try {
    const res = await getRoles();
    roles.value = res.data;
  } catch (err) {
    console.error("Error cargando roles", err);
  }
});

const submit = async () => {
  error.value = "";

  try {
    await register(form.value);
    router.push("/login");
  } catch (err) {
    console.error(err);
    error.value = err.response?.data?.error || "Error en el registro";
  }
};
</script>

<style scoped>
/* Fondo */
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

/* Card */
.card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

/* Título */
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

/* Inputs */
.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.input-group label {
  font-weight: bold;
  margin-bottom: 5px;
}

.input-group input,
.input-group select {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: 0.3s;
}

.input-group input:focus,
.input-group select:focus {
  border-color: #4facfe;
  outline: none;
  box-shadow: 0 0 5px rgba(79,172,254,0.5);
}

/* Botón */
button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #4facfe;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #00c6ff;
}

/* Error */
.error {
  margin-top: 10px;
  color: red;
  text-align: center;
}
</style>