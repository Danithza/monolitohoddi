<template>
  <div class="register">
    <h1>Registro</h1>
    <form @submit.prevent="submit">
      <div>
        <label for="nombre">Nombre</label>
        <input id="nombre" v-model="form.nombre" required />
      </div>
      <div>
        <label for="apellido">Apellido</label>
        <input id="apellido" v-model="form.apellido" required />
      </div>
      <div>
        <label for="correo">Correo</label>
        <input id="correo" v-model="form.correo" required />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input id="password" type="password" v-model="form.password" required />
      </div>
      <div>
        <label for="telefono">Teléfono</label>
        <input id="telefono" v-model="form.telefono" />
      </div>
      <div>
        <label for="tipo_documento">Tipo de documento</label>
        <input id="tipo_documento" v-model="form.tipo_documento" />
      </div>
      <div>
        <label for="numero_documento">Número de documento</label>
        <input id="numero_documento" v-model="form.numero_documento" />
      </div>
      <div>
        <label for="fecha_nacimiento">Fecha de nacimiento</label>
        <input id="fecha_nacimiento" type="date" v-model="form.fecha_nacimiento" />
      </div>
      <div>
        <label for="direccion">Dirección</label>
        <input id="direccion" v-model="form.direccion" />
      </div>
      <div>
        <label for="ciudad">Ciudad</label>
        <input id="ciudad" v-model="form.ciudad" />
      </div>
      <button type="submit">Registrar</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register } from "../api/authService";

const router = useRouter();
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
  ciudad: ""
});
const error = ref("");

const submit = async () => {
  error.value = "";
  try {
    await register(form.value);
    router.push("/login");
  } catch (err) {
    error.value = err.response?.data?.error || "Error en el registro";
  }
};
</script>

<style scoped>
.register {
  padding: 1rem;
  max-width: 500px;
}
.register .error {
  color: red;
  margin-top: 0.5rem;
}
</style>