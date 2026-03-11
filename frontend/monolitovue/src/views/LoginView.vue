<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <div>
        <label for="correo">Correo</label>
        <input id="correo" v-model="form.correo" required />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input id="password" type="password" v-model="form.password" required />
      </div>
      <button type="submit">Ingresar</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../api/authService";

const router = useRouter();
const form = ref({ correo: "", password: "" });
const error = ref("");

const submit = async () => {
  error.value = "";
  try {
    const res = await login(form.value);
    // guardar token para futuras peticiones
    if (res.data && res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    router.push("/");
  } catch (err) {
    error.value = err.response?.data?.error || "Error en el login";
  }
};
</script>

<style scoped>
.login {
  padding: 1rem;
  max-width: 400px;
}
.login .error {
  color: red;
  margin-top: 0.5rem;
}
</style>